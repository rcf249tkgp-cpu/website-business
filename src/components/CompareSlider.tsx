'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/i18n'
import styles from './BeforeAfter.module.css'

const DemoSite = dynamic(() => import('./DemoSite'))

type Examples = Dictionary['beforeAfter']['examples']

export interface CompareExample {
  id: keyof Examples
  label: string
  url: string
}

interface Labels {
  tabsLabel: string
  hint: string
  before: string
  after: string
  compare: string
}

const clamp = (v: number) => Math.max(0, Math.min(100, v))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Before/after comparison. Drag anywhere on the preview (mouse or touch), or
 * focus the slider and use the arrow keys. Updates go straight to a CSS
 * variable, so dragging never re-renders React.
 */
export function CompareSlider({
  examples,
  sites,
  t,
}: {
  examples: CompareExample[]
  /** Texts of the example sites. */
  sites: Examples
  t: Labels
}) {
  const [active, setActive] = useState(0)
  const [touched, setTouched] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dragging = useRef(false)
  const hintFrame = useRef(0)
  /** Set on the first interaction; the hint never runs after that. */
  const interacted = useRef(false)

  const set = useCallback((v: number) => {
    const value = clamp(v)
    stageRef.current?.style.setProperty('--split', `${value}%`)
    if (inputRef.current) inputRef.current.value = String(Math.round(value))
  }, [])

  const stopHint = useCallback(() => {
    interacted.current = true
    cancelAnimationFrame(hintFrame.current)
    setTouched(true)
  }, [])

  // A one-time nudge when the slider first comes into view, so it reads as interactive.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        if (interacted.current) return
        const points = [50, 36, 63, 50]
        const duration = 2200
        const start = performance.now() + 500
        const tick = (now: number) => {
          if (interacted.current) return
          const p = Math.max(0, Math.min(1, (now - start) / duration))
          const seg = Math.min(points.length - 2, Math.floor(p * (points.length - 1)))
          const local = p * (points.length - 1) - seg
          set(points[seg] + (points[seg + 1] - points[seg]) * ease(local))
          if (p < 1) hintFrame.current = requestAnimationFrame(tick)
        }
        hintFrame.current = requestAnimationFrame(tick)
      },
      { threshold: 0.55 },
    )
    io.observe(stage)
    return () => {
      io.disconnect()
      cancelAnimationFrame(hintFrame.current)
    }
  }, [set])

  const fromPointer = (e: React.PointerEvent) => {
    const r = stageRef.current!.getBoundingClientRect()
    set(((e.clientX - r.left) / r.width) * 100)
  }

  const example = examples[active]

  return (
    <div className={styles.compare}>
      <div className={styles.toolbar}>
        <div className={styles.tabs} role="group" aria-label={t.tabsLabel}>
          {examples.map((ex, i) => (
            <button
              key={ex.id}
              type="button"
              className={styles.tab}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.browser}>
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.url}>{example.url}</span>
        </div>

        <div
          ref={stageRef}
          className={styles.stage}
          data-touched={touched || undefined}
          onPointerDown={(e) => {
            if (e.button !== 0) return
            dragging.current = true
            stopHint()
            e.currentTarget.setPointerCapture(e.pointerId)
            fromPointer(e)
          }}
          onPointerMove={(e) => dragging.current && fromPointer(e)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          <div key={example.id} className={styles.layers}>
            <div className={styles.after} aria-hidden="true">
              <DemoSite id={example.id} side="after" t={sites} />
              <span className={`${styles.label} ${styles.labelAfter}`}>{t.after}</span>
            </div>
            <div className={styles.before} aria-hidden="true">
              <DemoSite id={example.id} side="before" t={sites} />
              <span className={styles.label}>{t.before}</span>
            </div>
          </div>

          <span className={styles.handle} aria-hidden="true">
            <span className={styles.knob}>
              <svg viewBox="0 0 24 24">
                <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
              </svg>
            </span>
            <span className={styles.hint}>{t.hint}</span>
          </span>

          <input
            ref={inputRef}
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            className={styles.range}
            aria-label={t.compare}
            onInput={(e) => {
              stopHint()
              set(Number(e.currentTarget.value))
            }}
          />
        </div>
      </div>
    </div>
  )
}
