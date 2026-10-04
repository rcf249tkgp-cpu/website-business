import localFont from 'next/font/local'

/**
 * Brand typefaces, self-hosted (no requests to Google): Michroma for headings
 * and the wordmark, Inter for body text. Both are SIL Open Font License; the
 * files come from the @fontsource packages (Latin subset, covers å, ä, ö).
 */
export const michroma = localFont({
  src: './michroma-latin.woff2',
  weight: '400',
  display: 'swap',
  variable: '--font-michroma',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const inter = localFont({
  src: './inter-latin.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
})
