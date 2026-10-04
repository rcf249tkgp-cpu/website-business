import type { Dictionary } from '@/i18n'
import styles from './Cafe.module.css'

type T = Dictionary['beforeAfter']['examples']['cafe']

/** Café Aamu as a mid-2010s template site: glossy nav, dark stock-photo slider, cookie bar. */
export function CafeBefore({ t }: { t: T['before'] }) {
  return (
    <div className={styles.before}>
      <div className={styles.oNav}>
        <span className={styles.oLogo}>Café Aamu</span>
        <span className={styles.oLinks}>
          {t.nav.map((n, i) => (
            <span key={n} data-on={i === 0 || undefined}>
              {n}
            </span>
          ))}
        </span>
        <span className={styles.oSocial}>
          <i>f</i>
          <i>t</i>
        </span>
      </div>
      <div className={styles.oSlider}>
        <span className={styles.oArrow}>‹</span>
        <span className={styles.oCaption}>
          <span className={styles.oWelcome}>{t.welcome}</span>
          <span className={styles.oIntro}>{t.intro}</span>
          <span className={styles.oButton}>{t.readMore}</span>
        </span>
        <span className={styles.oArrow}>›</span>
        <span className={styles.oDots}>
          <i data-on />
          <i />
          <i />
        </span>
      </div>
      <div className={styles.oCols}>
        {[0, 1, 2].map((i) => (
          <span key={i}>
            <i />
            <b />
            <b />
          </span>
        ))}
      </div>
      <div className={styles.oCookie}>
        <span>{t.cookies}</span>
        <b>OK</b>
      </div>
    </div>
  )
}

/** Café Aamu as we would build it: warm, editorial, with the menu one glance away. */
export function CafeAfter({ t }: { t: T['after'] }) {
  return (
    <div className={styles.after}>
      <div className={styles.nav}>
        <span className={styles.logo}>
          <span className={styles.sun} />
          aamu
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.open}>
          <i />
          {t.open}
        </span>
      </div>

      <div className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>{t.kicker}</span>
          <strong className={styles.title}>{t.title}</strong>
          <span className={styles.text}>{t.text}</span>
          <span className={styles.ctas}>
            <span className={styles.primary}>{t.cta}</span>
            <span className={styles.secondary}>{t.secondary} →</span>
          </span>
        </div>

        <div className={styles.photo}>
          <span className={styles.linen} />
          <span className={styles.saucer}>
            <span className={styles.cup}>
              <svg className={styles.latte} viewBox="0 0 100 100">
                <defs>
                  <radialGradient id="cafe-crema" cx="50%" cy="46%" r="55%">
                    <stop offset="0" stopColor="#c08552" />
                    <stop offset="0.6" stopColor="#9a5d2f" />
                    <stop offset="1" stopColor="#6b3a1a" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#cafe-crema)" />
                {/* Rosetta: stacked leaves pulled through by a line. */}
                <g fill="#f4e4cc">
                  <ellipse cx="50" cy="66" rx="17" ry="9" />
                  <ellipse cx="50" cy="55" rx="21" ry="8.5" fill="#9a5d2f" />
                  <ellipse cx="50" cy="51" rx="21" ry="8" />
                  <ellipse cx="50" cy="41" rx="17" ry="7" fill="#a4653a" />
                  <ellipse cx="50" cy="37.5" rx="16" ry="6.5" />
                  <ellipse cx="50" cy="29" rx="11" ry="5" fill="#ad6d40" />
                  <ellipse cx="50" cy="26.5" rx="10" ry="4.5" />
                  <path d="M50 20v58" stroke="#9a5d2f" strokeWidth="1.6" strokeLinecap="round" />
                </g>
              </svg>
            </span>
            <span className={styles.handle} />
          </span>
          <svg className={styles.bun} viewBox="0 0 100 100">
            <defs>
              <radialGradient id="cafe-bun" cx="42%" cy="38%" r="62%">
                <stop offset="0" stopColor="#e7ab68" />
                <stop offset="0.65" stopColor="#c27a3a" />
                <stop offset="1" stopColor="#8f4f1f" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#cafe-bun)" />
            {/* The swirl of the roll. */}
            <path
              d="M50 50c0-4 6-5 8-1 3 6-4 12-11 10-9-3-10-15-3-21 10-8 26-3 28 10 2 15-12 26-27 23-18-4-24-24-14-38"
              fill="none"
              stroke="#8a4a1d"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.7"
            />
            <g fill="#fffaf2">
              <circle cx="36" cy="30" r="2.2" />
              <circle cx="64" cy="38" r="1.8" />
              <circle cx="46" cy="68" r="2" />
              <circle cx="70" cy="64" r="1.6" />
              <circle cx="28" cy="56" r="1.8" />
              <circle cx="56" cy="24" r="1.5" />
            </g>
          </svg>
          <span className={styles.spoon} />
        </div>

        <div className={styles.menu}>
          <span className={styles.menuTitle}>{t.menuTitle}</span>
          {t.menu.map(([name, price]) => (
            <span key={name} className={styles.menuRow}>
              <span>{name}</span>
              <i />
              <span>{price}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
