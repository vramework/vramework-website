import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PaperPage, Section, Wrap, Eyebrow, H1, Lead } from '../components/PaperLayout';
import { Search, ExternalLink } from 'lucide-react';
import styles from './openapis.module.css';

/* The catalogue is vendored to static/registry/openapis.json by
   `npm run sync-registry`. It is fetched rather than imported so the 2,500-odd
   entries never enter the page bundle — the browse page ships as an empty
   shell and fills in on the client. */

interface OpenApiEntry {
  id: string;
  name: string;
  title?: string;
  provider?: string;
  description?: string;
  categories?: string[];
  logo?: string;
  operations?: number;
  version?: string;
}

interface Catalogue {
  apis: OpenApiEntry[];
  providers: { provider: string; apiCount: number }[];
}

type Status = 'loading' | 'ready' | 'empty' | 'error';

const PAGE_SIZE = 48;

export default function OpenApis(): React.ReactNode {
  const url = useBaseUrl('/registry/openapis.json');
  const [status, setStatus] = useState<Status>('loading');
  const [data, setData] = useState<Catalogue>({ apis: [], providers: [] });
  const [query, setQuery] = useState('');
  const [provider, setProvider] = useState('');
  const [category, setCategory] = useState('');
  const [shown, setShown] = useState(PAGE_SIZE);

  useEffect(() => {
    let live = true;
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((catalogue: Catalogue) => {
        if (!live) return;
        setData(catalogue);
        setStatus(catalogue.apis?.length ? 'ready' : 'empty');
      })
      .catch(() => live && setStatus('error'));
    return () => {
      live = false;
    };
  }, [url]);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const api of data.apis) {
      for (const name of api.categories ?? []) counts.set(name, (counts.get(name) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [data.apis]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return data.apis.filter((api) => {
      if (provider && api.provider !== provider) return false;
      if (category && !(api.categories ?? []).includes(category)) return false;
      if (!needle) return true;
      return (
        api.name?.toLowerCase().includes(needle) ||
        api.title?.toLowerCase().includes(needle) ||
        api.provider?.toLowerCase().includes(needle)
      );
    });
  }, [data.apis, query, provider, category]);

  // A new filter should show the top of its results, not page 4 of the old ones.
  useEffect(() => setShown(PAGE_SIZE), [query, provider, category]);

  return (
    <Layout
      title="OpenAPI Catalogue"
      description="Every OpenAPI specification pikku can generate a typed client for, searchable by provider and category."
    >
      <PaperPage>
        <Section>
          <Wrap wide>
            <Eyebrow>Catalogue</Eyebrow>
            <H1>
              Every API, <em>already typed</em>
            </H1>
            <Lead>
              {status === 'ready'
                ? `${data.apis.length.toLocaleString()} OpenAPI specifications from ${data.providers.length.toLocaleString()} providers. Point pikku at one and it generates the functions, the types and the secrets for you.`
                : 'OpenAPI specifications pikku can generate typed functions from — point it at one and it writes the functions, the types and the secrets for you.'}
            </Lead>
          </Wrap>
        </Section>

        <Section variant="alt">
          <Wrap wide>
            {status === 'loading' && <p className={styles.notice}>Loading the catalogue…</p>}

            {status === 'error' && (
              <p className={styles.notice}>
                The catalogue could not be loaded. It is a static file, so this is usually a
                deploy that ran before <code>npm run sync-registry</code>.
              </p>
            )}

            {status === 'empty' && (
              <p className={styles.notice}>
                The catalogue has not been vendored yet. Run <code>npm run sync-registry</code> to
                fetch it.
              </p>
            )}

            {status === 'ready' && (
              <>
                <div className={styles.controls}>
                  <label className={styles.searchWrap}>
                    <Search size={16} aria-hidden />
                    <input
                      className={styles.search}
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search by name or provider…"
                      aria-label="Search the OpenAPI catalogue"
                    />
                  </label>

                  <select
                    className={styles.select}
                    value={provider}
                    onChange={(event) => setProvider(event.target.value)}
                    aria-label="Filter by provider"
                  >
                    <option value="">All providers</option>
                    {data.providers.map((entry) => (
                      <option key={entry.provider} value={entry.provider}>
                        {entry.provider} ({entry.apiCount})
                      </option>
                    ))}
                  </select>

                  <select
                    className={styles.select}
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Filter by category"
                  >
                    <option value="">All categories</option>
                    {categories.map(([name, count]) => (
                      <option key={name} value={name}>
                        {name.replace(/_/g, ' ')} ({count})
                      </option>
                    ))}
                  </select>
                </div>

                <p className={styles.count} role="status">
                  {results.length.toLocaleString()}{' '}
                  {results.length === 1 ? 'specification' : 'specifications'}
                </p>

                <ul className={styles.grid}>
                  {results.slice(0, shown).map((api) => (
                    <li key={api.id ?? api.name} className={styles.card}>
                      <div className={styles.cardHead}>
                        {api.logo ? (
                          <img className={styles.logo} src={api.logo} alt="" loading="lazy" />
                        ) : (
                          <span className={styles.logoFallback} aria-hidden>
                            {(api.title ?? api.name ?? '?').slice(0, 1).toUpperCase()}
                          </span>
                        )}
                        <div className={styles.cardTitles}>
                          <h3 className={styles.cardTitle}>{api.title ?? api.name}</h3>
                          {api.provider && <p className={styles.provider}>{api.provider}</p>}
                        </div>
                      </div>
                      {api.description && <p className={styles.cardBody}>{api.description}</p>}
                      <div className={styles.meta}>
                        {typeof api.operations === 'number' && (
                          <span>
                            {api.operations} {api.operations === 1 ? 'operation' : 'operations'}
                          </span>
                        )}
                        {api.version && <span>v{api.version}</span>}
                      </div>
                    </li>
                  ))}
                </ul>

                {results.length === 0 && (
                  <p className={styles.notice}>
                    Nothing matches that. Try a shorter search, or clear the filters.
                  </p>
                )}

                {shown < results.length && (
                  <button
                    type="button"
                    className={styles.more}
                    onClick={() => setShown((count) => count + PAGE_SIZE)}
                  >
                    Show {Math.min(PAGE_SIZE, results.length - shown)} more
                  </button>
                )}
              </>
            )}
          </Wrap>
        </Section>

        <Section>
          <Wrap>
            <p className={styles.footNote}>
              Looking for ready-made function packages instead?{' '}
              <a href="/docs/addons">
                Browse the addon catalogue <ExternalLink size={14} aria-hidden />
              </a>
            </p>
          </Wrap>
        </Section>
      </PaperPage>
    </Layout>
  );
}
