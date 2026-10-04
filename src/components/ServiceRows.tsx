'use client'

import { useRef, useState, type CSSProperties } from 'react'
import type { Dictionary } from '@/i18n'
import styles from './Services.module.css'

type Item = Dictionary['services']['items'][number]

/**
 * The service index: large typographic rows. On devices with a mouse, a small
 * preview of the hovered service follows the cursor.
 */
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
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState<number | null>(null)

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !listRef.current) return
    const r = listRef.current.getBoundingClientRect()
    listRef.current.style.setProperty('--px', `${e.clientX - r.left}px`)
    listRef.current.style.setProperty('--py', `${e.clientY - r.top}px`)
  }

  return (
    <ol
      ref={listRef}
      className={styles.list}
      onPointerMove={onMove}
      onPointerLeave={() => setActive(null)}
      data-active={active ?? undefined}
    >
      {items.map((item, i) => (
        <li
          key={item.id}
          className={`${styles.row} reveal`}
          onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
          data-on={active === i || undefined}
        >
          <span className={styles.number} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <Heading className={styles.name}>{item.title}</Heading>
          <div className={styles.body}>
            <p>{item.description}</p>
            <p className={styles.includes}>
              <span className="sr-only">{includesLabel}: </span>
              {item.includes.map((inc, j) => (
                <span key={inc}>
                  {inc}
                  {j < item.includes.length - 1 && <i aria-hidden="true">/</i>}
                </span>
              ))}
            </p>
          </div>
        </li>
      ))}

      <li className={styles.preview} aria-hidden="true" style={{ '--n': active ?? 0 } as CSSProperties}>
        <div className={styles.previewTrack}>
          <PreviewWebsite />
          <PreviewStore />
          <PreviewBooking />
          <PreviewRedesign />
        </div>
      </li>
    </ol>
  )
}

function PreviewWebsite() {
  return (
    <div className={`${styles.card} ${styles.pWeb}`}>
      <span className={styles.pBar}>
        <i />
        <i />
        <i />
      </span>
      <span className={styles.pNav}>
        <b />
        <i />
        <i />
        <i />
      </span>
      <span className={styles.pHead} />
      <span className={styles.pHeadShort} />
      <span className={styles.pImage} />
      <span className={styles.pBtn} />
    </div>
  )
}

function PreviewStore() {
  return (
    <div className={`${styles.card} ${styles.pStore}`}>
      <span className={styles.pProduct}>
        <svg viewBox="0 0 48 48">
          <path d="M16 8l-9 6 4 8 4-2v20h18V20l4 2 4-8-9-6c-1 3-4 5-8 5s-7-2-8-5Z" />
        </svg>
      </span>
      <span className={styles.pMeta}>
        <span>
          <b />
          <i />
        </span>
        <strong>€49</strong>
      </span>
      <span className={styles.pAdd}>+ Add</span>
    </div>
  )
}

function PreviewBooking() {
  return (
    <div className={`${styles.card} ${styles.pBook}`}>
      <span className={styles.pDays}>
        {Array.from({ length: 14 }, (_, i) => (
          <i key={i} data-on={i === 9 || undefined} data-off={[0, 6, 7, 13].includes(i) || undefined} />
        ))}
      </span>
      <span className={styles.pTimes}>
        <i>09:00</i>
        <i data-on>10:30</i>
        <i>13:15</i>
      </span>
    </div>
  )
}

function PreviewRedesign() {
  return (
    <div className={`${styles.card} ${styles.pRedo}`}>
      <span className={styles.pOld}>Welcome!!</span>
      <span className={styles.pNew}>
        <b />
        <i />
      </span>
    </div>
  )
}
