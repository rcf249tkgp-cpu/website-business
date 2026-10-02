import styles from './TechMarquee.module.css'

/** Only tools we actually use on client projects. */
const tech = [
  'Next.js',
  'React',
  'Vercel',
  'GitHub',
  'Shopify',
  'Stripe',
  'Resend',
  'Google Business Profile',
  'Google Search Console',
]

export function TechMarquee({ label }: { label: string }) {
  const items = [...tech, ...tech]
  return (
    <section className={styles.wrap} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {items.map((name, i) => (
            <li key={i} aria-hidden={i >= tech.length || undefined}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
