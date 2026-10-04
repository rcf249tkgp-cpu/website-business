import Link from 'next/link'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { HeroMark } from './HeroMark'
import { ArrowRight, ArrowUpRight } from './Icons'
import styles from './Hero.module.css'

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.topline}>
          <span className={styles.kicker}>{hero.kicker}</span>
          <span className={styles.index} aria-hidden="true">
            FS / 01
          </span>
        </div>

        <div className={styles.markWrap}>
          <HeroMark />
        </div>

        <h1 id="hero-title" className={styles.title}>
          <span className={styles.lead}>{hero.titleLead}</span>{' '}
          <span className={styles.highlight}>{hero.titleHighlight}</span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.ctas}>
            <Link href={`/${lang}/start`} className="btn btn-primary" data-magnetic>
              {hero.primaryCta}
              <ArrowRight />
            </Link>
            <Link href={`/${lang}/work`} className={styles.textLink}>
              {hero.secondaryCta}
              <ArrowUpRight />
            </Link>
          </div>
          <dl className={styles.facts}>
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
