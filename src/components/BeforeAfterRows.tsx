'use client'

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import styles from './BeforeAfter.module.css'

export interface Row {
  id: string
  /** Tab label in the page language, e.g. "Construction". */
  label: string
  /** The made-up business shown in the image. */
  name: string
  /** Path without extension; `-640.webp` and `.webp` exist. */
  src: string
  width: number
  height: number
}

/**
 * Where the old and new sites sit in each row image, as fractions of its width: the old
 * site (laptop + phone) on the left, an arrow, the new one on the right. Phones show the
 * two halves stacked, each cropped from the same image.
 */
const BEFORE = { start: 0, size: 0.425 }
const AFTER = { start: 0.49, size: 0.51 }

/** The three showcase rows behind accessible tabs (arrow keys move between them). */
export function BeforeAfterRows({
  rows,
  t,
}: {
  rows: Row[]
  t: { tabsLabel: string; before: string; after: string; alt: string }
}) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const base = useId()

  const onKeyDown = (e: KeyboardEvent) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    const to = e.key === 'Home' ? 0 : e.key === 'End' ? rows.length - 1 : (active + step + rows.length) % rows.length
    if (!step && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    setActive(to)
    tabs.current[to]?.focus()
  }

  return (
    <div className={styles.showcase}>
      <div role="tablist" aria-label={t.tabsLabel} className={styles.tabs} onKeyDown={onKeyDown}>
        {rows.map((row, i) => (
          <button
            key={row.id}
            ref={(el) => {
              tabs.current[i] = el
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${row.id}`}
            aria-controls={`${base}-panel-${row.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            {row.label}
          </button>
        ))}
      </div>

      {rows.map((row, i) => {
        const alt = t.alt.replace('{name}', row.name)
        const srcSet = `${row.src}-640.webp 640w, ${row.src}.webp ${row.width}w`
        const crop = (part: typeof BEFORE, label: string, after: boolean) => (
          <figure
            className={styles.crop}
            style={
              {
                aspectRatio: `${Math.round(part.size * row.width)} / ${row.height}`,
                '--w': `${100 / part.size}%`,
                '--x': `${(part.start / part.size) * 100}%`,
              } as CSSProperties
            }
          >
            <img
              src={`${row.src}.webp`}
              alt=""
              width={row.width}
              height={row.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={after ? styles.labelAfter : styles.labelBefore}>{label}</figcaption>
          </figure>
        )
        return (
          <div
            key={row.id}
            role="tabpanel"
            id={`${base}-panel-${row.id}`}
            aria-labelledby={`${base}-tab-${row.id}`}
            hidden={i !== active}
            className={styles.panel}
          >
            {/* Wide screens: the whole row, with both labels on top. */}
            <div className={styles.full}>
              <img
                src={`${row.src}.webp`}
                srcSet={srcSet}
                sizes={`(min-width: 700px) min(${row.width}px, 100vw - 64px), 1px`}
                alt={alt}
                width={row.width}
                height={row.height}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.labelBefore} aria-hidden="true">
                {t.before}
              </span>
              <span className={styles.labelAfter} aria-hidden="true" style={{ left: `${AFTER.start * 100}%` }}>
                {t.after}
              </span>
            </div>
            {/* Phones: old and new stacked, each labelled. */}
            <div className={styles.stack} role="img" aria-label={alt}>
              {crop(BEFORE, t.before, false)}
              {crop(AFTER, t.after, true)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
