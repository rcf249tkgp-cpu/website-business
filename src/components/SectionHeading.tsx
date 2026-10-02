import styles from './SectionHeading.module.css'

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
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
