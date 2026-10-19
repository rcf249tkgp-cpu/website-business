import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { BeforeAfterRows, type Row } from './BeforeAfterRows'
import { SectionHeading } from './SectionHeading'
import styles from './BeforeAfter.module.css'

/** The three wide showcase rows (laptop + phone, old site → new site), in /public/img/. */
const ROWS: Omit<Row, 'label'>[] = [
  { id: 'construction', name: 'Bygg & Renovering AB', src: '/img/ba-row-bygg', width: 1157, height: 342 },
  { id: 'restaurant', name: 'Restaurang Sofia', src: '/img/ba-row-restaurang', width: 1157, height: 327 },
  { id: 'gym', name: 'Nordic Gym', src: '/img/ba-row-gym', width: 1157, height: 329 },
]

/** The smaller before → after pairs for the gallery (all about 761 × 287). */
const PAIRS = [
  { id: 'construction', name: 'Bergs Bygg', src: '/img/ba-bergs-bygg.webp', width: 761, height: 283 },
  { id: 'electrician', name: 'Elteknik AB', src: '/img/ba-elteknik.webp', width: 761, height: 291 },
  { id: 'salon', name: 'Hårstudion', src: '/img/ba-harstudion.webp', width: 762, height: 290 },
  { id: 'roofing', name: 'Nordic Tak & Fasader', src: '/img/ba-nordic-tak.webp', width: 762, height: 291 },
  { id: 'gym', name: 'Power Gym', src: '/img/ba-power-gym.webp', width: 761, height: 290 },
  { id: 'cafe', name: 'Strandens Café', src: '/img/ba-strandens-cafe.webp', width: 762, height: 283 },
] as const

/**
 * Before & after: made-up local businesses, their typical dated website and the redesign
 * we would build. The images carry no text labels of their own; "Before" and "After" are
 * overlaid here in the page language.
 */
export function BeforeAfter({ dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.beforeAfter
  const alt = (name: string) => t.alt.replace('{name}', name)

  return (
    <section id="before-after" className={`section section-alt ${styles.section}`} aria-labelledby="before-after-title">
      <div className="container">
        <SectionHeading
          id="before-after-title"
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
          layout="center"
        />

        <div className="reveal">
          <BeforeAfterRows
            rows={ROWS.map((r) => ({ ...r, label: t.rows[r.id as keyof typeof t.rows] }))}
            t={{ tabsLabel: t.tabsLabel, before: t.before, after: t.after, alt: t.alt }}
          />
        </div>

        <h3 className={styles.galleryTitle}>{t.galleryTitle}</h3>
        <ul className={styles.gallery} aria-label={t.galleryLabel} data-stagger>
          {PAIRS.map((p) => (
            <li key={p.src} className={styles.pair}>
              <div className={styles.pairImage}>
                <img src={p.src} alt={alt(p.name)} width={p.width} height={p.height} loading="lazy" decoding="async" />
                <span className={styles.labelBefore} aria-hidden="true">
                  {t.before}
                </span>
                <span className={styles.labelAfter} aria-hidden="true">
                  {t.after}
                </span>
              </div>
              <p className={styles.pairCaption}>
                <span>{p.name}</span> {t.pairs[p.id]}
              </p>
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>{t.disclaimer}</p>
      </div>
    </section>
  )
}
