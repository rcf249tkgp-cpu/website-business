import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { ArrowRight } from './Icons'
import styles from './WorkCards.module.css'

const CONCEPTS = ['ember', 'lumo', 'voltra', 'fjord'] as const

/**
 * Homepage work: VYRO Athletics (the real client project) as a large featured image
 * card, then the concept studies as smaller image cards. Each card opens the Work page,
 * where the live case study and the interactive concept previews are.
 */
export function WorkCards({ lang, t, heading: Heading = 'h3' }: { lang: Locale; t: Dictionary['work']; heading?: 'h3' }) {
  const { featured } = t
  const workHref = `/${lang}/work`
  // The shop page: the most telling screenshot of the store.
  const vyro = siteConfig.featuredCase.screens[1]
  const tags = featured.category.split(' · ')

  return (
    <>
      <Link href={`${workHref}#case-title`} className={`card ${styles.featured} reveal`}>
        <div className={styles.featuredImage}>
          <Image
            src={vyro.src}
            alt={`${featured.client} — ${featured.pages[vyro.id]}`}
            width={siteConfig.featuredCase.screenSize.width}
            height={siteConfig.featuredCase.screenSize.height}
            sizes="(max-width: 900px) 100vw, 60vw"
          />
        </div>
        <div className={styles.featuredBody}>
          <p className={styles.caseLabel}>
            <span className={styles.liveDot} aria-hidden="true" />
            {t.caseLabel} · {t.caseLive}
          </p>
          <Heading className={styles.featuredTitle}>{featured.client}</Heading>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className={styles.summary}>{featured.summary}</p>
          <span className={`round-arrow ${styles.arrow}`} aria-hidden="true">
            <ArrowRight />
          </span>
        </div>
      </Link>

      <div className={styles.conceptsHead}>
        <Heading className={styles.conceptsTitle}>{t.conceptsTitle}</Heading>
        <p>{t.conceptsDescription}</p>
      </div>
      <ul className={styles.concepts} data-stagger>
        {CONCEPTS.map((id) => {
          const p = t.projects[id]
          return (
            <li key={id}>
              <Link href={workHref} className={`card ${styles.concept}`}>
                <div className={styles.conceptImage}>
                  <Image src={`/work/concepts/${id}-${lang}.webp`} alt={`${p.name} — ${p.category}`} width={1200} height={750} sizes="(max-width: 760px) 80vw, 25vw" />
                </div>
                <div className={styles.conceptBody}>
                  <div>
                    <span className={styles.conceptName}>{p.name}</span>
                    <ul className={styles.tags}>
                      <li>{p.category}</li>
                      <li>{t.conceptBadge}</li>
                    </ul>
                  </div>
                  <span className="round-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <p className={styles.disclaimer}>{t.disclaimer}</p>
    </>
  )
}
