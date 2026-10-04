import type { Dictionary } from '@/i18n'
import styles from './Voltra.module.css'

type T = Dictionary['work']['projects']['voltra']['site']

const chargers = [
  [18, 30, 1],
  [34, 58, 0],
  [52, 26, 1],
  [61, 66, 1],
  [76, 40, 0],
  [86, 70, 1],
  [44, 82, 1],
  [24, 74, 0],
] as const

export function Voltra({ t }: { t: T }) {
  return (
    <div className={styles.site}>
      <header className={styles.nav}>
        <span className={styles.logo}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M9 1 3 9h4l-1 6 6-8H8Z" />
          </svg>
          Voltra
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.demo}>{t.demo}</span>
      </header>

      <section className={styles.hero}>
        <span className={styles.kicker}>{t.kicker}</span>
        <strong className={styles.title}>
          <span>{t.title[0]}</span>
          <span className={styles.lime}>{t.title[1]}</span>
        </strong>
        <span className={styles.text}>{t.text}</span>
        <span className={styles.ctas}>
          <span className={styles.primary}>{t.cta} →</span>
          <span className={styles.secondary}>{t.secondary}</span>
        </span>
      </section>

      <section className={styles.dashWrap}>
        <div className={styles.dash}>
          <div className={styles.map}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C20 35 30 55 50 50 S80 30 100 38" />
              <path d="M10 100 C20 70 40 75 45 50 S60 10 70 0" />
              <path d="M0 80 C30 85 60 70 100 76" />
            </svg>
            {chargers.map(([x, y, free], i) => (
              <i key={i} style={{ left: `${x}%`, top: `${y}%` }} data-free={free || undefined} />
            ))}
          </div>
          <div className={styles.side}>
            <span className={styles.stat}>
              <em>{t.features[0][0]}</em>
              <b>
                5<small>/8</small>
              </b>
              <span className={styles.bar}>
                <i style={{ width: '62%' }} />
              </span>
            </span>
            <span className={styles.chart}>
              <svg viewBox="0 0 120 50" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className={styles.area}
                  d="M0 40 L15 34 L30 36 L45 24 L60 28 L75 16 L90 20 L105 8 L120 12 L120 50 L0 50Z"
                />
                <path className={styles.line} d="M0 40 L15 34 L30 36 L45 24 L60 28 L75 16 L90 20 L105 8 L120 12" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        {t.features.map(([title, text], i) => (
          <div key={title}>
            <i>{String(i + 1).padStart(2, '0')}</i>
            <b>{title}</b>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className={styles.final}>
        <strong>{t.ctaTitle}</strong>
        <span className={styles.primary}>{t.cta} →</span>
      </section>

      <footer className={styles.footer}>
        <span>© Voltra</span>
        <span>{t.nav.join(' · ')}</span>
      </footer>
    </div>
  )
}
