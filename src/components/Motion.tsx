'use client'

import { animate, inView, stagger } from 'motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Shared motion tokens: short, soft and the same everywhere. */
const EASE = [0.16, 1, 0.3, 1] as const
const REVEAL = { duration: 0.6, ease: EASE }
const RISE = 14
/** Reveal when an element is 8% into the viewport, or already above it (fast scrolls and jumps can skip past). */
const MARGIN = '100000px 0px -8% 0px'

/**
 * All interface motion in one place, powered by Motion:
 * - the hero entrance (`[data-hero]` parts, in order),
 * - one-shot section reveals: each `.reveal` element fades up a few pixels the
 *   first time it scrolls into view; `[data-stagger]` lists reveal their children in turn,
 * - the pointer position for `.card` spotlights and `[data-glow]` areas.
 * The hidden starting states live in CSS under `html.motion`, a class the layout
 * adds before first paint only when the visitor has not asked for reduced motion.
 * Without it (or without JavaScript) everything is simply visible and still.
 */
export function Motion() {
  const pathname = usePathname()

  // Hero entrance: the mark settles in, then the headline and the rest follow.
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion')) return
    const part = (name: string) => document.querySelectorAll<HTMLElement>(`[data-hero="${name}"]:not([data-shown])`)
    const mark = part('mark')
    const lines = part('line')
    const rest = part('rest')
    if (!mark.length && !lines.length && !rest.length) return
    const all = [...mark, ...lines, ...rest]
    const controls = [
      animate(mark, { opacity: [0, 1], scale: [0.94, 1] }, { duration: 1.1, ease: EASE }),
      animate(lines, { opacity: [0, 1], y: [22, 0] }, { duration: 0.8, ease: EASE, delay: stagger(0.08, { startDelay: 0.12 }) }),
      animate(rest, { opacity: [0, 1], y: [RISE, 0] }, { duration: 0.7, ease: EASE, delay: stagger(0.07, { startDelay: 0.4 }) }),
    ]
    Promise.all(controls.map((c) => c.finished)).then(() => all.forEach(settle))
    return () => {
      controls.forEach((c) => c.complete())
      all.forEach(settle)
    }
  }, [pathname])

  // Scroll reveals. Re-scans after every navigation so new pages animate too.
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion')) return
    const stops: (() => void)[] = []
    // Plays once: the observer stops as soon as the element has been revealed.
    const once = (el: HTMLElement, play: () => void) => {
      const stop = inView(
        el,
        () => {
          stop()
          play()
        },
        { margin: MARGIN },
      )
      stops.push(stop)
    }

    for (const el of document.querySelectorAll<HTMLElement>('.reveal:not([data-shown])')) {
      once(el, () => {
        animate(el, { opacity: [0, 1], y: [RISE, 0] }, REVEAL).finished.then(() => settle(el))
      })
    }

    for (const list of document.querySelectorAll<HTMLElement>('[data-stagger]:not([data-shown])')) {
      once(list, () => {
        const items = Array.from(list.children) as HTMLElement[]
        settle(list)
        animate(items, { opacity: [0, 1], y: [RISE, 0] }, { ...REVEAL, delay: stagger(0.07) }).finished.then(() =>
          items.forEach(settle),
        )
      })
    }

    return () => stops.forEach((stop) => stop())
  }, [pathname])

  // Pointer position for card spotlights and glow areas (mouse only).
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const target = event.target as Element | null
        for (const [selector, x, y] of [
          ['.card', '--mx', '--my'],
          ['[data-glow]', '--gx', '--gy'],
        ] as const) {
          const el = target?.closest?.<HTMLElement>(selector)
          if (!el) continue
          const r = el.getBoundingClientRect()
          el.style.setProperty(x, `${event.clientX - r.left}px`)
          el.style.setProperty(y, `${event.clientY - r.top}px`)
        }
      })
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
    }
  }, [])

  return null
}

/** Marks an element as shown and hands its styling back to CSS (so hover transforms work). */
function settle(el: HTMLElement) {
  el.setAttribute('data-shown', '')
  el.style.removeProperty('opacity')
  el.style.removeProperty('transform')
}
