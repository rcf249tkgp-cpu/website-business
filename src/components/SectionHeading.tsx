import styles from './SectionHeading.module.css'

interface Props {
  id: string
  /** Section number shown before the eyebrow, e.g. "01". */
  index?: string
  eyebrow: string
  title: string
  description?: string
  /** `split`: title left, description right on wide screens. `stack`: one column. */
  layout?: 'split' | 'stack'
  /** `h1` when the section is the main content of its own page. */
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  layout = 'split',
  as: Heading = 'h2',
}: Props) {
  return (
    <div className={`${styles.heading} reveal`} data-layout={layout}>
      <p className={styles.eyebrow}>
        {index && (
          <span className={styles.index} aria-hidden="true">
            {index}
          </span>
        )}
        {eyebrow}
      </p>
      <Heading id={id} className={styles.title}>
        <span className="chrome-lines">{title}</span>
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
