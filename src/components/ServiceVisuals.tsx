'use client'

import { useState, type CSSProperties } from 'react'
import type { Dictionary } from '@/i18n'
import { Cart, Check } from './Icons'
import styles from './ServiceVisuals.module.css'

type Labels = Dictionary['services']['labels'] & { addToCart: string }

/** Wireframe blocks that snap onto a 12-column grid on hover. */
function DesignVisual() {
  return (
    <div className={`${styles.visual} ${styles.design}`} aria-hidden="true">
      <div className={styles.columns}>
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <span className={`${styles.block} ${styles.blockA}`} />
      <span className={`${styles.block} ${styles.blockB}`} />
      <span className={`${styles.block} ${styles.blockC}`} />
      <span className={`${styles.block} ${styles.blockD}`} />
      <svg className={styles.cursor} viewBox="0 0 16 16">
        <path d="M2 1l11 6.5-5 1.2-2.2 4.8z" fill="#fff" stroke="#0a0a12" strokeWidth="1" />
      </svg>
    </div>
  )
}

/** Code being written, ending in a passing build. */
function DevelopmentVisual({ t }: { t: Labels }) {
  const lines = [
    [
      ['k', 'export'],
      ['p', ' '],
      ['k', 'async function'],
      ['f', ' Page'],
      ['p', '() {'],
    ],
    [
      ['p', '  '],
      ['k', 'const'],
      ['p', ' content = '],
      ['k', 'await'],
      ['f', ' cms'],
      ['p', '.get()'],
    ],
    [
      ['p', '  '],
      ['k', 'return'],
      ['p', ' '],
      ['t', '<Layout'],
      ['a', ' fast'],
      ['a', ' accessible'],
      ['t', ' />'],
    ],
    [['p', '}']],
  ]
  return (
    <div className={`${styles.visual} ${styles.dev}`} aria-hidden="true">
      <pre>
        {lines.map((line, i) => (
          <span key={i} className={styles.devLine} style={{ '--i': i } as CSSProperties}>
            {line.map(([kind, text], j) => (
              <span key={j} className={styles[`c${kind}`]}>
                {text}
              </span>
            ))}
          </span>
        ))}
      </pre>
      <span className={styles.build}>
        <Check />
        {t.buildPassed}
      </span>
    </div>
  )
}

/** A product card; the cart count ticks up on hover. */
function CommerceVisual({ t }: { t: Labels }) {
  return (
    <div className={`${styles.visual} ${styles.commerce}`} aria-hidden="true">
      <div className={styles.product}>
        <span className={styles.productImage} />
        <span className={styles.productLines}>
          <b />
          <b />
        </span>
        <span className={styles.productRow}>
          <strong>€24</strong>
          <span className={styles.addButton}>{t.addToCart}</span>
        </span>
      </div>
      <span className={styles.cart}>
        <Cart />
        <span className={styles.cartCount} />
      </span>
    </div>
  )
}

/** A focused page with one call to action, clicked by a looping cursor. */
function LandingVisual({ t }: { t: Labels }) {
  return (
    <div className={`${styles.visual} ${styles.landing}`} aria-hidden="true">
      <div className={styles.page}>
        <b className={styles.pageTitle} />
        <b className={styles.pageTitleShort} />
        <b className={styles.pageText} />
        <span className={styles.pageCta}>
          {t.getStarted}
          <span className={styles.ripple} />
        </span>
      </div>
      <svg className={styles.clicker} viewBox="0 0 16 16">
        <path d="M2 1l11 6.5-5 1.2-2.2 4.8z" fill="#fff" stroke="#0a0a12" strokeWidth="1" />
      </svg>
    </div>
  )
}

/**
 * Before/after comparison the visitor can drag (keyboard accessible range input).
 * Both sides show the same made-up café: a dated mid-2010s template site on the left
 * and the kind of site we would build for it on the right.
 */
function RedesignVisual({ t }: { t: Labels }) {
  const [split, setSplit] = useState(50)
  const d = t.demo
  return (
    <div className={`${styles.visual} ${styles.redesign}`} style={{ '--split': `${split}%` } as CSSProperties}>
      <div className={styles.before} aria-hidden="true">
        <div className={styles.oldNav}>
          <span className={styles.oldLogo}>Café Aamu</span>
          <span className={styles.oldLinks}>
            <span data-active>{d.home}</span>
            <span>{d.menu}</span>
            <span>{d.contact}</span>
          </span>
          <span className={styles.oldSocial}>
            <i>f</i>
            <i>t</i>
          </span>
        </div>
        <div className={styles.oldSlider}>
          <span className={styles.oldArrow}>‹</span>
          <span className={styles.oldCaption}>
            <span className={styles.oldWelcome}>{d.welcome}</span>
            <span className={styles.oldIntro}>{d.intro}</span>
            <span className={styles.oldButton}>{d.readMore}</span>
          </span>
          <span className={styles.oldArrow}>›</span>
          <span className={styles.oldDots}>
            <i data-active />
            <i />
            <i />
          </span>
        </div>
        <div className={styles.oldCookie}>
          <span>{d.cookies}</span>
          <b>OK</b>
        </div>
        <span className={styles.tag}>{t.before}</span>
      </div>

      <div className={styles.after} aria-hidden="true">
        <div className={styles.newNav}>
          <span className={styles.newLogo}>
            <i />
            Café Aamu
          </span>
          <span className={styles.newLinks}>
            <span>{d.menu}</span>
            <span>{d.contact}</span>
          </span>
          <span className={styles.newBook}>{d.book}</span>
        </div>
        <div className={styles.newHero}>
          <span className={styles.newCopy}>
            <span className={styles.newChip}>
              <i />
              {d.open}
            </span>
            <strong className={styles.newHeadline}>{d.headline}</strong>
            <span className={styles.newCta}>{d.cta} →</span>
          </span>
          <span className={styles.newPhoto} />
        </div>
        <span className={`${styles.tag} ${styles.tagAfter}`}>{t.after}</span>
      </div>

      <span className={styles.handle} aria-hidden="true" />
      <input
        type="range"
        min={0}
        max={100}
        value={split}
        onChange={(e) => setSplit(Number(e.target.value))}
        className={styles.range}
        aria-label={t.compare}
      />
    </div>
  )
}

export function ServiceVisual({ id, labels }: { id: string; labels: Labels }) {
  switch (id) {
    case 'design':
      return <DesignVisual />
    case 'development':
      return <DevelopmentVisual t={labels} />
    case 'ecommerce':
      return <CommerceVisual t={labels} />
    case 'landing':
      return <LandingVisual t={labels} />
    case 'redesign':
      return <RedesignVisual t={labels} />
    default:
      return null
  }
}
