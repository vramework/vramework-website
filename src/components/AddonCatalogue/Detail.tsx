import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import { PaperPage, Section, Wrap } from '@site/src/components/PaperLayout';
import { Mark, type AddonEntry } from './Browse';
import styles from './catalogue.module.css';

type AddonFunction = {
  name: string;
  description?: string;
  sessionless?: boolean;
  services?: string[];
  input?: string;
  output?: string;
  rpc?: string;
};

type AddonSecret = {
  name: string;
  displayName?: string;
  description?: string;
  secretId: string;
};

type Addon = AddonEntry & {
  version?: string;
  functions?: AddonFunction[];
  secrets?: AddonSecret[];
};

const PAGE = 60;

// The namespace is the consumer's choice, but a plausible one makes the RPC
// names on this page readable rather than abstract.
const suggestedNamespace = (slug: string) =>
  slug.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());

export default function Detail({ addon }: { addon: Addon }): React.ReactNode {
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(PAGE);

  const functions = addon.functions ?? [];
  const secrets = addon.secrets ?? [];
  const ns = suggestedNamespace(addon.slug);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return functions;
    return functions.filter(
      (fn) =>
        fn.name.toLowerCase().includes(needle) ||
        (fn.description ?? '').toLowerCase().includes(needle)
    );
  }, [functions, query]);

  const visible = matches.slice(0, shown);

  // Most addons are sessionless top to bottom, where the tag on every row says
  // nothing. It earns its place only when the addon actually mixes the two.
  const sessionVaries =
    functions.some((fn) => fn.sessionless) && functions.some((fn) => !fn.sessionless);

  return (
    <Layout
      title={`${addon.title} addon`}
      description={
        addon.description ??
        `The ${addon.title} addon for Pikku — ${functions.length} typed functions, wired with one call.`
      }
    >
      <PaperPage>
        <Section>
          <Wrap>
            <div>
              <Link className={styles.back} to="/addons">
                ← Addon catalogue
              </Link>

              <div className={styles.detailHead}>
                <Mark addon={addon} large />
                <div>
                  <h1 className={styles.detailTitle}>{addon.title}</h1>
                  <div className={styles.detailMeta}>
                    <span>{addon.name}</span>
                    {addon.version && (
                      <>
                        <span className={styles.dot}>·</span>
                        <span>v{addon.version}</span>
                      </>
                    )}
                    <span className={styles.dot}>·</span>
                    <Link to={`/addons?category=${addon.category}`}>
                      {addon.categoryLabel}
                    </Link>
                  </div>
                </div>
              </div>

              {addon.description && <p className={styles.detailLead}>{addon.description}</p>}
            </div>
          </Wrap>
        </Section>

        <Section variant="alt">
          <Wrap>
            <div className={styles.blockHead}>
              <h2 className={styles.blockTitle}>Wire it</h2>
              <span className={styles.blockNote}>two lines, one namespace</span>
            </div>

            <CodeBlock language="bash">{`npm install ${addon.name}`}</CodeBlock>

            <CodeBlock language="typescript" title="addons.wiring.ts">
              {`import { wireAddon } from '#pikku/addon'\n\nwireAddon({\n  name: '${ns}',\n  package: '${addon.name}',\n})`}
            </CodeBlock>

            <p style={{ fontSize: 14, color: 'var(--paper-text-muted)', marginTop: 4 }}>
              The <code>name</code> becomes the namespace for every function below — call
              them as <code>{`${ns}:functionName`}</code>. See{' '}
              <Link to="/docs/addon/consuming">Consuming addons</Link> for secret
              overrides and registry installs.
            </p>
          </Wrap>
        </Section>

        {secrets.length > 0 && (
          <Section>
            <Wrap>
              <div className={styles.blockHead}>
                <h2 className={styles.blockTitle}>Secrets</h2>
                <span className={styles.blockNote}>
                  {secrets.length} required before first call
                </span>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Secret</th>
                    <th>Looked up as</th>
                    <th>What it is</th>
                  </tr>
                </thead>
                <tbody>
                  {secrets.map((secret) => (
                    <tr key={secret.secretId}>
                      <td>{secret.displayName ?? secret.name}</td>
                      <td>
                        <code>{secret.secretId}</code>
                      </td>
                      <td>{secret.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Wrap>
          </Section>
        )}

        <Section variant={secrets.length > 0 ? 'alt' : 'default'}>
          <Wrap>
            <div className={styles.blockHead}>
              <h2 className={styles.blockTitle}>Functions</h2>
              <span className={styles.blockNote}>
                {functions.length} {functions.length === 1 ? 'function' : 'functions'}
              </span>
            </div>

            {functions.length > PAGE && (
              <input
                type="search"
                className={styles.search}
                style={{ maxWidth: 320, marginBottom: 20 }}
                placeholder="Filter functions…"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShown(PAGE);
                }}
                aria-label="Filter functions"
              />
            )}

            {matches.length === 0 ? (
              <p className={styles.emptyBody}>No function matches “{query}”.</p>
            ) : (
              <ul className={styles.fnList}>
                {visible.map((fn) => (
                  <li className={styles.fn} key={fn.name}>
                    <div className={styles.fnTop}>
                      <code className={styles.rpc}>
                        <span className={styles.ns}>{ns}:</span>
                        {fn.rpc ?? fn.name}
                      </code>
                      {sessionVaries && fn.sessionless && (
                        <span className={styles.tag}>sessionless</span>
                      )}
                    </div>
                    {fn.description && <p className={styles.fnDesc}>{fn.description}</p>}
                    {(fn.input || fn.output) && (
                      <div className={styles.sig}>
                        {fn.input ?? 'void'}
                        <span className={styles.arrow}>→</span>
                        {fn.output ?? 'void'}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {shown < matches.length && (
              <button
                type="button"
                className={styles.moreBtn}
                onClick={() => setShown(shown + PAGE * 4)}
              >
                Show {Math.min(PAGE * 4, matches.length - shown)} more
              </button>
            )}
          </Wrap>
        </Section>
      </PaperPage>
    </Layout>
  );
}
