import type { Dictionary } from '@/i18n'
import { Calendar, Cart, Monitor, Refresh } from './Icons'
import styles from './Services.module.css'

type Item = Dictionary['services']['items'][number]

const ICONS: Record<string, typeof Monitor> = {
  websites: Monitor,
  stores: Cart,
  booking: Calendar,
  redesign: Refresh,
}

/** The services as glass cards: icon, title, description and what's included. */
export function ServiceRows({
  items,
  includesLabel,
  heading: Heading = 'h3',
}: {
  items: Item[]
  includesLabel: string
  /** `h2` when the section heading is the page's h1. */
  heading?: 'h2' | 'h3'
}) {
  return (
    <ol className={styles.list} data-stagger>
      {items.map((item, i) => {
        const Icon = ICONS[item.id] ?? Monitor
        return (
          <li key={item.id} className={`card ${styles.row}`}>
            <div className={styles.top}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <Heading className={styles.name}>{item.title}</Heading>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.includes}>
              <span className="sr-only">{includesLabel}: </span>
              {item.includes.map((inc) => (
                <span key={inc}>{inc}</span>
              ))}
            </p>
          </li>
        )
      })}
    </ol>
  )
}
