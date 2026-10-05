import { expect, test, type Page } from '@playwright/test'
import { SMTP_PORT, startMailCatcher, startWebhookCatcher, WEBHOOK_PORT } from './smtp'

let catcher: Awaited<ReturnType<typeof startMailCatcher>>
let hooks: Awaited<ReturnType<typeof startWebhookCatcher>>

test.beforeAll(async () => {
  catcher = await startMailCatcher(SMTP_PORT)
  hooks = await startWebhookCatcher(WEBHOOK_PORT)
})

test.afterAll(async () => {
  await catcher.close()
  await hooks.close()
})

/** A weekday at least two days ahead, as YYYY-MM-DD. */
function futureWeekday(): string {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() + 3)
  while ([0, 6].includes(d.getUTCDay())) d.setUTCDate(d.getUTCDate() + 1)
  return d.toISOString().slice(0, 10)
}

const form = (page: Page) => page.locator('#contact')

async function fillAllSteps(page: Page, labels: Record<string, string>, company = 'Acme Oy') {
  const f = form(page)
  await f.getByText(labels.ecommerce, { exact: true }).click()
  await f.getByText(labels.payments, { exact: true }).click()
  await f.locator('#f-description').fill('We sell handmade ceramics and want a fast, beautiful online store.')
  await f.getByRole('button', { name: labels.next }).click()

  await f
    .locator('label')
    .filter({ hasText: /2[\s,.]500/ })
    .first()
    .click()
  await f.getByText(labels.timeline, { exact: true }).click()
  await f.getByRole('button', { name: labels.next }).click()

  await f.locator('#f-company').fill(company)
  await f.locator('#f-name').fill('Aino Virtanen')
  await f.locator('#f-email').fill('aino@example.fi')
  await f.locator('#f-phone').fill('+358 40 123 4567')
  await f.locator('#f-website').fill('acme.fi')
  await f.getByRole('button', { name: labels.next }).click()

  await f.locator('#f-meetingDate').fill(futureWeekday())
  await f.getByText('10:00', { exact: true }).click()
  await f.locator('#f-consent').check()
}

const en = {
  ecommerce: 'Online store',
  payments: 'Payments',
  timeline: 'Within 1–3 months',
  next: 'Continue',
  submit: 'Send request',
}

test.describe('inquiry form', () => {
  test('validates each step with translated messages', async ({ page }) => {
    await page.goto('/fi/start')
    const f = form(page)
    await f.getByRole('button', { name: 'Jatka' }).click()
    await expect(f.getByText('Valitse vaihtoehto.').first()).toBeVisible()
    await expect(f.getByText('Tämä kenttä on pakollinen.')).toBeVisible()
    await expect(f.getByRole('alert')).toContainText('Korjaa merkityt kentät.')
    // Focus moves to the first invalid field.
    await expect(page.locator('#f-websiteType')).toBeFocused()

    await f.getByText('Verkkokauppa', { exact: true }).click()
    await f.locator('#f-description').fill('liian lyhyt')
    await expect(f.getByText('Kirjoita vähintään 20 merkkiä.')).toBeVisible()
    await f.locator('#f-description').fill('Tämä kuvaus on tarpeeksi pitkä läpäisemään tarkistuksen.')
    await f.getByRole('button', { name: 'Jatka' }).click()
    await expect(f.getByText('Vaihe 2/4')).toBeVisible()

    // Skip ahead to contact details and check email/phone validation.
    await f.locator('label').filter({ hasText: 'En ole vielä varma' }).click()
    await f.getByText('Joustava', { exact: true }).click()
    await f.getByRole('button', { name: 'Jatka' }).click()
    await f.locator('#f-email').fill('not-an-email')
    await f.locator('#f-phone').fill('12')
    await f.locator('#f-website').fill('ei osoite')
    await f.getByRole('button', { name: 'Jatka' }).click()
    await expect(f.getByText('Anna kelvollinen sähköpostiosoite.')).toBeVisible()
    await expect(f.getByText('Anna kelvollinen puhelinnumero.')).toBeVisible()
    await expect(f.getByText('Anna kelvollinen verkko-osoite, esim. esimerkki.fi.')).toBeVisible()

    // Back keeps answers.
    await f.getByRole('button', { name: 'Takaisin' }).click()
    await expect(f.getByText('Vaihe 2/4')).toBeVisible()
  })

  test('meeting step rejects weekends and requires consent', async ({ page }) => {
    await page.goto('/en/start')
    await fillAllSteps(page, en)
    const f = form(page)
    const saturday = new Date()
    saturday.setUTCDate(saturday.getUTCDate() + ((6 - saturday.getUTCDay() + 7) % 7 || 7))
    await f.locator('#f-meetingDate').fill(saturday.toISOString().slice(0, 10))
    await f.locator('#f-consent').uncheck()
    await f.getByRole('button', { name: en.submit }).click()
    await expect(f.getByText('Please choose a weekday.')).toBeVisible()
    await expect(f.getByText('Please accept to continue.')).toBeVisible()
  })

  test('submits, emails the business and the customer, and never claims the meeting is booked', async ({ page }) => {
    const before = catcher.messages.length
    await page.goto('/sv/start')
    await fillAllSteps(
      page,
      {
        ecommerce: 'Webbutik',
        payments: 'Betalningar',
        timeline: 'Inom 1–3 månader',
        next: 'Fortsätt',
      },
      'Lagom AB',
    )
    await page.waitForTimeout(4200) // the API rejects submissions faster than a human could type

    const submit = form(page).getByRole('button', { name: 'Skicka förfrågan' })
    const response = page.waitForResponse('**/api/inquiry')
    await submit.click()
    await expect(form(page).getByRole('button', { name: 'Skickar…' })).toBeVisible()
    expect((await response).status()).toBe(200)

    const f = form(page)
    await expect(f.getByRole('heading', { name: 'Tack — vi har tagit emot din förfrågan!' })).toBeVisible()
    await expect(f.getByText('Ditt möte är inte bokat än')).toBeVisible()
    await expect(f.getByText(/En bekräftelse har skickats till aino@example\.fi/)).toBeVisible()
    await expect(f.locator('code')).toHaveText(/^[A-Z]{2}-\d{6}-[0-9A-F]{6}$/)

    const reference = await f.locator('code').innerText()
    const hook = hooks.payloads.find((p) => p.reference === reference)
    expect(hook, 'webhook received the inquiry').toBeTruthy()
    expect(hook!.locale).toBe('sv')
    expect(String(hook!.text)).toContain('Lagom AB')

    await expect.poll(() => catcher.messages.length).toBe(before + 2)
    const [business, customer] = catcher.messages.slice(before)
    const businessTo = business.to && 'text' in business.to ? business.to.text : ''
    expect(businessTo).toContain('inbox@studio.test')
    expect(businessTo).toContain('second@studio.test')
    expect(business.subject).toBe('New project inquiry: Lagom AB (Online store)')
    expect(business.replyTo?.text).toContain('aino@example.fi')
    expect(business.text).toContain('Aino Virtanen')
    expect(business.text).toContain('Payments')
    expect(business.text).toContain('preference only')
    expect(business.text).toContain('Language: Svenska')

    expect(customer.to && 'text' in customer.to ? customer.to.text : '').toContain('aino@example.fi')
    expect(customer.subject).toBe('Vi har tagit emot din projektförfrågan — Fusion Sites')
    expect(customer.text).toContain('Hej Aino,')
    expect(customer.text).toContain('inte en bekräftad bokning')

    // The confirmation survives a language switch, then the form can be reset.
    await page.locator('header').getByRole('button', { name: 'English' }).click()
    await expect(page).toHaveURL(/\/en/)
    await expect(form(page).getByText('Your meeting is not booked yet')).toBeVisible()
    await form(page).getByRole('button', { name: 'Send another request' }).click()
    await expect(form(page).getByText('Step 1 of 4')).toBeVisible()
  })

  test('autofill never fills the honeypot, and an autofilled submission goes through', async ({ page }) => {
    // A clock one hour ahead of the server must not matter either.
    await page.addInitScript(() => {
      const real = Date.now.bind(Date)
      Date.now = () => real() + 60 * 60 * 1000
    })
    await page.goto('/en/start')
    const f = form(page)

    // The honeypot must not look like anything autofill or a password manager would fill.
    const trap = f.locator('[aria-hidden="true"] input')
    await expect(trap).toHaveCount(1)
    const attrs = await trap.evaluate((el: HTMLInputElement) =>
      [el.name, el.id, el.autocomplete, el.labels?.[0]?.textContent ?? ''].join(' '),
    )
    expect(attrs).not.toMatch(
      /company|organi[sz]ation|name|mail|phone|tel|fax|address|street|city|zip|postal|website|url/i,
    )
    expect(await trap.getAttribute('autocomplete')).toBe('one-time-code')

    await f.getByText(en.ecommerce, { exact: true }).click()
    await f.locator('#f-description').fill('We sell handmade ceramics and want a fast, beautiful online store.')
    await f.getByRole('button', { name: en.next }).click()
    await f
      .locator('label')
      .filter({ hasText: /2[\s,.]500/ })
      .first()
      .click()
    await f.getByText(en.timeline, { exact: true }).click()
    await f.getByRole('button', { name: en.next }).click()

    // Simulate Chrome autofill: instantly fill every input on the page (hidden ones included)
    // whose name, id, label or autocomplete looks like company or contact details.
    const filled = await page.evaluate(() => {
      const values: [RegExp, string][] = [
        [/company|organi[sz]ation|fax/i, 'Autofill Oy'],
        [/e-?mail/i, 'aino@example.fi'],
        [/phone|tel/i, '+358 40 765 4321'],
        [/website|url|homepage/i, 'autofill.fi'],
        [/name/i, 'Aino Virtanen'],
      ]
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!
      const touched: string[] = []
      for (const input of Array.from(
        document.querySelectorAll<HTMLInputElement>(
          'input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input:not([type])',
        ),
      )) {
        const hint = [input.name, input.id, input.autocomplete, input.labels?.[0]?.textContent ?? ''].join(' ')
        const match = values.find(([re]) => re.test(hint))
        if (!match) continue
        setter.call(input, match[1])
        input.dispatchEvent(new Event('input', { bubbles: true }))
        input.dispatchEvent(new Event('change', { bubbles: true }))
        touched.push(input.id)
      }
      return touched
    })
    expect(filled).toEqual(expect.arrayContaining(['f-company', 'f-name', 'f-email', 'f-phone']))
    await expect(trap).toHaveValue('')

    await f.getByRole('button', { name: en.next }).click()
    await f.locator('#f-meetingDate').fill(futureWeekday())
    await f.getByText('10:00', { exact: true }).click()
    await f.locator('#f-consent').check()
    await page.waitForTimeout(3300) // a fast autofill user, just over the minimum fill time

    const response = page.waitForResponse('**/api/inquiry')
    await f.getByRole('button', { name: en.submit }).click()
    const res = await response
    expect(res.status(), JSON.stringify(await res.json())).toBe(200)
    await expect(f.getByRole('heading', { name: /Thank you/ })).toBeVisible()
  })

  test('keeps unsent answers when switching language', async ({ page }) => {
    await page.goto('/en/start')
    const f = form(page)
    await f.getByText('Landing page', { exact: true }).click()
    await f.locator('#f-description').fill('A landing page for our new product launch in November.')
    await page.locator('header').getByRole('button', { name: 'Suomi' }).click()
    await expect(page).toHaveURL(/\/fi/)
    await expect(form(page).getByText('Palautimme lähettämättömät vastauksesi.')).toBeVisible()
    await expect(form(page).locator('#f-description')).toHaveValue(
      'A landing page for our new product launch in November.',
    )
    await expect(form(page).locator('label').filter({ hasText: 'Laskeutumissivu' })).toHaveAttribute(
      'data-checked',
      'true',
    )
  })

  for (const [status, error, text] of [
    [503, 'notConfigured', 'Our inquiry form is temporarily unavailable.'],
    [429, 'rateLimited', 'Too many requests.'],
    [502, 'server', 'Something went wrong on our side.'],
  ] as const) {
    test(`shows a helpful message when the API responds ${status}`, async ({ page }) => {
      await page.route('**/api/inquiry', (route) =>
        route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ ok: false, error }) }),
      )
      await page.goto('/en/start')
      await fillAllSteps(page, en)
      await form(page).getByRole('button', { name: en.submit }).click()
      const alert = form(page).getByRole('alert')
      await expect(alert).toContainText(text)
      await expect(alert.getByRole('link', { name: /martin@atlashaukerud\.fi/ })).toHaveAttribute(
        'href',
        'mailto:martin@atlashaukerud.fi',
      )
      await expect(form(page).getByRole('button', { name: 'Try again' })).toBeEnabled()
      await expect(form(page).getByText('Thank you')).toHaveCount(0)
    })
  }

  test('handles network failures', async ({ page }) => {
    await page.route('**/api/inquiry', (route) => route.abort('internetdisconnected'))
    await page.goto('/en/start')
    await fillAllSteps(page, en)
    await form(page).getByRole('button', { name: en.submit }).click()
    await expect(form(page).getByRole('alert')).toContainText('We couldn’t reach the server.')
  })
})

test.describe('inquiry API', () => {
  const data = {
    websiteType: 'business',
    features: [],
    description: 'A new website for our accounting firm with online booking.',
    budget: 'unsure',
    timeline: 'flexible',
    company: 'Test Oy',
    name: 'Test Person',
    email: 'test@example.fi',
    phone: '+358401234567',
    website: '',
    meetingDate: futureWeekday(),
    meetingTime: '13:00',
    meetingFormat: 'phone',
    consent: true,
  }
  const startedAt = () => Date.now() - 10_000

  test('rejects honeypot submissions', async ({ request }) => {
    const res = await request.post('/api/inquiry', {
      data: { data, locale: 'en', startedAt: startedAt(), hp: 'buy pills' },
    })
    expect(res.status()).toBe(400)
    expect(await res.json()).toEqual({ ok: false, error: 'spam' })
  })

  test('rejects submissions that are too fast', async ({ request }) => {
    const res = await request.post('/api/inquiry', { data: { data, locale: 'en', startedAt: Date.now(), hp: '' } })
    expect((await res.json()).error).toBe('spam')
  })

  test('rejects cross-site posts', async ({ request }) => {
    const res = await request.post('/api/inquiry', {
      headers: { Origin: 'https://evil.example' },
      data: { data, locale: 'en', startedAt: startedAt(), hp: '' },
    })
    expect(res.status()).toBe(403)
  })

  test('re-validates on the server', async ({ request }) => {
    const res = await request.post('/api/inquiry', {
      data: { data: { ...data, email: 'bad', consent: false }, locale: 'en', startedAt: startedAt(), hp: '' },
    })
    expect(res.status()).toBe(422)
    const json = await res.json()
    expect(json.fields.email.code).toBe('email')
    expect(json.fields.consent.code).toBe('consent')
  })

  test('rejects malformed JSON', async ({ request }) => {
    const res = await request.post('/api/inquiry', {
      headers: { 'Content-Type': 'application/json' },
      data: '{not json',
    })
    expect(res.status()).toBe(400)
  })
})
