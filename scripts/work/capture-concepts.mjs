/**
 * Screenshots each concept site (as shown in the Work page's preview frame) for the
 * homepage work cards, in every language (development only).
 *
 *   npm run build && npm start                 # in another terminal
 *   node scripts/work/capture-concepts.mjs [http://localhost:3000]
 *
 * Writes public/work/concepts/{id}-{lang}.webp (1200 × 750).
 */
import { mkdirSync } from 'node:fs'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')
const outDir = new URL('../../public/work/concepts/', import.meta.url).pathname
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {},
)
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1.5, reducedMotion: 'reduce' })
for (const lang of ['fi', 'sv', 'en']) {
  await page.goto(`${base}/${lang}/work`, { waitUntil: 'networkidle' })
  const items = page.locator('[class*="conceptList"] button')
  const ids = ['ember', 'lumo', 'voltra', 'fjord']
  for (let i = 0; i < ids.length; i++) {
    await items.nth(i).click()
    await page.waitForTimeout(900)
    const viewport = page.locator('[class*="_viewport"]')
    await viewport.evaluate((el) => el.scrollTo(0, 0))
    await page.addStyleTag({ content: '[class*="scrollHint"]{display:none!important}' })
    const png = await viewport.screenshot({ type: 'png' })
    await sharp(png).resize(1200, 750, { fit: 'cover', position: 'top' }).webp({ quality: 78 }).toFile(`${outDir}${ids[i]}-${lang}.webp`)
    console.log(`wrote public/work/concepts/${ids[i]}-${lang}.webp`)
  }
}
await browser.close()
