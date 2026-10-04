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
  // The only preloaded face: it renders the hero headline (the LCP element).
  variable: '--font-michroma',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export const inter = localFont({
  src: './inter-latin.woff2',
  weight: '100 900',
  display: 'swap',
  preload: false,
  variable: '--font-inter',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
})

/** Small technical labels (numbers, captions). */
export const geistMono = localFont({
  src: './geist-mono.woff2',
  weight: '100 900',
  display: 'swap',
  preload: false,
  variable: '--font-geist-mono',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
})

/*
 * Typefaces for the example client sites (before/after and concept work).
 * Not preloaded: they are only fetched when those previews render.
 */
export const fraunces = localFont({
  src: './fraunces-latin.woff2',
  weight: '100 900',
  display: 'swap',
  preload: false,
  variable: '--font-fraunces',
  fallback: ['Georgia', 'serif'],
})

export const instrumentSerif = localFont({
  src: [
    { path: './instrument-serif-latin.woff2', style: 'normal', weight: '400' },
    { path: './instrument-serif-latin-italic.woff2', style: 'italic', weight: '400' },
  ],
  display: 'swap',
  preload: false,
  variable: '--font-instrument-serif',
  fallback: ['Georgia', 'serif'],
})

export const archivo = localFont({
  src: './archivo-latin.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  preload: false,
  variable: '--font-archivo',
  fallback: ['Arial Narrow', 'Arial', 'sans-serif'],
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
})
