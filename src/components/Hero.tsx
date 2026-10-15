import Link from 'next/link'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { HeroScene } from './hero/HeroScene'
import { ArrowRight } from './Icons'
import styles from './Hero.module.css'

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={`container ${styles.content}`}>
          <p className={`eyebrow ${styles.kicker}`} data-hero="rest">
            {hero.kicker}
          </p>

          <h1 id="hero-title" className={styles.title} data-hero="line">
            <span className={styles.lead}>{hero.titleLead}</span>{' '}
            <span className={styles.highlight}>{hero.titleHighlight}</span>
          </h1>

          <p className={styles.description} data-hero="rest">
            {hero.description}
          </p>
          <div className={styles.ctas} data-hero="rest">
            <Link href={`/${lang}/start`} className="btn btn-primary">
              {hero.primaryCta}
              <ArrowRight />
            </Link>
            <Link href={`/${lang}/work`} className={styles.secondary}>
              <span className={styles.secondaryLabel}>{hero.secondaryCta}</span>
              <span className="round-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <HeroScene className={styles.media} lang={lang} />
      </div>

      {/* Slim info strip: studio, response time, languages. */}
      <div className={styles.strip}>
        <dl className={`container ${styles.facts}`} data-hero="rest">
          {hero.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
