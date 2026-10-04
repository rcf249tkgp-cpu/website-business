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
  phone,
  phoneSize,
  mobileLabel,
}: {
  screens: Screen[]
  size: { width: number; height: number }
  host: string
  client: string
  label: string
  /** Phone screenshots, swipeable inside a phone frame. */
  phone: Screen[]
  phoneSize: { width: number; height: number }
  mobileLabel: string
}) {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(false)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)

  const goTo = (i: number) => {
    const el = track.current
    if (!el) return
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? 'smooth' : 'auto' })
  }

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

      <div className={styles.phoneWrap}>
        <div className={styles.phone}>
          <span className={styles.phoneNotch} aria-hidden="true" />
          <div
            ref={track}
            className={styles.phoneTrack}
            style={{ aspectRatio: `${phoneSize.width} / ${phoneSize.height}` }}
            tabIndex={0}
            role="region"
            aria-label={`${client} — ${mobileLabel}`}
            onScroll={(e) => {
              const el = e.currentTarget
              setSlide(Math.round(el.scrollLeft / el.clientWidth))
            }}
          >
            {phone.map((p) => (
              <Image
                key={p.id}
                src={p.src}
                width={phoneSize.width}
                height={phoneSize.height}
                alt={`${client} — ${p.label} (${mobileLabel})`}
                sizes="260px"
              />
            ))}
          </div>
        </div>
        <div className={styles.phoneDots} role="group" aria-label={`${mobileLabel}: ${label}`}>
          {phone.map((p, i) => (
            <button key={p.id} type="button" aria-label={p.label} aria-pressed={i === slide} onClick={() => goTo(i)} />
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
