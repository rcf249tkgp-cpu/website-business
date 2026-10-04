import type { Dictionary } from '@/i18n'
import styles from './Construction.module.css'

type T = Dictionary['beforeAfter']['examples']['construction']

/** Vahva Rakennus around 2008: a centred table layout with a gradient banner and clip art. */
export function ConstructionBefore({ t }: { t: T['before'] }) {
  return (
    <div className={styles.before}>
      <div className={styles.oPage}>
        <div className={styles.oBanner}>
          <span className={styles.oName}>VAHVA RAKENNUS OY</span>
          <span className={styles.oTagline}>{t.tagline}</span>
        </div>
        <div className={styles.oMenu}>
          {t.menu.map((m, i) => (
            <span key={m}>
              {m}
              {i < t.menu.length - 1 && <i>|</i>}
            </span>
          ))}
        </div>
        <div className={styles.oCols}>
          <div className={styles.oLeft}>
            <b>{t.servicesTitle}</b>
            <ul>
              {t.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className={styles.oCounter}>000127</span>
          </div>
          <div className={styles.oMain}>
            <span className={styles.oHouse}>
              <i />
              <b />
              <em />
            </span>
            <span className={styles.oCall}>{t.contact}</span>
            <span className={styles.oPhone}>Puh. 040 123 4567 · info@vahvarakennus.fi</span>
          </div>
        </div>
        <div className={styles.oFooter}>© 2011 Vahva Rakennus Oy</div>
      </div>
    </div>
  )
}

/** A building under construction at dusk, drawn in SVG to stand in for photography. */
function Site() {
  const floors = Array.from({ length: 9 }, (_, i) => i)
  return (
    <svg className={styles.site} viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="con-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141a24" />
          <stop offset="0.55" stopColor="#3a3a44" />
          <stop offset="0.85" stopColor="#b8683a" />
          <stop offset="1" stopColor="#e09a52" />
        </linearGradient>
        <linearGradient id="con-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1d2632" />
          <stop offset="0.6" stopColor="#3b4a5c" />
          <stop offset="1" stopColor="#d79a62" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="con-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0f0f0f" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#0f0f0f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0f0f0f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="600" height="340" fill="url(#con-sky)" />
      {/* Background towers. */}
      <path d="M0 340V250h40v-30h50v120Zm110 0V230h36v110Zm420 0V210h30v-20h40v150Z" fill="#20242c" />
      {/* The building: finished floors with glass bands, open floors on top. */}
      <g transform="translate(330 70)">
        {floors.map((f) => {
          const y = 270 - f * 30
          const open = f >= 6
          return (
            <g key={f}>
              <rect x="0" y={y - 4} width="200" height="5" fill="#cfc9bf" />
              {open ? (
                [0, 50, 100, 150, 196].map((x) => (
                  <rect key={x} x={x} y={y - 30} width="4" height="26" fill="#8f8a82" />
                ))
              ) : (
                <rect x="2" y={y - 30} width="196" height="26" fill="url(#con-glass)" opacity={0.75 + (f % 3) * 0.08} />
              )}
            </g>
          )
        })}
        {/* Scaffolding on the open floors. */}
        <path
          d="M-8 90V0M-8 0h12M-8 30h12M-8 60h12M-8 0l12 30M-8 30l12 30M-8 60l12 30"
          stroke="#ffc400"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
      </g>
      {/* Tower crane. */}
      <g stroke="#ffc400" strokeWidth="2" fill="none">
        <path d="M300 340V46M312 340V46" />
        {Array.from({ length: 15 }, (_, i) => (
          <path key={i} d={`M300 ${340 - i * 20}l12 -20`} strokeWidth="1" />
        ))}
        <path d="M200 46h380M200 56h380" strokeWidth="1.6" />
        {Array.from({ length: 19 }, (_, i) => (
          <path key={i} d={`M${200 + i * 20} 56l10 -10l10 10`} strokeWidth="0.8" />
        ))}
        <path d="M306 46V22l-90 24M306 22l270 24" strokeWidth="1" />
        <path d="M470 56v120" strokeWidth="1" />
      </g>
      <rect x="208" y="56" width="30" height="20" fill="#2b2b2b" />
      <rect x="462" y="176" width="16" height="12" fill="#ffc400" />
      <rect width="600" height="340" fill="url(#con-fade)" />
    </svg>
  )
}

/** Vahva Rakennus as we would build it: bold, confident and built around one action. */
export function ConstructionAfter({ t }: { t: T['after'] }) {
  return (
    <div className={styles.after}>
      <div className={styles.nav}>
        <span className={styles.logo}>
          <i />
          <b>Vahva</b>Rakennus
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.navCta}>{t.cta}</span>
      </div>

      <div className={styles.hero}>
        <Site />
        <div className={styles.copy}>
          <span className={styles.kicker}>{t.kicker}</span>
          <strong className={styles.title}>{t.title}</strong>
          <span className={styles.text}>{t.text}</span>
          <span className={styles.ctas}>
            <span className={styles.primary}>{t.cta} →</span>
            <span className={styles.secondary}>{t.secondary}</span>
          </span>
        </div>
      </div>

      <div className={styles.strip}>
        {t.services.map((s, i) => (
          <span key={s} className={styles.service}>
            <i>{String(i + 1).padStart(2, '0')}</i>
            {s}
            <em>↗</em>
          </span>
        ))}
        <span className={styles.area}>
          <i />
          {t.area}
        </span>
      </div>
    </div>
  )
}
