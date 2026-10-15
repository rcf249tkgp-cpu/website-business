'use client'

import { useEffect, useRef } from 'react'
import { cssMatrix3d, faceToImage, scene } from './geometry'
import styles from './HeroScene.module.css'

/** The photo with the website baked into the laptop screen (see scripts/hero/compose.py). */
export const HERO_SRCSET = '/hero-800.webp 800w, /hero-1200.webp 1200w, /hero-2000.webp 2000w'
/**
 * The scene is wider than the viewport: ~130% on desktop and ~180% on phones, where about
 * 55% of it (the laptop) is on screen. 160vw keeps phones on the 1200px file (quicker to
 * decode, so the hero paints sooner) while 3× screens still get the 2000px one.
 */
export const HERO_SIZES = '(min-width: 1024px) 130vw, 160vw'

const FACE_TRANSFORM = cssMatrix3d(faceToImage)
const { display: D } = scene

/** Desktop with a mouse and room for the side-by-side hero: the WebGL depth effect. */
const DEPTH_QUERY = '(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

/**
 * The hero photo (a laptop on a rock) as one "scene" in image pixels:
 * - the screenshot of this site is baked into the photo; on desktop a sharp copy is laid
 *   exactly over the laptop's screen (CSS matrix3d),
 * - on desktop, a Three.js depth effect: the laptop and rocks move in front of the
 *   mountains with the mouse and on scroll (loaded lazily, paused off-screen),
 * - on phones, a slow zoom and a gentle scroll parallax (transform only).
 * With reduced motion it is a still image.
 */
export function HeroScene({ className }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  // Scale for the screen overlay: scene pixels per image pixel.
  useEffect(() => {
    const el = sceneRef.current
    if (!el) return
    const update = () => {
      el.style.setProperty('--k', String(el.offsetWidth / scene.image.width))
      el.setAttribute('data-ready', '')
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Motion: WebGL depth on desktop, CSS parallax elsewhere. Nothing with reduced motion.
  useEffect(() => {
    const el = sceneRef.current
    const layer = layerRef.current
    if (!el || !layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      el.toggleAttribute('data-paused', !visible)
    })
    io.observe(el)

    if (window.matchMedia(DEPTH_QUERY).matches) {
      let stop: (() => void) | undefined
      let cancelled = false
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300))
      const handle = idle(() => {
        import('./depth')
          .then(({ startDepth }) => (cancelled ? undefined : startDepth(el, layer)))
          .then((s) => {
            if (cancelled) s?.()
            else stop = s
          })
          .catch(() => {})
      })
      return () => {
        cancelled = true
        if (typeof handle === 'number' && !window.requestIdleCallback) window.clearTimeout(handle)
        stop?.()
        io.disconnect()
      }
    }

    // Phones and tablets: drift up a little as the hero scrolls away.
    el.setAttribute('data-drift', '')
    let frame = 0
    const onScroll = () => {
      if (!visible) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight))
        layer.style.transform = `translate3d(0, ${(progress * -28).toFixed(2)}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <div className={`${styles.media} ${className ?? ''}`} aria-hidden="true">
      <div className={styles.scene} ref={sceneRef}>
        <div className={styles.layer} ref={layerRef}>
          <div className={styles.zoom}>
            {/* eslint-disable-next-line @next/next/no-img-element -- preloaded responsive WebP, sized by CSS */}
            <img
              className={styles.photo}
              src="/hero-2000.webp"
              srcSet={HERO_SRCSET}
              sizes={HERO_SIZES}
              width={scene.image.width}
              height={scene.image.height}
              alt=""
              fetchPriority="high"
            />
            <div
              className={styles.face}
              style={{ width: scene.face.width, height: scene.face.height, ['--face' as string]: FACE_TRANSFORM }}
            >
              <div className={styles.display} style={{ inset: `${D.top}px ${D.right}px ${D.bottom}px ${D.left}px` }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- fixed-size screenshot inside a 3D transform */}
                <img
                  src="/hero-screen.webp"
                  width={scene.screenshot.width}
                  height={scene.screenshot.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
