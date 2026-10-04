'use client'

import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/i18n'
import styles from './Process.module.css'

type Step = Dictionary['process']['steps'][number]

/**
 * Vertical timeline. As you scroll, the line fills and the step crossing the
 * middle of the screen becomes active; its number is echoed large in the
 * sticky column. Without JavaScript (or with reduced motion) every step is
 * simply shown in full.
 */
export function ProcessTimeline({
  steps,
  deliverablesLabel,
  heading: Heading = 'h3',
}: {
  steps: Step[]
  deliverablesLabel: string
  heading?: 'h2' | 'h3'
}) {
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const list = listRef.current
    if (!list || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setLive(true)
    let frame = 0
    const update = () => {
      const r = list.getBoundingClientRect()
      const mid = window.innerHeight * 0.55
      const progress = Math.max(0, Math.min(1, (mid - r.top) / r.height))
      list.style.setProperty('--progress', progress.toFixed(4))
      const items = Array.from(list.children) as HTMLElement[]
      let current = 0
      items.forEach((el, i) => {
        if (el.getBoundingClientRect().top < mid) current = i
      })
      setActive(current)
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className={styles.layout} data-live={live || undefined}>
      <div className={styles.counter} aria-hidden="true">
        <span className={styles.counterWindow}>
          <span className={styles.counterTrack} style={{ translate: `0 ${(-active * 100) / steps.length}%` }}>
            {steps.map((_, i) => (
              <span key={i}>{String(i + 1).padStart(2, '0')}</span>
            ))}
          </span>
        </span>
        <span className={styles.counterTotal}>/ {String(steps.length).padStart(2, '0')}</span>
      </div>

      <ol ref={listRef} className={styles.timeline}>
        {steps.map((step, i) => (
          <li key={step.id} className={styles.step} data-state={i < active ? 'done' : i === active ? 'active' : 'next'}>
            <span className={styles.marker} aria-hidden="true" />
            <span className={styles.duration}>{step.duration}</span>
            <Heading className={styles.title}>{step.title}</Heading>
            <p className={styles.description}>{step.description}</p>
            <p className={styles.deliverables}>
              <span>{deliverablesLabel}</span>
              {step.deliverables.join(' · ')}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
