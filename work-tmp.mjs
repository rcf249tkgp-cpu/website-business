import { chromium } from 'playwright'
const S = '/tmp/claude-0/-home-user-website-business/38fbfc61-d42d-566b-9c19-950848ea9140/scratchpad/shots'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
for (const w of (process.env.WIDTHS || '1440').split(',').map(Number)) {
  const p = await b.newPage({ viewport: { width: w, height: 1000 }, reducedMotion: 'reduce' })
  await p.goto('http://localhost:3100/' + (process.env.LANG2 || 'en') + '/work', { waitUntil: 'networkidle' })
  await p.locator('article').screenshot({ path: `${S}/case-${w}.png` })
  const items = p.locator('[class*=conceptItem]')
  for (let i = 0; i < 4; i++) {
    await items.nth(i).click(); await p.waitForTimeout(500)
    for (const dev of (w > 640 ? ['Desktop', 'Mobile'] : ['x'])) {
      if (dev !== 'x') { await p.getByRole('button', { name: dev, exact: true }).click(); await p.waitForTimeout(900) }
      await p.locator('[class*=stageCol]').screenshot({ path: `${S}/concept-${i}-${dev}-${w}.png` })
      if (process.env.SCROLLSHOT) {
        await p.locator('[class*=viewport]').evaluate((e) => e.scrollTo(0, 900)); await p.waitForTimeout(300)
        await p.locator('[class*=stageCol]').screenshot({ path: `${S}/concept-${i}-${dev}-${w}-s.png` })
        await p.locator('[class*=viewport]').evaluate((e) => e.scrollTo(0, 0))
      }
    }
    if (w > 640) { await p.getByRole('button', { name: 'Desktop', exact: true }).click(); await p.waitForTimeout(700) }
  }
  await p.close()
}
await b.close()
