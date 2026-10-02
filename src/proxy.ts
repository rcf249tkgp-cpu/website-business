import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, localeCookie, locales, type Locale } from './i18n/config'

/**
 * Pick the locale for a first visit: a language the visitor chose earlier
 * (cookie) wins; otherwise Swedish for Swedish-language browsers and Finnish
 * for everyone else. English is used only when the visitor picks it.
 */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value
  if (isLocale(saved)) return saved

  const header = request.headers.get('accept-language') ?? ''
  const top = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { lang: tag.toLowerCase().split('-')[0], q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)[0]?.lang
  return top === 'sv' ? 'sv' : defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (hasLocale) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip API routes, Next.js internals and files with an extension (icons, robots.txt, …).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
