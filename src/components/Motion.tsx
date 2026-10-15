'use client'

import { animate, inView, stagger } from 'motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Shared motion tokens: short and soft; shorter and smaller on phones. */
const EASE = [0.16, 1, 0.3, 1] as const
const small = () => window.matchMedia('(max-width: 639px)').matches
/** Reveal when an element is 8% into the viewport, or already above it (fast scrolls and jumps can skip past). */
const MARGIN = '100000px 0px -8% 0px'

/**
 * Interface motion, powered by Motion (the hero entrance is pure CSS, see Hero.module.css):
 * - one-shot section reveals: each `.reveal` element fades up a few pixels the
 *   first time it scrolls into view; `[data-stagger]` lists reveal their children in turn,
 * - the pointer position for `.card` spotlights and `[data-glow]` areas.
 * The hidden starting states live in CSS under `html.motion`, a class the layout
 * adds before first paint only when the visitor has not asked for reduced motion.
 * Without it (or without JavaScript) everything is simply visible and still.
 */
export function Motion() {
  const pathname = usePathname()

  // Scroll reveals. Re-scans after every navigation so new pages animate too.
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion')) return
    const stops: (() => void)[] = []
    const RISE = small() ? 10 : 14
    const REVEAL = { duration: small() ? 0.35 : 0.45, ease: EASE }
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
        animate(items, { opacity: [0, 1], y: [RISE, 0] }, { ...REVEAL, delay: stagger(small() ? 0.05 : 0.06) }).finished.then(() =>
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
