#!/usr/bin/env node
/**
 * Vendors the two public catalogues and generates the addon pages from them.
 *
 * Run via:  npm run sync-registry
 *
 * Same shape as scripts/generate-api-surface.mjs, and for the same reason: the
 * catalogues are build artifacts of other repos, so we read them where they are
 * authored, vendor a copy into src/data/, and generate from the vendored copy.
 * The site then builds with no network and no sibling checkout — which is what
 * CI has.
 *
 *   addons   ← the addons monorepo's per-package .pikku artifacts (local)
 *   openapis ← registry:listOpenApis on the fabric API (network)
 *
 * Nothing in docs/addons/ is written by hand — edits there are lost on the next
 * run. To change a page, change the addon's README or its function JSDoc.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync, readdirSync } from 'node:fs'
import { dirname, resolve, basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * In preference order, like the api-surface script. The artifacts live under
 * each package's `.pikku/addon/`, which only exists once that package has been
 * built — an unbuilt checkout falls through to the vendored copy rather than
 * regenerating the catalogue with holes in it.
 */
const ADDON_SOURCES = [
  resolve(root, '../addons/packages'),
  resolve(root, '.addons/packages'),
]
const VENDORED_ADDONS = resolve(root, 'src/data/addons.json')
const VENDORED_OPENAPIS = resolve(root, 'static/registry/openapis.json')
const LOGO_DIR = resolve(root, 'static/addons')
const OUT_DIR = resolve(root, 'docs/addons')

const FABRIC = process.env.PIKKU_FABRIC_URL ?? 'https://api.pikkufabric.com'

/** Category dir name -> how it reads as a sidebar label. */
const CATEGORY_LABELS = {
  ai: 'AI',
  analytics: 'Analytics',
  automation: 'Automation',
  cache: 'Cache',
  cloud: 'Cloud',
  communication: 'Communication',
  crm: 'CRM',
  crypto: 'Crypto',
  data: 'Data',
  database: 'Database',
  devops: 'DevOps',
  documents: 'Documents',
  ecommerce: 'E-commerce',
  email: 'Email',
  esoteric: 'Esoteric',
  forms: 'Forms',
  infrastructure: 'Infrastructure',
  media: 'Media',
  monitoring: 'Monitoring',
}

// ── helpers ────────────────────────────────────────────────

const readJson = (path) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : undefined)

/** The addon's one-line pitch: the first prose line of its README, under the H1. */
const readmeSummary = (dir) => {
  const path = join(dir, 'README.md')
  if (!existsSync(path)) return undefined
  const lines = readFileSync(path, 'utf8').split('\n')
  const start = lines.findIndex((line) => line.startsWith('# '))
  for (const line of lines.slice(start + 1)) {
    const text = line.trim()
    if (text && !text.startsWith('#')) return text
  }
  return undefined
}

/** `mailer-lite` -> `Mailer Lite`, `aws-ses` -> `AWS SES`. */
const UPPER = new Set(['aws', 'gcp', 'api', 'ai', 'crm', 'sms', 'ses', 'sns', 's3', 'db', 'ftp', 'id'])
const titleise = (slug) =>
  slug
    .split('-')
    .map((word) => (UPPER.has(word) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(' ')

/** Absolute paths from the authoring machine must never reach a public page. */
const stripPath = (file) => (typeof file === 'string' ? file.replace(/^.*?\/packages\/[^/]+\/[^/]+\//, '') : undefined)

/**
 * Generated prose is arbitrary upstream text. `{id}` from a URL template is a
 * JSX expression to MDX and `<T>` is a tag, and frontmatter `format: md` does
 * not reliably stop either — so neutralise them as entities, which render as
 * themselves either way. Pipes would end a table cell.
 */
const escape = (text) =>
  String(text ?? '')
    .replace(/\|/g, '\\|')
    .replace(/[{}]/g, (brace) => (brace === '{' ? '&#123;' : '&#125;'))
    .replace(/</g, '&lt;')
    .replace(/\n+/g, ' ')
    .trim()

/**
 * Addon JSDoc frequently carries a whole usage sample after the summary line.
 * A table cell wants the summary; the sample belongs in the addon's own README.
 */
const summarise = (text, limit = 160) => {
  // Work on the raw text — strip, then truncate, and only escape at the end so
  // truncation can never cut an entity in half and the strippers can never eat
  // the `#` out of one.
  const raw = String(text ?? '')
    // Upstream prose links into the vendor's own docs, often root-relative
    // (`/api-reference/...`), which Docusaurus would resolve against pikku.dev
    // and report as broken. Keep the words, drop the link.
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // URLs are noise in a one-line cell, and truncating one mid-string leaves a
    // fragment that CommonMark still autolinks — which then fails to parse.
    .replace(/<?https?:\/\/\S+>?/g, '')
    .replace(/#{1,6}\s+/g, '') // upstream JSDoc often carries its own headings
    .replace(/\s+/g, ' ')
    .trim()
  if (!raw) return ''
  const sentence = raw.match(/^.*?[.!?](?=\s|$)/)
  const short = sentence ? sentence[0] : raw
  return escape(short.length > limit ? `${short.slice(0, limit - 1).trimEnd()}…` : short)
}

// ── collecting the addons ──────────────────────────────────

const collectAddons = (packagesDir) => {
  const addons = []
  for (const category of readdirSync(packagesDir).sort()) {
    if (category === 'node_modules') continue
    const categoryDir = join(packagesDir, category)
    let entries
    try {
      entries = readdirSync(categoryDir).sort()
    } catch {
      continue // a stray file among the category dirs
    }
    for (const slug of entries) {
      const dir = join(categoryDir, slug)
      const pkg = readJson(join(dir, 'package.json'))
      if (!pkg?.name) continue

      const meta = join(dir, '.pikku/addon')
      const verbose = readJson(join(meta, 'function/pikku-functions-meta-verbose.gen.json')) ?? {}
      const plain = readJson(join(meta, 'function/pikku-functions-meta.gen.json')) ?? {}
      const secretsMeta = readJson(join(meta, 'secrets/pikku-secrets-meta.gen.json')) ?? {}
      const rpc = readJson(join(meta, 'rpc/pikku-rpc-wirings-meta.internal.gen.json')) ?? {}

      const functions = Object.entries({ ...plain, ...verbose })
        .map(([name, fn]) => ({
          name,
          description: fn.description,
          sessionless: fn.sessionless ?? undefined,
          services: fn.services?.services ?? [],
          input: fn.inputSchemaName ?? undefined,
          output: fn.outputSchemaName ?? undefined,
          rpc: rpc[name] ?? undefined,
          sourceFile: stripPath(fn.sourceFile),
        }))
        .sort((a, b) => a.name.localeCompare(b.name))

      const secrets = Object.values(secretsMeta)
        .map((secret) => ({
          name: secret.name,
          displayName: secret.displayName,
          description: secret.description,
          secretId: secret.secretId,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))

      const svg = readdirSync(dir).find((file) => file.endsWith('.svg'))

      addons.push({
        name: pkg.name,
        slug,
        category,
        version: pkg.version,
        title: titleise(slug),
        description: readmeSummary(dir),
        logo: svg ? `/addons/${slug}.svg` : undefined,
        functions,
        secrets,
        _svgPath: svg ? join(dir, svg) : undefined,
      })
    }
  }
  return addons.sort((a, b) => a.slug.localeCompare(b.slug))
}

// ── the OpenAPI catalogue ──────────────────────────────────

const rpc = async (name) => {
  const response = await fetch(`${FABRIC}/rpc/${name}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  })
  if (!response.ok) throw new Error(`${name} -> HTTP ${response.status} ${await response.text()}`)
  return response.json()
}

/**
 * The full listing is ~4MB, most of it spec detail the browse page never shows.
 * Trim to what the cards and the filters actually read, so the asset the
 * browser downloads stays reasonable.
 */
const trimOpenApi = (entry) => ({
  id: entry.id ?? entry.name,
  name: entry.name,
  title: entry.title ?? entry.info?.title,
  provider: entry.provider,
  description: entry.description ?? entry.info?.description,
  categories: entry.categories ?? [],
  logo: entry.logo ?? entry.info?.['x-logo']?.url,
  operations: entry.operationCount ?? entry.operations ?? undefined,
  version: entry.version,
})

const syncOpenApis = async () => {
  try {
    const [list, providers] = await Promise.all([
      rpc('registry:listOpenApis'),
      rpc('registry:listOpenApiProviders'),
    ])
    const apis = (Array.isArray(list) ? list : (list.apis ?? [])).map(trimOpenApi)
    mkdirSync(dirname(VENDORED_OPENAPIS), { recursive: true })
    writeFileSync(VENDORED_OPENAPIS, JSON.stringify({ apis, providers }))
    console.log(`[registry] openapis: ${apis.length} APIs from ${providers.length} providers -> ${VENDORED_OPENAPIS}`)
    return apis.length
  } catch (error) {
    const existing = readJson(VENDORED_OPENAPIS)
    console.warn(`[registry] openapis: FETCH FAILED — ${error.message}`)
    if (existing) {
      console.warn(`[registry] openapis: keeping the vendored copy (${existing.apis.length} APIs). Nothing was overwritten.`)
      return existing.apis.length
    }
    console.warn('[registry] openapis: no vendored copy to fall back on — the browse page will render empty until this succeeds.')
    return 0
  }
}

// ── rendering ──────────────────────────────────────────────

const renderAddonPage = (addon) => {
  const label = CATEGORY_LABELS[addon.category] ?? titleise(addon.category)
  const out = []
  out.push('---')
  out.push('format: md')
  out.push(`title: ${addon.title}`)
  if (addon.description) out.push(`description: ${JSON.stringify(summarise(addon.description, 200))}`)
  out.push(`sidebar_label: ${addon.title}`)
  out.push('---')
  out.push('')
  out.push(`# ${addon.title}`)
  out.push('')
  if (addon.description) out.push(addon.description, '')
  out.push('```bash')
  out.push(`npm install ${addon.name}`)
  out.push('```')
  out.push('')
  out.push(`Category: **${label}** · Version: \`${addon.version}\` · Package: \`${addon.name}\``)
  out.push('')

  if (addon.functions.length > 0) {
    out.push('## Functions', '')
    out.push('| Function | Description | Services |')
    out.push('| -------- | ----------- | -------- |')
    for (const fn of addon.functions) {
      out.push(`| \`${fn.name}\` | ${summarise(fn.description) || '—'} | ${fn.services.map((s) => `\`${s}\``).join(', ') || '—'} |`)
    }
    out.push('')
  }

  if (addon.secrets.length > 0) {
    out.push('## Secrets', '')
    for (const secret of addon.secrets) {
      const title = secret.displayName ?? secret.name
      out.push(`- \`${secret.secretId}\` — ${summarise(secret.description) || title}`)
    }
    out.push('')
  }

  out.push('## Wiring it up', '')
  out.push('Declare the addon once, then reference its functions the way you would your own:', '')
  out.push('```typescript title="addons.wiring.ts"')
  out.push(`import { wireAddon } from '#pikku/addon'`)
  out.push('')
  out.push('wireAddon({')
  out.push(`  name: '${addon.slug}',`)
  out.push(`  package: '${addon.name}',`)
  out.push('})')
  out.push('```')
  out.push('')
  out.push('The `name` becomes the namespace its functions are called under. See [Consuming addons](/docs/addon/consuming) for the declare/wire rule and how `ref()` resolves.')
  out.push('')
  return out.join('\n')
}

const renderCategoryIndex = (category, addons) => {
  const label = CATEGORY_LABELS[category] ?? titleise(category)
  const out = []
  out.push('---')
  out.push(`title: ${label}`)
  out.push('format: md')
  out.push(`description: ${JSON.stringify(`${addons.length} pikku addons for ${label.toLowerCase()}.`)}`)
  out.push('---')
  out.push('')
  out.push(`# ${label}`)
  out.push('')
  out.push(`${addons.length} addon${addons.length === 1 ? '' : 's'}.`)
  out.push('')
  out.push('| Addon | Package | Functions |')
  out.push('| ----- | ------- | --------- |')
  for (const addon of addons) {
    out.push(`| [${addon.title}](./${addon.slug}.md) | \`${addon.name}\` | ${addon.functions.length} |`)
  }
  out.push('')
  return out.join('\n')
}

const renderIndex = (addons, byCategory) => {
  const functionCount = addons.reduce((count, addon) => count + addon.functions.length, 0)
  const out = []
  out.push('---')
  out.push('title: Addons')
  out.push('format: md')
  out.push(`description: ${JSON.stringify(`${addons.length} pikku addons — ${functionCount} ready-made functions you can wire into your app.`)}`)
  out.push('---')
  out.push('')
  out.push('# Addons')
  out.push('')
  out.push(
    `**${addons.length} addons** shipping **${functionCount} functions** between them. An addon is a package of pikku functions someone else already wrote — you declare it once, and its functions become callable from yours through \`ref()\`, with the same types, permissions and tree-shaking as your own code.`
  )
  out.push('')
  out.push('```bash')
  out.push('npm install @pikku/addon-<name>')
  out.push('```')
  out.push('')
  out.push('See [Addons](/docs/addon) for how to wire one up, and [writing an addon](/docs/addon) if you want to publish your own.')
  out.push('')
  out.push('## By category', '')
  out.push('| Category | Addons | Functions |')
  out.push('| -------- | ------ | --------- |')
  for (const [category, list] of byCategory) {
    const label = CATEGORY_LABELS[category] ?? titleise(category)
    const functions = list.reduce((count, addon) => count + addon.functions.length, 0)
    out.push(`| [${label}](./${category}/index.md) | ${list.length} | ${functions} |`)
  }
  out.push('')
  return out.join('\n')
}

// ── run ────────────────────────────────────────────────────

const source = ADDON_SOURCES.find((path) => existsSync(path))
let addons
if (source) {
  addons = collectAddons(source)
  console.log(`[registry] addons: ${addons.length} packages read from ${source}`)
} else {
  const vendored = readJson(VENDORED_ADDONS)
  if (!vendored) {
    console.error(
      `[registry] No addons source found and nothing vendored. Looked in:\n  ${ADDON_SOURCES.join('\n  ')}\n` +
        'Check out the addons monorepo beside this one, or restore src/data/addons.json.'
    )
    process.exit(1)
  }
  addons = vendored.addons
  console.log(`[registry] addons: no checkout found, generating from the vendored ${addons.length}`)
}

// Logos next, while we still have the source paths to copy from.
if (source) {
  mkdirSync(LOGO_DIR, { recursive: true })
  let copied = 0
  for (const addon of addons) {
    if (!addon._svgPath) continue
    copyFileSync(addon._svgPath, resolve(LOGO_DIR, `${addon.slug}.svg`))
    copied++
  }
  console.log(`[registry] addons: ${copied} logos -> ${LOGO_DIR}`)
}
for (const addon of addons) delete addon._svgPath

mkdirSync(dirname(VENDORED_ADDONS), { recursive: true })
writeFileSync(VENDORED_ADDONS, JSON.stringify({ addons }, null, 2))

const byCategory = [...new Set(addons.map((addon) => addon.category))]
  .sort()
  .map((category) => [category, addons.filter((addon) => addon.category === category)])

rmSync(OUT_DIR, { recursive: true, force: true })
mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(resolve(OUT_DIR, 'index.md'), renderIndex(addons, byCategory))

let pages = 1
for (const [category, list] of byCategory) {
  const dir = resolve(OUT_DIR, category)
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.md'), renderCategoryIndex(category, list))
  pages++
  for (const addon of list) {
    writeFileSync(resolve(dir, `${addon.slug}.md`), renderAddonPage(addon))
    pages++
  }
}

const apiCount = await syncOpenApis()

console.log(`[registry] wrote ${pages} addon pages -> ${OUT_DIR}`)
console.log(`[registry] vendored ${VENDORED_ADDONS}`)
console.log(`[registry] catalogue: ${addons.length} addons, ${apiCount} OpenAPI specs`)
