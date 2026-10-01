import styles from './SectionHeading.module.css'

interface Props {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ id, eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={`${styles.heading} reveal`} data-align={align}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
