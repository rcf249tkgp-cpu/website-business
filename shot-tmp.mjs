import { chromium } from 'playwright'
const S = '/tmp/claude-0/-home-user-website-business/38fbfc61-d42d-566b-9c19-950848ea9140/scratchpad/shots'
const [path, ...ws] = process.argv.slice(2)
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
for (const w of ws.map(Number)) {
  const p = await b.newPage({ viewport: { width: w, height: w < 700 ? 844 : 900 }, reducedMotion: process.env.RM ? 'reduce' : 'no-preference' })
  await p.goto('http://localhost:3100' + path, { waitUntil: 'networkidle' })
  await p.waitForTimeout(2200)
  if (process.env.SCROLL) { await p.mouse.wheel(0, Number(process.env.SCROLL)); await p.waitForTimeout(900) }
  if (process.env.MENU) { await p.getByRole('button', { name: /Open menu|Avaa valikko/ }).click(); await p.waitForTimeout(900) }
  await p.screenshot({ path: `${S}/v-${path.replace(/\W/g, '_')}-${w}.png`, fullPage: !!process.env.FULL })
  console.log(w, await p.evaluate(() => document.documentElement.scrollWidth))
  await p.close()
}
await b.close()
