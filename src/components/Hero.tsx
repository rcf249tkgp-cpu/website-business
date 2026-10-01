import Link from 'next/link'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { HeroVisual } from './HeroVisual'
import { ArrowRight, Check } from './Icons'
import styles from './Hero.module.css'

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={`${styles.orb} ${styles.orbA}`} />
        <div className={`${styles.orb} ${styles.orbB}`} />
        <div className={`${styles.orb} ${styles.orbC}`} />
        <div className={styles.beam} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow} style={{ animationDelay: '0.05s' }}>
          <span className={styles.pulse} aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className={styles.title} style={{ animationDelay: '0.12s' }}>
          {hero.titleLead} <span className="gradient-text">{hero.titleHighlight}</span>
        </h1>
        <p className={styles.description} style={{ animationDelay: '0.22s' }}>
          {hero.description}
        </p>
        <div className={styles.ctas} style={{ animationDelay: '0.32s' }}>
          <Link href={`/${lang}#contact`} className="btn btn-primary">
            {hero.primaryCta}
            <ArrowRight />
          </Link>
          <Link href={`/${lang}#work`} className="btn btn-secondary">
            {hero.secondaryCta}
          </Link>
        </div>
        <ul className={styles.trust} style={{ animationDelay: '0.42s' }}>
          {hero.trust.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.visualWrap}`}>
        <HeroVisual dict={dict} />
      </div>
    </section>
  )
}
