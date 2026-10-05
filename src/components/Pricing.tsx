import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import { localeTags, type Locale } from '@/i18n/config'
import { ArrowRight } from './Icons'
import { SectionHeading } from './SectionHeading'
import styles from './Pricing.module.css'

export function Pricing({ lang, dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { pricing } = dict
  const Sub = standalone ? 'h2' : 'h3'
  const money = new Intl.NumberFormat(localeTags[lang], {
    style: 'currency',
    currency: siteConfig.currency,
    maximumFractionDigits: 0,
  })
  const prices = siteConfig.pricing as Record<string, number | null>

  const price = (amount: number | null, per?: string) =>
    amount == null ? (
      <p className={styles.price}>
        <span className={styles.pending}>{pricing.pending}</span>
      </p>
    ) : (
      <p className={styles.price}>
        <span className={styles.from}>{pricing.from}</span>
        <span className={styles.amount}>{money.format(amount)}</span>
        {per && <span className={styles.per}>{per}</span>}
        <span className={styles.vat}>{pricing.vat}</span>
      </p>
    )

  return (
    <section
      id="pricing"
      className={`section ${styles.section}${standalone ? ' section-page' : ''}`}
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <SectionHeading
          id="pricing-title"
          index="05"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
          as={standalone ? 'h1' : 'h2'}
        />

        <div className={styles.tiers} data-stagger>
          {pricing.tiers.map((tier) => {
            const featured = tier.id === 'standard'
            return (
              <article
                key={tier.id}
                className={styles.tier}
                data-featured={featured || undefined}
                aria-labelledby={`tier-${tier.id}`}
              >
                <header className={styles.tierHead}>
                  <Sub id={`tier-${tier.id}`}>{tier.name}</Sub>
                  {featured && <span className={styles.tag}>{pricing.recommended}</span>}
                </header>
                <p className={styles.description}>{tier.description}</p>
                {price(prices[tier.id] ?? null)}
                <ul className={styles.features}>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/start`}
                  className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} ${styles.cta}`}
                >
                  {tier.cta}
                  <ArrowRight />
                </Link>
              </article>
            )
          })}
        </div>

        <div className={`${styles.maintenance} reveal`}>
          <div>
            <p className={styles.addonLabel}>{pricing.addon.label}</p>
            <Sub>{pricing.addon.title}</Sub>
            <p>{pricing.addon.description}</p>
          </div>
          <p className={styles.price}>
            <span className={styles.pending}>{pricing.addon.price}</span>
          </p>
        </div>

        <div className={`${styles.maintenance} reveal`}>
          <div>
            <Sub>{pricing.maintenance.title}</Sub>
            <p>{pricing.maintenance.description}</p>
          </div>
          {price(prices.maintenance ?? null, pricing.maintenance.per)}
        </div>
      </div>
    </section>
  )
}
