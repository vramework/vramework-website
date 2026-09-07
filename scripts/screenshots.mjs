// Screenshots every page in the built sitemap, so a layout regression is
// something you can see in a diff rather than something you have to go looking
// for. Output lands in screenshots/<viewport>/<slug>.jpg.
//
//   npm i -D playwright && npx playwright install chromium
//   npm run build && npm run serve      # in one terminal
//   npm run screenshots                 # in another
//
// Playwright is deliberately not in package.json: the site's CI installs from a
// frozen yarn.lock, and a review-only tool has no business being in the deploy's
// dependency tree. Install it locally when you want a sweep.
//
// The default port matches `npm run serve`. Point it somewhere else with
// BASE_URL=https://pikku.dev, and narrow it to a prefix with a filter argument:
// `npm run screenshots -- /docs/api` shoots only paths starting with that.
//
// It also writes screenshots/index.html — open that to click through every
// shot and leave notes on the ones that look wrong.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
// Imported dynamically so a missing install is a sentence rather than a stack.
const { chromium } = await import('playwright').catch(() => {
  console.error('[screenshots] playwright is not installed — run:')
  console.error('  npm i -D playwright && npx playwright install chromium')
  process.exit(1)
})

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3005'
const OUT_DIR = 'screenshots'
const FILTER = process.argv[2] ?? ''

// 1x JPEG, not 2x PNG: these are read for layout, and full-page retina PNGs of
// ~285 pages come to hundreds of megabytes for detail nobody reviewing a column
// width needs. Bump SCALE=2 for a one-off if you need to read small type.
const SCALE = Number(process.env.SCALE ?? 1)
const QUALITY = Number(process.env.QUALITY ?? 80)

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}

// The sitemap is the site's own list of what it publishes, so it stays correct
// as pages come and go without anything here needing to know about them.
const paths = [...(await readFile('build/sitemap.xml', 'utf8')).matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(([, loc]) => new URL(loc).pathname)
  .filter((path) => path.startsWith(FILTER))
  .sort()

if (paths.length === 0) {
  console.error(`[screenshots] no pages matched ${FILTER || '(no filter)'}`)
  process.exit(1)
}

const response = await fetch(BASE_URL).catch(() => null)
if (!response) {
  console.error(`[screenshots] nothing listening on ${BASE_URL} — run \`npm run serve\` first`)
  process.exit(1)
}

// `/` is the only path that slugs to nothing, and two pages differing only in
// depth must not collide, so keep every segment.
const slugify = (path) => path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home'

const browser = await chromium.launch()
let shot = 0
let failed = 0

for (const [name, viewport] of Object.entries(VIEWPORTS)) {
  let missed = 0
  const dir = join(OUT_DIR, name)
  // Wipe rather than overwrite: a page that has been deleted should not leave a
  // stale screenshot behind looking like current output.
  await rm(dir, { recursive: true, force: true })
  await mkdir(dir, { recursive: true })

  const context = await browser.newContext({ viewport, deviceScaleFactor: SCALE })
  const page = await context.newPage()

  for (const path of paths) {
    try {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle', timeout: 30_000 })
      // The homepage animates its entrance; without this the shot catches it
      // mid-fade and every run produces a different image.
      await page.waitForTimeout(400)
      await page.screenshot({
        path: join(dir, `${slugify(path)}.jpg`),
        fullPage: true,
        type: 'jpeg',
        quality: QUALITY,
      })
      shot++
    } catch (error) {
      console.error(`[screenshots] ${name} ${path} — ${error.message.split('\n')[0]}`)
      missed++
      failed++
    }
  }

  await context.close()
  console.log(`[screenshots] ${name}: ${paths.length - missed} pages -> ${dir}`)
}

await browser.close()

// The viewer carries its own manifest inline rather than fetching one, because
// it is opened over file:// where fetch is blocked. Regenerating it here also
// means it can never list a page the sweep did not shoot.
const viewer = (await readFile('scripts/screenshots-viewer.html', 'utf8')).replace(
  '__MANIFEST__',
  JSON.stringify({
    baseUrl: BASE_URL,
    viewports: Object.keys(VIEWPORTS),
    pages: paths.map((path) => ({ path, slug: slugify(path) })),
  })
)
await writeFile(join(OUT_DIR, 'index.html'), viewer)

console.log(`[screenshots] ${shot} images, ${failed} failed`)
console.log(`[screenshots] review them: open ${join(OUT_DIR, 'index.html')}`)
process.exit(failed > 0 ? 1 : 0)
