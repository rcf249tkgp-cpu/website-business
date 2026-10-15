import styles from './SectionHeading.module.css'

interface Props {
  id: string
  /** @deprecated Section numbers are no longer shown. */
  index?: string
  eyebrow: string
  /** Show the small eyebrow label above the title (used on only a few sections). */
  showEyebrow?: boolean
  title: string
  description?: string
  /** `split`: title left, description right on wide screens. `stack`: one column. `center`: centred. */
  layout?: 'split' | 'stack' | 'center'
  /** `h1` when the section is the main content of its own page. */
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  id,
  eyebrow,
  showEyebrow = false,
  title,
  description,
  layout = 'split',
  as: Heading = 'h2',
}: Props) {
  return (
    <div className={`${styles.heading} reveal`} data-layout={layout}>
      {showEyebrow && <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
