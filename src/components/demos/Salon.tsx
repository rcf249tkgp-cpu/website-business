import type { Dictionary } from '@/i18n'
import styles from './Salon.module.css'

type T = Dictionary['beforeAfter']['examples']['salon']

/** Studio Sävy around 2012: pink gradients, script logo, bevelled sidebar, PDF price list. */
export function SalonBefore({ t, nav }: { t: T['before']; nav: string[] }) {
  return (
    <div className={styles.before}>
      <div className={styles.oHeader}>
        <span className={styles.oLogo}>Hair Studio Sävy</span>
        <span className={styles.oScissors}>✂</span>
      </div>
      <div className={styles.oBody}>
        <div className={styles.oSide}>
          {nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <span className={styles.oLike}>
            <b>f</b> Like · 23
          </span>
        </div>
        <div className={styles.oMain}>
          <span className={styles.oWelcome}>{t.welcome}</span>
          <span>{t.text}</span>
          <span className={styles.oPhone}>{t.phone}</span>
          <span className={styles.oPdf}>
            <i>PDF</i>
            {t.prices}
          </span>
          <span className={styles.oGallery}>
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className={styles.oNews}>
          <span className={styles.oNewsTitle}>{t.news}</span>
          <span>
            <b>12.6.</b> {t.newsText}
          </span>
        </div>
      </div>
      <div className={styles.oFooter}>© 2012 Hair Studio Sävy | Webmaster</div>
    </div>
  )
}

/** Hair for the arched "photo": many fine, long S-curves in a narrow range of warm tones. */
const strands = Array.from({ length: 90 }, (_, i) => {
  const x = -40 + i * 3.4
  const sway = 34 + Math.sin(i * 0.7) * 10
  const tones = ['#4a2a1c', '#6b3f28', '#8a5534', '#a86f45', '#c48a58', '#dcae7c']
  return {
    d: `M${x} -20 C${x + sway} 60, ${x - sway * 0.9} 150, ${x + sway * 0.4} 290`,
    stroke: tones[Math.floor((Math.sin(i * 2.3) * 0.5 + 0.5) * tones.length) % tones.length],
    w: 1 + ((i * 7) % 5) * 0.55,
    o: 0.5 + ((i * 13) % 45) / 100,
  }
})

/** Studio Sävy as we would build it: calm, editorial and bookable in a minute. */
export function SalonAfter({ t }: { t: T['after'] }) {
  return (
    <div className={styles.after}>
      <div className={styles.nav}>
        <span className={styles.logo}>
          Sävy<small>Studio</small>
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.book}>{t.cta}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>{t.kicker}</span>
          <strong className={styles.title}>{t.title}</strong>
          <span className={styles.text}>{t.text}</span>
          <span className={styles.cta}>{t.cta} →</span>
          <span className={styles.services}>
            {t.services.map(([name, time, price]) => (
              <span key={name}>
                <b>{name}</b>
                <i>{time}</i>
                <em>{price}</em>
              </span>
            ))}
          </span>
        </div>

        <div className={styles.visual}>
          <div className={styles.arch}>
            <svg viewBox="0 0 220 260" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="salon-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3a2117" />
                  <stop offset="1" stopColor="#a8714a" />
                </linearGradient>
                <linearGradient id="salon-sheen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffe9cc" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#ffe9cc" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#ffe9cc" stopOpacity="0" />
                </linearGradient>
                <filter id="salon-blur" x="-20%" y="-50%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="9" />
                </filter>
                <filter id="salon-soft">
                  <feGaussianBlur stdDeviation="0.35" />
                </filter>
                <radialGradient id="salon-light" cx="30%" cy="20%" r="70%">
                  <stop offset="0" stopColor="#fff3e2" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#fff3e2" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="220" height="260" fill="url(#salon-bg)" />
              <g filter="url(#salon-soft)">
                {strands.map((s, i) => (
                  <path
                    key={i}
                    d={s.d}
                    fill="none"
                    stroke={s.stroke}
                    strokeWidth={s.w}
                    strokeLinecap="round"
                    opacity={s.o}
                  />
                ))}
              </g>
              {/* The sheen band that makes it read as hair. */}
              <path
                d="M-20 120 C60 80, 140 170, 240 120 L240 150 C140 200, 60 110, -20 150Z"
                fill="url(#salon-sheen)"
              />
              <rect width="220" height="260" fill="url(#salon-light)" />
            </svg>
          </div>
          <div className={styles.slots}>
            <span className={styles.slotsTitle}>{t.slotsTitle}</span>
            <span className={styles.slotRow}>
              {t.slots.map((s, i) => (
                <i key={s} data-on={i === 0 || undefined}>
                  {s}
                </i>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
