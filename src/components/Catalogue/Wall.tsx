import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './wall.module.css';

/** One thing on the wall — an addon, or an OpenAPI specification. */
export interface WallItem {
  id: string;
  title: string;
  /** The line under the name: a package name, or a provider. */
  subtitle?: string;
  /** Sits in the tile's top corner — a function or operation count. */
  count?: number;
  logo?: string;
  href?: string;
  /** Absolute, already-hosted logo URLs skip useBaseUrl. */
  externalLogo?: boolean;
}

export interface WallBand {
  key: string;
  label: string;
  items: WallItem[];
}

const initials = (title: string) =>
  title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() || '??';

export function Mark({
  title,
  logo,
  large = false,
  external = false,
}: {
  title: string;
  logo?: string;
  large?: boolean;
  external?: boolean;
}): React.ReactNode {
  const hosted = useBaseUrl(logo && !external ? logo : '/');
  const src = external ? logo : hosted;
  const size = large ? 40 : 20;
  return (
    <span className={large ? `${styles.mark} ${styles.markLarge}` : styles.mark}>
      {logo ? (
        <img src={src} alt="" loading="lazy" width={size} height={size} />
      ) : (
        <span className={styles.initials}>{initials(title)}</span>
      )}
    </span>
  );
}

export function Tile({ item }: { item: WallItem }): React.ReactNode {
  const body = (
    <>
      <Mark title={item.title} logo={item.logo} external={item.externalLogo} />
      {typeof item.count === 'number' && (
        <span className={styles.tileCount}>{item.count}</span>
      )}
      <span className={styles.tileText}>
        <span className={styles.tileName}>{item.title}</span>
        {item.subtitle && <span className={styles.tileSub}>{item.subtitle}</span>}
      </span>
    </>
  );

  if (!item.href) return <div className={styles.tile}>{body}</div>;
  return (
    <Link className={styles.tile} to={item.href}>
      {body}
    </Link>
  );
}

export function Tiles({ items }: { items: WallItem[] }): React.ReactNode {
  return (
    <ul className={styles.tiles}>
      {items.map((item) => (
        <li key={item.id}>
          <Tile item={item} />
        </li>
      ))}
    </ul>
  );
}

/** A filter row: one chip per group, plus an "All" that clears the filter. */
export function Chips({
  groups,
  active,
  total,
  onChange,
}: {
  groups: { key: string; label: string; count: number }[];
  active: string | null;
  total: number;
  onChange: (key: string | null) => void;
}): React.ReactNode {
  return (
    <div className={styles.chips}>
      <button
        type="button"
        className={styles.chip}
        aria-pressed={active === null}
        onClick={() => onChange(null)}
      >
        All
        <span className={styles.chipCount}>{total}</span>
      </button>
      {groups.map((group) => (
        <button
          key={group.key}
          type="button"
          className={styles.chip}
          aria-pressed={active === group.key}
          onClick={() => onChange(active === group.key ? null : group.key)}
        >
          {group.label}
          <span className={styles.chipCount}>{group.count}</span>
        </button>
      ))}
    </div>
  );
}

export function Band({ band }: { band: WallBand }): React.ReactNode {
  return (
    <section className={styles.band}>
      <div className={styles.bandHead}>
        <h2 className={styles.bandName}>{band.label}</h2>
        <span className={styles.bandRule} />
        <span className={styles.bandCount}>{band.items.length}</span>
      </div>
      <Tiles items={band.items} />
    </section>
  );
}

export { styles as wall };
