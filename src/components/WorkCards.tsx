import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { Devices } from './Devices'
import { ArrowUpRight } from './Icons'
import styles from './WorkCards.module.css'

/** Niipperin Maanrakennus: the site built for them, not yet launched (shown as a preview). */
const NIIPPERIN_URL = 'https://client-niipperin-maanrakennus.rcf249tkgp.workers.dev'

/**
 * The real client projects as two large cards with the sites in device mockups:
 * VYRO Athletics (live) and Niipperin Maanrakennus (preview).
 */
export function WorkCards({ lang, t, heading: Heading = 'h3' }: { lang: Locale; t: Dictionary['work']; heading?: 'h2' | 'h3' }) {
  const vyro = siteConfig.featuredCase
  const shop = vyro.screens[1]
  const phone = vyro.mobileScreens[1]

  const projects = [
    {
      id: 'vyro',
      t: t.featured,
      status: t.caseLive,
      live: true,
      href: vyro.url,
      devices: (
        <Devices
          desktop={{ src: shop.src, ...vyro.screenSize }}
          phone={{ src: phone.src, ...vyro.mobileSize }}
          alt={`${t.featured.client}: ${t.featured.category}`}
        />
      ),
    },
    {
      id: 'niipperin',
      t: t.niipperin,
      status: t.casePreview,
      live: false,
      href: NIIPPERIN_URL,
      devices: (
        <Devices
          desktop={{ src: `/work/niipperin/share-${lang}.webp`, width: 1200, height: 630, position: 'left center' }}
          alt={`${t.niipperin.client}: ${t.niipperin.category}`}
        />
      ),
    },
  ]

  return (
    <ul className={styles.projects} data-stagger>
      {projects.map((p) => (
        <li key={p.id} className={`card ${styles.project}`}>
          <div className={styles.media}>{p.devices}</div>
          <div className={styles.body}>
            <p className={styles.label}>
              <span className={styles.dot} data-live={p.live || undefined} aria-hidden="true" />
              {t.caseLabel} · {p.status}
            </p>
            <Heading className={styles.title}>{p.t.client}</Heading>
            <p className={styles.category}>{p.t.category}</p>
            <p className={styles.summary}>{p.t.summary}</p>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className={`text-link ${styles.link}`}>
              {p.t.cta}
              <ArrowUpRight />
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
