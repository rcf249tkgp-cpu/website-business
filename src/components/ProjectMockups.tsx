import type { Dictionary } from '@/i18n'
import styles from './ProjectMockups.module.css'

type Mock = Dictionary['work']['mock']

/**
 * Concept website mockups rendered in pure HTML/CSS — crisp at any size,
 * zero image weight. Sizes use container query units so each mockup scales
 * as one piece.
 */

function Ember({ t }: { t: Mock }) {
  return (
    <div className={`${styles.mock} ${styles.ember}`}>
      <div className={styles.emberNav}>
        <span className={styles.emberLogo}>EMBER</span>
        <span className={styles.emberLinks}>
          <span>{t.shop}</span>
          <span>{t.subscribe}</span>
        </span>
        <span className={styles.emberCart}>2</span>
      </div>
      <div className={styles.emberBody}>
        <div className={styles.emberCopy}>
          <span className={styles.emberKicker}>{t.emberKicker}</span>
          <span className={styles.emberTitle}>Yirgacheffe</span>
          <span className={styles.emberNotes}>
            {t.emberNotes.map((note) => (
              <i key={note}>{note}</i>
            ))}
          </span>
          <span className={styles.emberPriceRow}>
            <b>€18</b>
            <span className={styles.emberBtn}>{t.addToCart}</span>
          </span>
        </div>
        <div className={styles.emberStage}>
          <span className={styles.emberSun} />
          <span className={styles.emberBag}>
            <span className={styles.emberBagLabel}>
              EMBER
              <small>250g</small>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

function Lumo({ t }: { t: Mock }) {
  const days = Array.from({ length: 14 }, (_, i) => i + 6)
  return (
    <div className={`${styles.mock} ${styles.lumo}`}>
      <div className={styles.lumoNav}>
        <span className={styles.lumoLogo}>
          <i />
          lumo
        </span>
        <span className={styles.lumoBtn}>{t.bookVisit}</span>
      </div>
      <div className={styles.lumoBody}>
        <div className={styles.lumoHero}>
          <span className={styles.lumoTitle}>
            {t.lumoTitle[0]}
            <br />
            {t.lumoTitle[1]}
          </span>
          <span className={styles.lumoServicesLabel}>{t.ourServices}</span>
          <span className={styles.lumoServices}>
            {['#d9f2ec', '#e3ecff', '#fde9e4'].map((c) => (
              <span key={c} style={{ background: c }}>
                <i />
                <b />
              </span>
            ))}
          </span>
        </div>
        <div className={styles.lumoBooking}>
          <span className={styles.lumoMonth}>{t.month}</span>
          <span className={styles.lumoDays}>
            {days.map((d) => (
              <i key={d} data-active={d === 14 || undefined} data-off={d % 7 === 4 || d % 7 === 5 || undefined}>
                {d}
              </i>
            ))}
          </span>
          <span className={styles.lumoTimes}>
            <i>09:00</i>
            <i data-active>10:30</i>
            <i>13:15</i>
          </span>
          <span className={styles.lumoConfirm}>{t.bookVisit}</span>
        </div>
      </div>
    </div>
  )
}

function Voltra({ t }: { t: Mock }) {
  return (
    <div className={`${styles.mock} ${styles.voltra}`}>
      <div className={styles.voltraNav}>
        <span className={styles.voltraLogo}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M9 1L3 9h4l-1 6 6-8H8z" fill="currentColor" />
          </svg>
          VOLTRA
        </span>
        <span className={styles.voltraBtnSmall}>{t.requestDemo}</span>
      </div>
      <div className={styles.voltraBody}>
        <span className={styles.voltraTitle}>
          {t.voltraTitle[0]}
          <br />
          <em>{t.voltraTitle[1]}</em>
        </span>
        <span className={styles.voltraStats}>
          {t.voltraFeatures.map((feature) => (
            <span key={feature}>
              <i />
              {feature}
            </span>
          ))}
        </span>
        <span className={styles.voltraCta}>{t.requestDemo} →</span>
      </div>
      <div className={styles.voltraChart}>
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="voltra-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d4ff3a" stopOpacity="0.45" />
              <stop offset="1" stopColor="#d4ff3a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L25 62 L50 66 L75 48 L100 52 L125 34 L150 38 L175 18 L200 10 L200 80 L0 80Z"
            fill="url(#voltra-fill)"
          />
          <path
            d="M0 70 L25 62 L50 66 L75 48 L100 52 L125 34 L150 38 L175 18 L200 10"
            fill="none"
            stroke="#d4ff3a"
            strokeWidth="2"
          />
        </svg>
      </div>
      <span className={styles.voltraGlow} />
    </div>
  )
}

function Fjord({ t }: { t: Mock }) {
  return (
    <div className={`${styles.mock} ${styles.fjord}`}>
      <div className={styles.fjordNav}>
        <span className={styles.fjordLogo}>Form &amp; Fjord</span>
        <span className={styles.fjordLinks}>
          <span>{t.projects}</span>
          <span>{t.studio}</span>
        </span>
      </div>
      <div className={styles.fjordBody}>
        <span className={styles.fjordTitle}>
          {t.fjordTitle[0]}
          <br />
          <em>{t.fjordTitle[1]}</em>
        </span>
        <div className={styles.fjordGrid}>
          <span className={`${styles.fjordImg} ${styles.fjordImgA}`}>
            <i />
          </span>
          <span className={`${styles.fjordImg} ${styles.fjordImgB}`}>
            <i />
          </span>
          <span className={`${styles.fjordImg} ${styles.fjordImgC}`}>
            <i />
          </span>
        </div>
        <span className={styles.fjordCaption}>
          <span>01 — Villa Saari</span>
          <span>2026</span>
        </span>
      </div>
    </div>
  )
}

const mockups = { ember: Ember, lumo: Lumo, voltra: Voltra, fjord: Fjord } as const

export function ProjectMockup({ id, t }: { id: string; t: Mock }) {
  const Component = mockups[id as keyof typeof mockups]
  return Component ? <Component t={t} /> : null
}
