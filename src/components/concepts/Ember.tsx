import type { Dictionary } from '@/i18n'
import styles from './Ember.module.css'

type T = Dictionary['work']['projects']['ember']['site']

/** A coffee pouch "product shot": matte bag, kraft label, degassing valve. */
function Bag({ label, origin, tone, id }: { label: string; origin: string; tone: string; id: string }) {
  return (
    <svg className={styles.bag} viewBox="0 0 120 160" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="0.25" stopColor="#000" stopOpacity="0" />
          <stop offset="0.75" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path d="M14 22 22 8h76l8 14v126a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z" fill={tone} />
      <path d="M14 22 22 8h76l8 14v126a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z" fill={`url(#${id}-body)`} />
      <path d="M22 8h76l8 14H14Z" fill="#000" opacity="0.25" />
      <path d="M14 22h92" stroke="#000" strokeOpacity="0.3" strokeDasharray="2 2" />
      <rect x="26" y="56" width="68" height="70" rx="3" fill="#efe3cf" />
      <text x="60" y="74" textAnchor="middle" className={styles.bagBrand}>
        EMBER
      </text>
      <path d="M38 80h44" stroke="#2a1d14" strokeOpacity="0.3" />
      <text x="60" y="96" textAnchor="middle" className={styles.bagName}>
        {label}
      </text>
      <text x="60" y="110" textAnchor="middle" className={styles.bagOrigin}>
        {origin}
      </text>
      <circle cx="60" cy="38" r="5" fill="#000" opacity="0.35" />
      <circle cx="60" cy="38" r="2.2" fill="#000" opacity="0.5" />
    </svg>
  )
}

function Bean({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <ellipse rx="9" ry="6.5" fill="#4a2b18" />
      <ellipse rx="9" ry="6.5" fill="url(#ember-bean)" />
      <path d="M-7 0c3-2 9 2 14 0" stroke="#22130a" strokeWidth="1.4" fill="none" />
    </g>
  )
}

export function Ember({ t }: { t: T }) {
  const tones = ['#c4512a', '#2f4a3a', '#4a3a5c']
  return (
    <div className={styles.site}>
      <header className={styles.nav}>
        <span className={styles.logo}>
          <i />
          Ember
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.cart}>{t.cart} · 2</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>{t.kicker}</span>
          <strong className={styles.title}>{t.title}</strong>
          <span className={styles.text}>{t.text}</span>
          <span className={styles.ctas}>
            <span className={styles.primary}>{t.cta}</span>
            <span className={styles.secondary}>{t.secondary}</span>
          </span>
        </div>
        <div className={styles.shot}>
          <span className={styles.sun} />
          <svg className={styles.beans} viewBox="0 0 300 300" aria-hidden="true">
            <defs>
              <radialGradient id="ember-bean" cx="35%" cy="30%" r="70%">
                <stop offset="0" stopColor="#a8693d" />
                <stop offset="1" stopColor="#3a2112" stopOpacity="0" />
              </radialGradient>
            </defs>
            <Bean x={40} y={250} r={20} />
            <Bean x={70} y={270} r={-30} />
            <Bean x={250} y={240} r={60} />
            <Bean x={270} y={272} r={10} />
            <Bean x={225} y={276} r={-50} />
            <Bean x={20} y={60} r={40} />
            <Bean x={280} y={40} r={-20} />
          </svg>
          <Bag id="ember-hero" label={t.products[0][0]} origin={t.products[0][1]} tone={tones[0]} />
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.rowHead}>
          <strong>{t.productsTitle}</strong>
          <span>→</span>
        </div>
        <div className={styles.grid}>
          {t.products.map(([name, origin, notes, price], i) => (
            <div key={name} className={styles.card}>
              <div className={styles.cardShot} style={{ background: ['#ead8c4', '#d9e0d3', '#ddd5e3'][i] }}>
                <Bag id={`ember-p${i}`} label={name} origin={origin} tone={tones[i]} />
              </div>
              <span className={styles.cardMeta}>
                <b>{name}</b>
                <em>{price}</em>
              </span>
              <span className={styles.notes}>
                {origin} — {notes}
              </span>
              <span className={styles.add}>{t.add}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.story}>
        <strong>{t.storyTitle}</strong>
        <span>{t.storyText}</span>
      </section>

      <section className={styles.sub}>
        <div>
          <strong>{t.subTitle}</strong>
          <span>{t.subText}</span>
        </div>
        <span className={styles.subCta}>{t.subCta} →</span>
      </section>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <i />
          Ember
        </span>
        <span>Helsinki · hello@ember.example</span>
      </footer>
    </div>
  )
}
