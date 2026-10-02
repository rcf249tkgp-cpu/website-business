import { expect, test } from '@playwright/test'

const titles = {
  fi: 'lisää asiakkaita.',
  sv: 'fler kunder.',
  en: 'more customers.',
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

  test('opens in Swedish for Swedish-language browsers', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'sv-FI' })
    const page = await context.newPage()
    await page.goto('/')
    await expect(page).toHaveURL(/\/sv$/)
    await context.close()
  })

  test('opens in Finnish for everyone else, English included', async ({ browser }) => {
    for (const locale of ['fi-FI', 'en-US', 'de-DE']) {
      const context = await browser.newContext({ locale })
      const page = await context.newPage()
      await page.goto('/')
      await expect(page).toHaveURL(/\/fi$/)
      await context.close()
    }
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
    const english = [
      'Services',
      'Design studies',
      'Our approach',
      'Our process',
      'Common questions',
      'Start a project',
      'Continue',
      'Desktop',
    ]
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
  test('each menu item opens its own page', async ({ page }) => {
    for (const [lang, pages] of [
      [
        'en',
        [
          ['Services', 'services', 'What we do.'],
          ['Work', 'work', 'How we think, shown in design.'],
          ['Approach', 'approach', 'Straightforward from start to finish.'],
          ['Process', 'process', 'Five steps from first call to launch.'],
          ['Contact', 'contact', 'Let’s build something remarkable.'],
        ],
      ],
      [
        'fi',
        [
          ['Palvelut', 'services', 'Mitä teemme.'],
          ['Toimintatapa', 'approach', 'Suoraviivaisesti alusta loppuun.'],
        ],
      ],
    ] as const) {
      await page.goto(`/${lang}`)
      for (const [label, slug, heading] of pages) {
        const nav = page.getByRole('navigation', { name: /Main navigation|Päänavigaatio/ }).first()
        await nav.getByRole('link', { name: label, exact: true }).click()
        await expect(page).toHaveURL(new RegExp(`/${lang}/${slug}$`))
        await expect(page.locator('h1')).toHaveText(heading)
        await expect(nav.getByRole('link', { name: label, exact: true })).toHaveAttribute('aria-current', 'page')
        // Every page ends with a way to start a project.
        await expect(
          page.locator('#contact').getByRole('link', { name: /Start a project|Aloita projekti/ }),
        ).toBeVisible()
      }
    }
  })

  test('each page works in every language', async ({ page }) => {
    for (const slug of ['services', 'work', 'approach', 'process', 'contact']) {
      for (const lang of ['en', 'sv', 'fi']) {
        const res = await page.goto(`/${lang}/${slug}`)
        expect(res?.status(), `/${lang}/${slug}`).toBe(200)
        await expect(page.locator('h1')).toHaveCount(1)
      }
    }
    await page.goto('/sv/work')
    await page.locator('header').getByRole('button', { name: 'Suomi' }).click()
    await expect(page).toHaveURL(/\/fi\/work$/)
  })

  test('hero CTAs lead to the project form and the process', async ({ page }) => {
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
    await page.getByRole('link', { name: 'How we work' }).click()
    await expect(page).toHaveURL(/\/en\/process$/)
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
    await expect(page).toHaveURL(/\/en\/process$/)
    await expect(page.locator('h1')).toHaveText('Five steps from first call to launch.')
    await expect(menu.getByRole('link', { name: 'Process' })).toBeHidden()

    // All three languages are visible in the header without opening the menu.
    for (const name of ['English', 'Svenska', 'Suomi']) {
      await expect(page.locator('header').getByRole('button', { name })).toBeVisible()
    }
    await page.locator('header').getByRole('button', { name: 'Suomi' }).click()
    // Switching language keeps you on the same page.
    await expect(page).toHaveURL(/\/fi\/process$/)
    await expect(page.locator('h1')).toHaveText('Viisi vaihetta ensimmäisestä puhelusta julkaisuun.')
  })

  test('has no horizontal overflow on small screens @mobile', async ({ page }) => {
    for (const lang of ['en', 'sv', 'fi']) {
      await page.goto(`/${lang}`)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      expect(overflow, `/${lang}`).toBeLessThanOrEqual(0)
    }
  })
})

test.describe('interactive details', () => {
  test('hero preview switches between screen sizes', async ({ page }) => {
    await page.goto('/en')
    const controls = page.getByRole('group', { name: 'Preview size' })
    const browser = page.locator('[data-device]')
    await expect(browser).toHaveAttribute('data-device', 'desktop')
    const wide = (await browser.boundingBox())!.width
    await controls.getByRole('button', { name: 'Mobile' }).click()
    await expect(browser).toHaveAttribute('data-device', 'mobile')
    await expect(controls.getByRole('button', { name: 'Mobile' })).toHaveAttribute('aria-pressed', 'true')
    await expect.poll(async () => (await browser.boundingBox())!.width).toBeLessThan(wide * 0.6)
  })

  test('redesign comparison can be dragged with the keyboard', async ({ page }) => {
    await page.goto('/en')
    const slider = page.getByRole('slider', { name: 'Compare the old and new design' })
    await slider.focus()
    await page.keyboard.press('End')
    await expect(slider).toHaveValue('100')
  })

  test('FAQ answers open and close', async ({ page }) => {
    await page.goto('/sv#faq')
    const item = page.locator('#faq details').nth(1)
    await expect(item).not.toHaveAttribute('open', '')
    await item.locator('summary').click()
    await expect(item).toHaveAttribute('open', '')
    await expect(item).toContainText('en till två veckor')
  })

  test('makes no invented claims about clients or results', async ({ page }) => {
    for (const lang of ['en', 'sv', 'fi']) {
      await page.goto(`/${lang}`)
      const text = await page.locator('main').innerText()
      expect(text).not.toMatch(/99\.9%|12k\+|testimonial|trusted by/i)
    }
    await page.goto('/en')
    await expect(page.getByText('They are not client projects.')).toBeVisible()
  })
})

test.describe('seo', () => {
  test('serves sitemap, robots and structured data', async ({ page, request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text()
    expect(sitemap).toContain('/sv/privacy')
    expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap:')
    await page.goto('/en')
    const types = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) => els.map((el) => JSON.parse(el.textContent ?? '{}')['@type']))
    expect(types).toEqual(expect.arrayContaining(['ProfessionalService', 'FAQPage']))
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /websites/)
  })
})
