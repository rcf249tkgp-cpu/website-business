import type { Dictionary } from '@/i18n'
import styles from './Fjord.module.css'

type T = Dictionary['work']['projects']['fjord']['site']

/** Black timber house on a rocky shore at dusk. */
function House() {
  return (
    <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="fj-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9cfd2" />
          <stop offset="0.6" stopColor="#e7e1d6" />
          <stop offset="1" stopColor="#efe2cc" />
        </linearGradient>
        <linearGradient id="fj-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9aa6ab" />
          <stop offset="1" stopColor="#6f7c82" />
        </linearGradient>
        <linearGradient id="fj-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd9a0" />
          <stop offset="1" stopColor="#e9a35c" />
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="url(#fj-sky)" />
      <rect y="250" width="800" height="170" fill="url(#fj-sea)" />
      <path d="M0 262h800" stroke="#fff" strokeOpacity="0.35" />
      {/* Far island. */}
      <path d="M520 252c30-14 70-18 120-10 30 4 60 6 90 10Z" fill="#7d8a86" />
      {/* Rocks. */}
      <path
        d="M0 330c80-30 160-40 260-36 70 2 120 10 170 26 60 18 120 24 190 20 70-4 120 0 180 14V420H0Z"
        fill="#3d3f3c"
      />
      <path d="M0 360c120-20 250-22 380-6s260 20 420 4V420H0Z" fill="#2b2c2a" />
      {/* The house: black cladding, gable roof, one big warm window. */}
      <g transform="translate(250 170)">
        <path d="M0 140V60L110 0l110 60v80Z" fill="#1b1c1b" />
        {Array.from({ length: 21 }, (_, i) => (
          <path
            key={i}
            d={`M${10 + i * 10} ${i * 10 < 110 ? 54 - i * 5.4 : -54 + i * 5.4 + 0} V140`}
            stroke="#2a2b2a"
            strokeWidth="1.2"
          />
        ))}
        <rect x="120" y="70" width="80" height="58" fill="url(#fj-glow)" />
        <path d="M160 70v58" stroke="#1b1c1b" strokeWidth="3" />
        <rect x="30" y="92" width="22" height="36" fill="#ffcf8f" opacity="0.85" />
        <path d="M-6 140h232" stroke="#111" strokeWidth="4" />
      </g>
      {/* Pines. */}
      <g fill="#262b27">
        <path d="M120 300l18-80 18 80Z" />
        <path d="M100 310l14-60 14 60Z" />
        <path d="M600 300l16-70 16 70Z" />
        <path d="M630 306l12-50 12 50Z" />
      </g>
      <path d="M380 340h20" stroke="#ffcf8f" strokeOpacity="0.4" strokeWidth="2" />
    </svg>
  )
}

function Library() {
  return (
    <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="220" fill="#d9d6cf" />
      <rect y="150" width="300" height="70" fill="#bdb8ae" />
      <rect x="30" y="60" width="240" height="100" fill="#efe9dd" />
      {Array.from({ length: 24 }, (_, i) => (
        <rect key={i} x={34 + i * 10} y="60" width="4" height="100" fill="#8d8478" />
      ))}
      <rect x="30" y="52" width="240" height="8" fill="#5f5850" />
      <rect x="120" y="120" width="60" height="40" fill="#3b3833" />
    </svg>
  )
}

function Pavilion() {
  return (
    <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="220" fill="#c7cbc3" />
      <path d="M0 160c60-10 120-12 180-6s90 6 120 2v64H0Z" fill="#7e8a76" />
      <rect x="60" y="80" width="180" height="8" fill="#3a3530" />
      {[70, 110, 150, 190, 226].map((x) => (
        <rect key={x} x={x} y="88" width="5" height="64" fill="#a07a52" />
      ))}
      <rect x="64" y="150" width="172" height="6" fill="#6b6259" />
      <path d="M20 160l14-70 14 70Z M250 160l12-56 12 56Z" fill="#41503d" />
    </svg>
  )
}

function Detail() {
  return (
    <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="220" fill="#2b2a28" />
      {Array.from({ length: 16 }, (_, i) => (
        <rect key={i} x={i * 20} y="0" width="12" height="220" fill="#3a3835" />
      ))}
      <path d="M0 220L300 40V220Z" fill="#e9c391" opacity="0.18" />
      <rect x="170" y="70" width="90" height="110" fill="#f0d3a3" />
      <path d="M215 70v110M170 125h90" stroke="#2b2a28" strokeWidth="3" />
    </svg>
  )
}

export function Fjord({ t }: { t: T }) {
  const images = [<House key="h" />, <Library key="l" />, <Pavilion key="p" />]
  return (
    <div className={styles.site}>
      <header className={styles.nav}>
        <span className={styles.logo}>Form &amp; Fjord</span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
      </header>

      <section className={styles.hero}>
        <strong className={styles.title}>
          {t.title[0]} <em>{t.title[1]}</em>
        </strong>
        <span className={styles.text}>{t.text}</span>
      </section>

      <div className={styles.feature}>
        <House />
        <span className={styles.caption}>
          {t.projects[0][0]} — {t.projects[0][1]}
        </span>
      </div>

      <section className={styles.projects}>
        <span className={styles.label}>{t.projectsTitle}</span>
        <div className={styles.grid}>
          {t.projects.map(([name, year], i) => (
            <div key={name} className={styles.project}>
              <div className={styles.thumb}>{i === 0 ? <Detail /> : images[i]}</div>
              <span>
                <b>{name}</b>
                <em>{year}</em>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.quote}>
        <blockquote>“{t.quote}”</blockquote>
        <span className={styles.contact}>{t.contact} →</span>
      </section>

      <footer className={styles.footer}>
        <span className={styles.logo}>Form &amp; Fjord</span>
        <span>Helsinki — Stockholm</span>
      </footer>
    </div>
  )
}
