import Image from 'next/image'
import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import { ArrowUpRight } from './Icons'
import styles from './Work.module.css'

/** The real client project: VYRO Athletics. */
export function FeaturedCase({ t, heading: Heading = 'h3' }: { t: Dictionary['work']; heading?: 'h2' | 'h3' }) {
  const { featured } = t
  const { url, desktop, mobile } = siteConfig.featuredCase
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
        <div className={styles.caseDesktop}>
          <div className={styles.caseChrome} aria-hidden="true">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.caseUrl}>{host}</span>
          </div>
          {desktop ? (
            <div
              className={styles.caseScroll}
              tabIndex={0}
              role="region"
              aria-label={`${featured.client} — ${t.desktop}`}
            >
              <Image
                src={desktop.src}
                width={desktop.width}
                height={desktop.height}
                alt=""
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
          ) : (
            <div className={styles.casePending}>
              <span className={styles.pendingMark}>{featured.client}</span>
              <span>{featured.imagesPending}</span>
            </div>
          )}
        </div>
        <div className={styles.casePhone}>
          <span className={styles.notch} aria-hidden="true" />
          {mobile ? (
            <div
              className={styles.caseScroll}
              tabIndex={0}
              role="region"
              aria-label={`${featured.client} — ${t.mobile}`}
            >
              <Image src={mobile.src} width={mobile.width} height={mobile.height} alt="" sizes="320px" />
            </div>
          ) : (
            <div className={styles.casePending}>
              <span className={styles.pendingMark}>VYRO</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
