import type { CSSProperties } from 'react'
import styles from './SectionHeading.module.css'

/** Wraps each word so it can rise into view on its own (styles in globals.css). */
export function SplitWords({ text }: { text: string }) {
  return text.split(' ').map((word, i, words) => (
    <span key={i}>
      <span className="split-word">
        <span style={{ '--i': i } as CSSProperties}>{word}</span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </span>
  ))
}

interface Props {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** `h1` when the section is the main content of its own page. */
  as?: 'h1' | 'h2'
}

export function SectionHeading({ id, eyebrow, title, description, align = 'left', as: Heading = 'h2' }: Props) {
  return (
    <div className={`${styles.heading} reveal`} data-align={align}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading id={id} className={styles.title} data-split>
        <SplitWords text={title} />
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
