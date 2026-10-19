import type { Dictionary } from '@/i18n'
import styles from './ConceptCards.module.css'

/** The four concept studies and their images in /public/img/ (760 × 456, plus a 480 wide copy). */
const CONCEPTS = [
  ['ember', '/img/concept-ember'],
  ['lumo', '/img/concept-lumo'],
  ['voltra', '/img/concept-voltra'],
  ['fjord', '/img/concept-form-fjord'],
] as const

/** Concept studies: large image cards, two by two on wide screens and swipeable on phones. */
export function ConceptCards({ t, heading: Heading = 'h3' }: { t: Dictionary['work']; heading?: 'h2' | 'h3' }) {
  return (
    <>
      <ul className={styles.cards} data-stagger>
        {CONCEPTS.map(([id, src]) => {
          const p = t.projects[id]
          return (
            <li key={id} className={`card ${styles.card}`}>
              <div className={styles.image}>
                <img
                  src={`${src}.webp`}
                  srcSet={`${src}-480.webp 480w, ${src}.webp 760w`}
                  sizes="(min-width: 900px) 600px, 84vw"
                  alt={`${p.name}: ${p.category}`}
                  width={760}
                  height={456}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.body}>
                <Heading className={styles.name}>{p.name}</Heading>
                <p className={styles.category}>
                  {p.category} · {t.conceptBadge}
                </p>
                <p className={styles.summary}>{p.summary}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <p className={styles.disclaimer}>{t.disclaimer}</p>
    </>
  )
}
