/**
 * Screenshots the homepage for the laptop screen in the hero (development only).
 *
 *   npm run build && npm start            # in another terminal
 *   node scripts/hero/capture-screen.mjs [http://localhost:3000/fi]
 *   python scripts/hero/compose.py         # bake it into hero-*.webp
 *
 * Writes public/hero-screen.webp at the laptop display's aspect ratio (see scene.json).
 * Run it twice after a redesign: the second pass shows the new screen inside the hero too.
 */
import { readFileSync } from 'node:fs'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const url = process.argv[2] ?? 'http://localhost:3000/fi'
const scene = JSON.parse(readFileSync(new URL('../../src/components/hero/scene.json', import.meta.url), 'utf8'))
const { width, height } = scene.screenshot

const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {},
)
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce' })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
const png = await page.screenshot({ type: 'png' })
await browser.close()

await sharp(png).webp({ quality: 84 }).toFile(new URL('../../public/hero-screen.webp', import.meta.url).pathname)
console.log(`wrote public/hero-screen.webp (${width} × ${height}) from ${url}`)
