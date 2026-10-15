'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

/**
 * Link to the current language's homepage. Already on the homepage, it scrolls
 * smoothly back to the very top instead of doing nothing.
 */
export function HomeLink({
  href,
  className,
  label,
  onNavigate,
  children,
}: {
  href: string
  className?: string
  label: string
  onNavigate?: () => void
  children: ReactNode
}) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={className}
      aria-label={label}
      onClick={(e) => {
        onNavigate?.()
        if (pathname !== href || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
        history.replaceState(history.state, '', href)
      }}
    >
      {children}
    </Link>
  )
}
