import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PaperPage, Section, Wrap, H1, Lead } from '../components/PaperLayout';
import { Chips, Tiles, wall, type WallItem } from '../components/Catalogue/Wall';
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

const PAGE_SIZE = 96;
/** More categories than this and the chip row stops being scannable. */
const CHIP_LIMIT = 14;

export default function OpenApis(): React.ReactNode {
  const url = useBaseUrl('/registry/openapis.json');
  const [status, setStatus] = useState<Status>('loading');
  const [data, setData] = useState<Catalogue>({ apis: [], providers: [] });
  const [query, setQuery] = useState('');
  const [provider, setProvider] = useState('');
  const [category, setCategory] = useState<string | null>(null);
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

  const groups = useMemo(() => {
    const counts = new Map<string, number>();
    for (const api of data.apis) {
      for (const name of api.categories ?? []) counts.set(name, (counts.get(name) ?? 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, CHIP_LIMIT)
      .map(([key, count]) => ({ key, label: key.replace(/_/g, ' '), count }));
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

  const items: WallItem[] = results.slice(0, shown).map((api) => ({
    id: api.id ?? api.name,
    title: api.title ?? api.name,
    subtitle: api.provider,
    count: api.operations,
    logo: api.logo,
    externalLogo: true,
  }));

  return (
    <Layout
      title="OpenAPI Catalogue"
      description="Every OpenAPI specification pikku can generate a typed client for, searchable by provider and category."
    >
      <PaperPage>
        <Section>
          <Wrap wide>
            <div className={styles.mastheadTop}>
              <H1>
                Every API, <em>already typed</em>
              </H1>
              {status === 'ready' && (
                <span className={styles.tally}>
                  {data.apis.length.toLocaleString()} specs ·{' '}
                  {data.providers.length.toLocaleString()} providers
                </span>
              )}
            </div>
            <Lead>
              OpenAPI specifications pikku can generate typed functions from — point it
              at one and it writes the functions, the types and the secrets for you.
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
                <div className={wall.controls}>
                  <input
                    className={wall.search}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by name or provider…"
                    aria-label="Search the OpenAPI catalogue"
                  />

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

                  <p className={wall.resultCount} aria-live="polite">
                    {results.length.toLocaleString()}{' '}
                    {results.length === 1 ? 'specification' : 'specifications'}
                  </p>
                </div>

                <Chips
                  groups={groups}
                  active={category}
                  total={data.apis.length}
                  onChange={setCategory}
                />

                {results.length === 0 ? (
                  <div className={wall.empty}>
                    <p className={wall.emptyTitle}>Nothing matches that.</p>
                    <p className={wall.emptyBody}>
                      Try a shorter search, or clear the filters.
                    </p>
                    <button
                      type="button"
                      className={wall.reset}
                      onClick={() => {
                        setQuery('');
                        setProvider('');
                        setCategory(null);
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div style={{ marginTop: 26 }}>
                    <Tiles items={items} />
                  </div>
                )}

                {shown < results.length && (
                  <button
                    type="button"
                    className={wall.moreBtn}
                    onClick={() => setShown((count) => count + PAGE_SIZE)}
                  >
                    Show {Math.min(PAGE_SIZE, results.length - shown).toLocaleString()} more
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
              <Link to="/addons">Browse the addon catalogue</Link>
            </p>
          </Wrap>
        </Section>
      </PaperPage>
    </Layout>
  );
}
