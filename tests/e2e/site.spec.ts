import { expect, test } from '@playwright/test'

const titles = {
  en: 'impossible to ignore.',
  sv: 'omöjligt att ignorera.',
  fi: 'on mahdoton ohittaa.',
}

test.describe('languages', () => {
  for (const [lang, highlight] of Object.entries(titles)) {
    test(`renders /${lang} in the right language`, async ({ page }) => {
      await page.goto(`/${lang}`)
      await expect(page.locator('h1')).toContainText(highlight)
      expect(await page.locator('html').getAttribute('lang')).toMatch(new RegExp(`^${lang}`))
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(4)
    })
  }

  test('redirects / using Accept-Language', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'fi-FI' })
    const page = await context.newPage()
    await page.goto('/')
    await expect(page).toHaveURL(/\/fi$/)
    await context.close()
  })

  test('falls back to English for unsupported languages', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'de-DE' })
    const page = await context.newPage()
    await page.goto('/')
    await expect(page).toHaveURL(/\/en$/)
    await context.close()
  })

  test('switcher changes language, keeps the page and remembers the choice', async ({ page }) => {
    await page.goto('/en/privacy')
    const header = page.locator('header')
    await expect(header.getByRole('button', { name: 'English' })).toHaveAttribute('aria-pressed', 'true')
    await header.getByRole('button', { name: 'Svenska' }).click()
    await expect(page).toHaveURL(/\/sv\/privacy$/)
    await expect(page.locator('h1')).toHaveText('Integritetspolicy')
    await expect(page.locator('html')).toHaveAttribute('lang', 'sv-SE')

    // The choice is remembered when coming back to the root URL.
    await page.goto('/')
    await expect(page).toHaveURL(/\/sv$/)
    await expect(page.getByRole('link', { name: 'Starta ett projekt' }).first()).toBeVisible()
  })

  test('language can also be switched from the footer', async ({ page }) => {
    await page.goto('/sv')
    await page.locator('footer').getByRole('button', { name: 'Suomi' }).click()
    await expect(page).toHaveURL(/\/fi$/)
    await expect(page.locator('footer').getByRole('button', { name: 'Suomi' })).toHaveAttribute('aria-pressed', 'true')
  })

  test('every visible string in the main sections is translated', async ({ page }) => {
    const english = ['Services', 'Selected work', 'Why choose us', 'Our process', 'Start a project', 'Continue']
    for (const path of ['/sv', '/fi', '/sv/start', '/fi/start']) {
      const lang = path.slice(1, 3)
      await page.goto(path)
      // Ignore decorative content (e.g. the code snippet in the hero illustration).
      const text = await page.locator('main').evaluate((main) => {
        const clone = main.cloneNode(true) as HTMLElement
        clone.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove())
        return clone.textContent ?? ''
      })
      for (const phrase of english) expect(text, `"${phrase}" on /${lang}`).not.toContain(phrase)
    }
  })
})

test.describe('navigation', () => {
  test('header links scroll to their sections', async ({ page }) => {
    await page.goto('/en')
    const nav = page.getByRole('navigation', { name: 'Main navigation' }).first()
    for (const [label, id] of [
      ['Services', 'services'],
      ['Work', 'work'],
      ['Why us', 'why'],
      ['Process', 'process'],
      ['Contact', 'contact'],
    ]) {
      await nav.getByRole('link', { name: label, exact: true }).click()
      await expect(page).toHaveURL(new RegExp(`#${id}$`))
      await expect(page.locator(`#${id}`)).toBeInViewport()
    }
  })

  test('hero CTAs lead to contact and work', async ({ page }) => {
    await page.goto('/en')
    await page.locator('main').getByRole('link', { name: 'Start a project' }).first().click()
    await expect(page).toHaveURL(/\/en\/start$/)
    await expect(page.locator('h1')).toHaveText('Let’s build something remarkable.')
    await expect(page.locator('#contact form')).toBeVisible()

    // The header button and the homepage contact section lead there too.
    await page.goto('/sv')
    await page.locator('header').getByRole('link', { name: 'Starta ett projekt' }).click()
    await expect(page).toHaveURL(/\/sv\/start$/)
    await page.goto('/fi#contact')
    await page.locator('#contact').getByRole('link', { name: 'Aloita projekti' }).click()
    await expect(page).toHaveURL(/\/fi\/start$/)
    await expect(page.locator('#contact form')).toBeVisible()
    await page.goto('/en')
    await page.getByRole('link', { name: 'See our work' }).click()
    await expect(page.locator('#work')).toBeInViewport()
  })

  test('footer legal links work in every language', async ({ page }) => {
    for (const [lang, privacy, terms] of [
      ['en', 'Privacy policy', 'Terms of service'],
      ['sv', 'Integritetspolicy', 'Användarvillkor'],
      ['fi', 'Tietosuojaseloste', 'Käyttöehdot'],
    ]) {
      await page.goto(`/${lang}`)
      await page.locator('footer').getByRole('link', { name: privacy }).click()
      await expect(page.locator('h1')).toHaveText(privacy)
      await page.locator('footer').getByRole('link', { name: terms }).click()
      await expect(page.locator('h1')).toHaveText(terms)
    }
  })

  test('unknown pages show a localized 404', async ({ page }) => {
    const res = await page.goto('/fi/does-not-exist')
    expect(res?.status()).toBe(404)
    await expect(page.locator('h1')).toHaveText('Sivua ei löytynyt')
  })

  test('mobile menu opens, navigates and switches language @mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile only')
    await page.goto('/en')
    await page.getByRole('button', { name: 'Open menu' }).click()
    const menu = page.locator('#mobile-menu')
    await expect(menu.getByRole('link', { name: 'Process' })).toBeVisible()
    await menu.getByRole('link', { name: 'Process' }).click()
    await expect(page.locator('#process')).toBeInViewport()
    await expect(menu.getByRole('link', { name: 'Process' })).toBeHidden()

    // All three languages are visible in the header without opening the menu.
    for (const name of ['English', 'Svenska', 'Suomi']) {
      await expect(page.locator('header').getByRole('button', { name })).toBeVisible()
    }
    await page.locator('header').getByRole('button', { name: 'Suomi' }).click()
    await expect(page).toHaveURL(/\/fi/)
    await expect(page.locator('h1')).toContainText('on mahdoton ohittaa.')
  })

  test('has no horizontal overflow on small screens @mobile', async ({ page }) => {
    for (const lang of ['en', 'sv', 'fi']) {
      await page.goto(`/${lang}`)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      expect(overflow, `/${lang}`).toBeLessThanOrEqual(0)
    }
  })
})

test.describe('seo', () => {
  test('serves sitemap, robots and structured data', async ({ page, request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text()
    expect(sitemap).toContain('/sv/privacy')
    expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap:')
    await page.goto('/en')
    const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}')
    expect(ld['@type']).toBe('ProfessionalService')
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /websites/)
  })
})
