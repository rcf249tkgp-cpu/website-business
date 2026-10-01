import styles from './TechMarquee.module.css'

const tech = [
  'Next.js',
  'React',
  'TypeScript',
  'Shopify',
  'Sanity',
  'Vercel',
  'Stripe',
  'Klarna',
  'Figma',
  'Tailwind',
  'WordPress',
  'Cloudflare',
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
