import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import { CaseGallery } from './CaseGallery'
import { ArrowUpRight } from './Icons'
import styles from './Work.module.css'

/** The real client project: VYRO Athletics. */
export function FeaturedCase({ t, heading: Heading = 'h3' }: { t: Dictionary['work']; heading?: 'h2' | 'h3' }) {
  const { featured } = t
  const { url, screens, screenSize, mobileScreens, mobileSize } = siteConfig.featuredCase
  const host = url.replace(/^https?:\/\//, '')
  return (
    <article className={styles.case} aria-labelledby="case-title">
      <header className={`${styles.caseHead} reveal`}>
        <div className={styles.caseIntro}>
          <p className={styles.caseLabel}>
            <span className={styles.liveDot} aria-hidden="true" />
            {t.caseLabel} · {t.caseLive}
          </p>
          <Heading id="case-title" className={styles.client}>
            <span className="chrome-lines">{featured.client}</span>
          </Heading>
          <p className={styles.category}>{featured.category}</p>
        </div>
        <div className={styles.caseText}>
          <p className={styles.summary}>{featured.summary}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className={`btn btn-secondary ${styles.caseLink}`}>
            {featured.cta}
            <ArrowUpRight />
          </a>
        </div>
      </header>

      <div className={`${styles.caseStage} reveal`} data-glow>
        <CaseGallery
          screens={screens.map((sc) => ({
            id: sc.id,
            src: sc.src,
            label: featured.pages[sc.id],
            focus: 'focus' in sc ? sc.focus : undefined,
            blur: 'blur' in sc ? sc.blur.map((r) => [...r]) : undefined,
          }))}
          size={screenSize}
          host={host}
          client={featured.client}
          label={featured.galleryLabel}
          phone={mobileScreens.map((m) => ({ id: m.id, src: m.src, label: featured.pages[m.page] }))}
          phoneSize={mobileSize}
          mobileLabel={t.mobile}
        />
      </div>

      <div className={styles.built}>
        <p className={styles.builtLabel}>{featured.builtLabel}</p>
        <ul data-stagger>
          {featured.built.map((item, i) => (
            <li key={item}>
              <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
