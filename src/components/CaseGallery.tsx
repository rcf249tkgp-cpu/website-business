'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Work.module.css'

interface Screen {
  id: string
  src: string
  label: string
}

const INTERVAL = 5000

/**
 * Screenshots of the live case-study site in a browser frame. It steps through
 * the pages on its own while in view, until the visitor picks one.
 */
export function CaseGallery({
  screens,
  size,
  host,
  client,
  label,
}: {
  screens: Screen[]
  size: { width: number; height: number }
  host: string
  client: string
  label: string
}) {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(false)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Autoplay only while visible, and never with reduced motion.
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([entry]) => setAuto(entry.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!auto || paused) return
    const id = window.setTimeout(() => setActive((i) => (i + 1) % screens.length), INTERVAL)
    return () => window.clearTimeout(id)
  }, [auto, paused, active, screens.length])

  const playing = auto && !paused

  return (
    <div
      ref={ref}
      className={styles.gallery}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
    >
      <div className={styles.caseDesktop}>
        <div className={styles.caseChrome} aria-hidden="true">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.caseUrl}>{host}</span>
        </div>
        <div className={styles.shots} style={{ aspectRatio: `${size.width} / ${size.height}` }}>
          {screens.map((s, i) => (
            <Image
              key={s.id}
              src={s.src}
              width={size.width}
              height={size.height}
              alt={`${client} — ${s.label}`}
              aria-hidden={i !== active || undefined}
              data-on={i === active || undefined}
              sizes="(max-width: 1000px) 100vw, 62vw"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>

      <div className={styles.pages} role="group" aria-label={label}>
        {screens.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={i === active}
            onClick={() => {
              setActive(i)
              setAuto(false)
            }}
          >
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {s.label}
            {i === active && playing && <i key={active} className={styles.timer} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  )
}
