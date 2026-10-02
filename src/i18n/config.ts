/** Order shown in the language switcher: Finnish first, then Swedish, then English. */
export const locales = ['fi', 'sv', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fi'
export const localeCookie = 'NEXT_LOCALE'

export const localeNames: Record<Locale, string> = {
  fi: 'Suomi',
  sv: 'Svenska',
  en: 'English',
}

/** BCP 47 tags used for <html lang>, hreflang and Intl formatting. */
export const localeTags: Record<Locale, string> = {
  fi: 'fi-FI',
  sv: 'sv-SE',
  en: 'en',
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

/** Replace the locale segment of a pathname, e.g. `/sv/privacy` → `/fi/privacy`. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const parts = pathname.split('/')
  if (isLocale(parts[1])) parts[1] = next
  else parts.splice(1, 0, next)
  const joined = parts.join('/')
  return joined.endsWith('/') && joined.length > 1 ? joined.slice(0, -1) : joined
}
