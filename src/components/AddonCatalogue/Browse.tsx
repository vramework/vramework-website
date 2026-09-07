import React, { useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { PaperPage, Section, Wrap, H1, Lead } from '@site/src/components/PaperLayout';
import styles from './catalogue.module.css';

export type AddonEntry = {
  slug: string;
  name: string;
  title: string;
  category: string;
  categoryLabel: string;
  description?: string;
  logo?: string;
  functionCount: number;
};

const initials = (title: string) =>
  title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || '??';

function Mark({ addon, large = false }: { addon: AddonEntry; large?: boolean }): React.ReactNode {
  const src = useBaseUrl(addon.logo ?? '/');
  return (
    <span className={large ? styles.markLarge : styles.mark}>
      {addon.logo ? (
        <img src={src} alt="" loading="lazy" width={large ? 40 : 20} height={large ? 40 : 20} />
      ) : (
        <span className={styles.initials}>{initials(addon.title)}</span>
      )}
    </span>
  );
}

export default function Browse({ addons }: { addons: AddonEntry[] }): React.ReactNode {
  const [query, setQuery] = useState('');
  // Detail pages link back with ?category=, so the catalogue opens where the
  // reader left off. Read once on mount — the prerendered HTML has no search.
  const [category, setCategory] = useState<string | null>(null);
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('category');
    if (wanted) setCategory(wanted);
  }, []);

  const totalFunctions = useMemo(
    () => addons.reduce((sum, a) => sum + a.functionCount, 0),
    [addons]
  );

  const categories = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();
    for (const addon of addons) {
      const entry = counts.get(addon.category);
      if (entry) entry.count += 1;
      else counts.set(addon.category, { label: addon.categoryLabel, count: 1 });
    }
    return [...counts.entries()]
      .map(([key, value]) => ({ key, ...value }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [addons]);

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matches = addons.filter((addon) => {
      if (category && addon.category !== category) return false;
      if (!needle) return true;
      return (
        addon.title.toLowerCase().includes(needle) ||
        addon.name.toLowerCase().includes(needle) ||
        addon.categoryLabel.toLowerCase().includes(needle) ||
        (addon.description ?? '').toLowerCase().includes(needle)
      );
    });

    const byCategory = new Map<string, AddonEntry[]>();
    for (const addon of matches) {
      const list = byCategory.get(addon.category);
      if (list) list.push(addon);
      else byCategory.set(addon.category, [addon]);
    }

    return {
      total: matches.length,
      sections: [...byCategory.entries()]
        .map(([key, items]) => ({
          key,
          label: items[0].categoryLabel,
          items: items.sort((a, b) => a.title.localeCompare(b.title)),
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    };
  }, [addons, query, category]);

  // The stagger reads as one settling motion across the whole result set, so
  // the index is continuous across category groups rather than per-group.
  let staggerIndex = 0;

  return (
    <Layout
      title="Addon Catalogue"
      description={`${addons.length} Pikku addons — ${totalFunctions.toLocaleString()} typed functions you can wire into a project with one call.`}
    >
      <PaperPage>
        <Section>
          <Wrap wide>
            <div className={styles.masthead}>
              <H1>Someone already wrote it.</H1>
              <Lead>
                Every addon is a package of typed Pikku functions — namespaced, secrets
                declared, ready to call over RPC. Wire one and its functions join your
                app as if you had written them.
              </Lead>

              <div className={styles.wireLine}>
                <span className={styles.tKw}>import</span>
                <span className={styles.tPunct}> {'{'} </span>wireAddon<span className={styles.tPunct}> {'}'} </span>
                <span className={styles.tKw}>from</span>
                <span className={styles.tStr}> '#pikku/addon'</span>
                {'\n\n'}
                <span className={styles.tFn}>wireAddon</span>
                <span className={styles.tPunct}>({'{'} </span>
                <span className={styles.tProp}>name</span>
                <span className={styles.tPunct}>: </span>
                <span className={styles.tStr}>'stripe'</span>
                <span className={styles.tPunct}>, </span>
                <span className={styles.tProp}>package</span>
                <span className={styles.tPunct}>: </span>
                <span className={styles.tStr}>'@pikku/addon-stripe'</span>
                <span className={styles.tPunct}> {'}'})</span>
              </div>

              <div className={styles.tally}>
                <span className={styles.tallyItem}>
                  <span className={styles.tallyNum}>{addons.length}</span>
                  <span className={styles.tallyLabel}>addons</span>
                </span>
                <span className={styles.tallyItem}>
                  <span className={styles.tallyNum}>{totalFunctions.toLocaleString()}</span>
                  <span className={styles.tallyLabel}>functions</span>
                </span>
                <span className={styles.tallyItem}>
                  <span className={styles.tallyNum}>{categories.length}</span>
                  <span className={styles.tallyLabel}>categories</span>
                </span>
              </div>
            </div>
          </Wrap>
        </Section>

        <Section variant="alt">
          <Wrap wide>
            <div className={styles.directory}>
              <aside className={styles.rail}>
                <label>
                  <span className={styles.railHead} style={{ marginTop: 0 }}>
                    Search
                  </span>
                  <input
                    type="search"
                    className={styles.search}
                    placeholder="stripe, postgres, email…"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </label>

                <h2 className={styles.railHead}>Categories</h2>
                <ul className={styles.catList}>
                  <li>
                    <button
                      type="button"
                      className={styles.catBtn}
                      aria-pressed={category === null}
                      onClick={() => setCategory(null)}
                    >
                      <span>All</span>
                      <span className={styles.catCount}>{addons.length}</span>
                    </button>
                  </li>
                  {categories.map((entry) => (
                    <li key={entry.key}>
                      <button
                        type="button"
                        className={styles.catBtn}
                        aria-pressed={category === entry.key}
                        onClick={() =>
                          setCategory(category === entry.key ? null : entry.key)
                        }
                      >
                        <span>{entry.label}</span>
                        <span className={styles.catCount}>{entry.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              <div>
                <p className={styles.resultCount} aria-live="polite">
                  {groups.total} {groups.total === 1 ? 'addon' : 'addons'}
                </p>

                {groups.total === 0 ? (
                  <div className={styles.empty}>
                    <p className={styles.emptyTitle}>Nothing matches “{query}”.</p>
                    <p className={styles.emptyBody}>
                      Addons are published from the Fabric registry — if what you need
                      isn’t here yet, you can write it and publish it yourself.
                    </p>
                    <button
                      type="button"
                      className={styles.reset}
                      onClick={() => {
                        setQuery('');
                        setCategory(null);
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  groups.sections.map((section) => (
                    <section className={styles.group} key={section.key}>
                      <div className={styles.groupHead}>
                        <h2 className={styles.groupName}>{section.label}</h2>
                        <span className={styles.groupRule} />
                        <span className={styles.groupCount}>{section.items.length}</span>
                      </div>
                      <ul className={styles.ledger}>
                        {section.items.map((addon) => {
                          const i = Math.min(staggerIndex++, 24);
                          return (
                            <li key={addon.slug}>
                              <Link
                                className={styles.row}
                                to={`/addons/${addon.slug}`}
                                style={{ '--i': i } as React.CSSProperties}
                              >
                                <Mark addon={addon} />
                                <span className={styles.rowMain}>
                                  <span className={styles.rowTitle}>
                                    {addon.title}
                                    <span className={styles.pkg}>{addon.name}</span>
                                  </span>
                                  {addon.description && (
                                    <span className={styles.rowDesc}>{addon.description}</span>
                                  )}
                                </span>
                                <span className={styles.rowCount}>
                                  {addon.functionCount} fn
                                  {addon.functionCount === 1 ? '' : 's'}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  ))
                )}
              </div>
            </div>
          </Wrap>
        </Section>
      </PaperPage>
    </Layout>
  );
}

export { Mark };
