import { useId } from 'react'

/**
 * The Fusion Sites "F": two chrome ribbons with an electric-blue inner curve.
 * Vector redraw of the brand mark, so it stays crisp at any size. Swap for the
 * official artwork (e.g. public/logo.svg) when it is available.
 */
export function BrandMark({ size = 32, glow = true }: { size?: number; glow?: boolean }) {
  const id = useId().replace(/:/g, '')
  const chrome = `chrome-${id}`
  const blue = `blue-${id}`
  const blur = `glow-${id}`
  const curve = 'M14 37V25C14 13 21 6 33 6h9C30 8 22 14.5 20.5 26v7.4Z'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={chrome} x1="0" y1="0.2" x2="1" y2="0.8">
          <stop offset="0" stopColor="#3a4558" />
          <stop offset="0.4" stopColor="#8a95a8" />
          <stop offset="0.75" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={blue} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#9fe0ff" />
          <stop offset="0.35" stopColor="#00b4ff" />
          <stop offset="0.7" stopColor="#0066ff" />
          <stop offset="1" stopColor="#0a1b3d" />
        </linearGradient>
        {glow && (
          <filter id={blur} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        )}
      </defs>
      <path d="M14 37V25C14 13 21 6 33 6h29l-9.5 11.5H35c-6 0-9.5 3.5-9.5 9.5v3.5Z" fill={`url(#${chrome})`} />
      <path d="M14 62V46.5c0-9 5-13.5 14-13.5h27l-9.5 10.5H33c-4 0-7.5 2-7.5 6v1Z" fill={`url(#${chrome})`} />
      {glow && <path d={curve} fill={`url(#${blue})`} filter={`url(#${blur})`} opacity="0.8" />}
      <path d={curve} fill={`url(#${blue})`} />
    </svg>
  )
}
