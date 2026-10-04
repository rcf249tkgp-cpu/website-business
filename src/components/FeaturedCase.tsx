import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import { CaseGallery } from './CaseGallery'
import { ArrowUpRight } from './Icons'
import styles from './Work.module.css'

/** The real client project: VYRO Athletics. */
export function FeaturedCase({ t, heading: Heading = 'h3' }: { t: Dictionary['work']; heading?: 'h2' | 'h3' }) {
  const { featured } = t
  const { url, screens, screenSize } = siteConfig.featuredCase
  const host = url.replace(/^https?:\/\//, '')
  return (
    <article className={`${styles.case} reveal`} aria-labelledby="case-title">
      <div className={styles.caseInfo}>
        <p className={styles.caseLabel}>
          <span className={styles.liveDot} aria-hidden="true" />
          {t.caseLabel} · {t.caseLive}
        </p>
        <Heading id="case-title" className={styles.client}>
          {featured.client}
        </Heading>
        <p className={styles.category}>{featured.category}</p>
        <p className={styles.summary}>{featured.summary}</p>
        <div className={styles.built}>
          <p className={styles.builtLabel}>{featured.builtLabel}</p>
          <ul>
            {featured.built.map((item, i) => (
              <li key={item}>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.caseLink}>
          {featured.cta}
          <ArrowUpRight />
        </a>
      </div>

      <div className={styles.caseVisual}>
        <CaseGallery
          screens={screens.map((sc) => ({ ...sc, label: featured.pages[sc.id] }))}
          size={screenSize}
          host={host}
          client={featured.client}
          label={featured.galleryLabel}
        />
      </div>
    </article>
  )
}
