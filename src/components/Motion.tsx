'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * All interface motion in one place, driven by CSS. This component only:
 * - marks `.reveal` / `[data-split]` elements with `data-inview` once they scroll
 *   into view (one-shot, with a small stagger between siblings),
 * - feeds the pointer position to `.card` spotlights and `[data-glow]` areas,
 * - nudges `[data-magnetic]` buttons toward the cursor.
 * Nothing runs when the visitor prefers reduced motion (see the `motion` class in the layout).
 */
export function Motion() {
  const pathname = usePathname()

  // Reveal on scroll. Re-scans after every navigation so new pages animate too.
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion')) return
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal, [data-split]')).filter(
      (el) => !el.hasAttribute('data-inview'),
    )
    for (const el of targets) {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains('reveal'))
      const index = siblings.indexOf(el)
      if (index > 0) el.style.setProperty('--stagger', `${Math.min(index, 6) * 90}ms`)
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-inview', '')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  // Pointer effects: card spotlight, area glow, magnetic buttons.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const still = !document.documentElement.classList.contains('motion')
    let frame = 0
    let magnet: HTMLElement | null = null

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const target = event.target as Element | null

        const card = target?.closest?.<HTMLElement>('.card')
        if (card) {
          const r = card.getBoundingClientRect()
          card.style.setProperty('--mx', `${event.clientX - r.left}px`)
          card.style.setProperty('--my', `${event.clientY - r.top}px`)
        }

        const glow = target?.closest?.<HTMLElement>('[data-glow]')
        if (glow) {
          const r = glow.getBoundingClientRect()
          glow.style.setProperty('--gx', `${event.clientX - r.left}px`)
          glow.style.setProperty('--gy', `${event.clientY - r.top}px`)
        }

        if (still) return
        const next = target?.closest?.<HTMLElement>('[data-magnetic]') ?? null
        if (magnet && magnet !== next) magnet.style.translate = ''
        magnet = next
        if (magnet) {
          const r = magnet.getBoundingClientRect()
          const dx = (event.clientX - (r.left + r.width / 2)) / (r.width / 2)
          const dy = (event.clientY - (r.top + r.height / 2)) / (r.height / 2)
          magnet.style.translate = `${(dx * 6).toFixed(1)}px ${(dy * 5).toFixed(1)}px`
        }
      })
    }
    const onLeave = () => {
      if (magnet) magnet.style.translate = ''
      magnet = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return null
}
