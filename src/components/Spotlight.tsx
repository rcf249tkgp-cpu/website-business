'use client'

import { useEffect } from 'react'

/**
 * Feeds the cursor position into `.card` elements as CSS variables so their
 * border and background can glow where the pointer is. One listener for the
 * whole page; no re-renders.
 */
export function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const card = (event.target as Element | null)?.closest?.<HTMLElement>('.card')
        if (!card) return
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
        card.style.setProperty('--my', `${event.clientY - rect.top}px`)
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
