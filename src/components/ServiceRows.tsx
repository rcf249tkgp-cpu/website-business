import Link from 'next/link'
import type { Dictionary } from '@/i18n'
import { ArrowRight, Calendar, Cart, Check, Monitor, Refresh } from './Icons'
import styles from './Services.module.css'

type Item = Dictionary['services']['items'][number]

const ICONS: Record<string, typeof Monitor> = {
  websites: Monitor,
  stores: Cart,
  booking: Calendar,
  redesign: Refresh,
}

/** The services as cards: line icon, title and one sentence (plus what's included on the Services page). */
export function ServiceRows({
  items,
  includesLabel,
  heading: Heading = 'h3',
  detailed = false,
  readMore,
}: {
  items: Item[]
  includesLabel: string
  /** `h2` when the section heading is the page's h1. */
  heading?: 'h2' | 'h3'
  /** Show what each service includes (Services page). */
  detailed?: boolean
  /** One "Read more →" link under the cards (homepage only). */
  readMore?: { href: string; label: string }
}) {
  return (
    <div className={styles.cards}>
      <ul className={styles.list} data-stagger>
        {items.map((item) => {
          const Icon = ICONS[item.id] ?? Monitor
          return (
            <li key={item.id} id={detailed ? item.id : undefined} className={`card ${styles.row}`}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <Heading className={styles.name}>{item.title}</Heading>
              <p className={styles.description}>{item.description}</p>
              {detailed && (
                <ul className={`check-list ${styles.includes}`} aria-label={includesLabel}>
                  {item.includes.map((inc) => (
                    <li key={inc}>
                      <Check aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      {readMore && (
        <Link href={readMore.href} className={`text-link ${styles.more}`}>
          {readMore.label}
          <ArrowRight />
        </Link>
      )}
    </div>
  )
}
