'use client'

import { useEffect, useRef } from 'react'
import { F_CURVE, F_LOWER, F_UPPER } from './BrandMark'
import styles from './HeroMark.module.css'

/**
 * The hero's large chrome "F", drawn like a machined part on a technical drawing.
 * - A band of light sweeps across the metal. With a mouse it follows the cursor;
 *   on touch screens (or before the cursor moves) it drifts by itself.
 * - The two ribbons fuse together on load and ease apart as you scroll away.
 * All motion is CSS; this component only feeds pointer coordinates in as variables.
 */
export function HeroMark() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const area = el.closest('section') ?? document.body
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1))
        const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1))
        el.dataset.live = ''
        el.style.setProperty('--sx', nx.toFixed(3))
        el.style.setProperty('--tilt-x', `${(-ny * 7).toFixed(2)}deg`)
        el.style.setProperty('--tilt-y', `${(nx * 10).toFixed(2)}deg`)
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      delete el.dataset.live
      el.style.removeProperty('--sx')
      el.style.removeProperty('--tilt-x')
      el.style.removeProperty('--tilt-y')
    }
    area.addEventListener('pointermove', onMove as EventListener)
    area.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('pointermove', onMove as EventListener)
      area.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className={styles.mark} ref={ref} aria-hidden="true">
      {/* Technical-drawing backdrop: construction circles, axes and dimension marks. */}
      <svg className={styles.drawing} viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="132" strokeDasharray="2 6" />
        <path d="M200 0v400M0 200h400" strokeDasharray="1 5" />
        <path d="M18 120h22M18 118v4M40 118v4M360 288h22M360 286v4M382 286v4" />
        <text x="18" y="110">
          R 190
        </text>
        <text x="338" y="306">
          F—01
        </text>
        <text x="206" y="392">
          60.19° N · 24.97° E
        </text>
      </svg>

      <div className={styles.object}>
        <svg className={styles.f} viewBox="0 0 64 64">
          <defs>
            <linearGradient id="hm-chrome" x1="0" y1="0.15" x2="1" y2="0.85">
              <stop offset="0" stopColor="#3b4659" />
              <stop offset="0.34" stopColor="#8994a8" />
              <stop offset="0.52" stopColor="#dfe5ee" />
              <stop offset="0.66" stopColor="#9aa5b8" />
              <stop offset="0.86" stopColor="#f3f6fb" />
              <stop offset="1" stopColor="#c3ccda" />
            </linearGradient>
            <linearGradient id="hm-chrome-low" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2a3344" />
              <stop offset="0.45" stopColor="#7f8a9e" />
              <stop offset="0.75" stopColor="#d9e0ea" />
              <stop offset="1" stopColor="#8d98ab" />
            </linearGradient>
            <linearGradient id="hm-blue" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0" stopColor="#c6efff" />
              <stop offset="0.18" stopColor="#38c4ff" />
              <stop offset="0.5" stopColor="#0a6dff" />
              <stop offset="0.8" stopColor="#0a3a9e" />
              <stop offset="1" stopColor="#061633" />
            </linearGradient>
            <linearGradient id="hm-sheen" x1="0" y1="0" x2="1" y2="0" gradientTransform="rotate(18 .5 .5)">
              <stop offset="0.38" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="0.62" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <clipPath id="hm-clip">
              <path d={F_UPPER} />
              <path d={F_LOWER} />
            </clipPath>
            <filter id="hm-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.4" />
            </filter>
          </defs>

          <g className={styles.upper}>
            <g className={styles.drift}>
              <path d={F_UPPER} fill="url(#hm-chrome)" />
              <path className={styles.glow} d={F_CURVE} fill="#1a7dff" filter="url(#hm-glow)" />
              <path d={F_CURVE} fill="url(#hm-blue)" />
            </g>
          </g>
          <g className={styles.lower}>
            <g className={styles.driftLow}>
              <path d={F_LOWER} fill="url(#hm-chrome-low)" />
            </g>
          </g>
          {/* Light travelling across the metal, clipped to the letter. */}
          <g clipPath="url(#hm-clip)" className={styles.sheenWrap}>
            <rect className={styles.sheen} x="-32" y="0" width="128" height="64" fill="url(#hm-sheen)" />
          </g>
          {/* Fine edge highlight along the top of each ribbon. */}
          <path className={styles.edge} d="M33 6h29" />
          <path className={styles.edge} d="M28 33h27" />
        </svg>
        <span className={styles.reflection} />
      </div>
    </div>
  )
}
