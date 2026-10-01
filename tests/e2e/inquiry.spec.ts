import { expect, test, type Page } from '@playwright/test'
import { SMTP_PORT, startMailCatcher } from './smtp'

let catcher: Awaited<ReturnType<typeof startMailCatcher>>

test.beforeAll(async () => {
  catcher = await startMailCatcher(SMTP_PORT)
})

test.afterAll(async () => {
  await catcher.close()
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
    .filter({ hasText: /10[\s,.]000/ })
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
    await page.goto('/fi#contact')
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
    await page.goto('/en#contact')
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
    await page.goto('/sv#contact')
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
    await expect(f.locator('code')).toHaveText(/^NO-\d{6}-[0-9A-F]{6}$/)

    await expect.poll(() => catcher.messages.length).toBe(before + 2)
    const [business, customer] = catcher.messages.slice(before)
    expect(business.to && 'text' in business.to ? business.to.text : '').toContain('inbox@studio.test')
    expect(business.subject).toBe('New project inquiry: Lagom AB (Online store)')
    expect(business.replyTo?.text).toContain('aino@example.fi')
    expect(business.text).toContain('Aino Virtanen')
    expect(business.text).toContain('Payments')
    expect(business.text).toContain('preference only')
    expect(business.text).toContain('Language: Svenska')

    expect(customer.to && 'text' in customer.to ? customer.to.text : '').toContain('aino@example.fi')
    expect(customer.subject).toBe('Vi har tagit emot din projektförfrågan — Novaform')
    expect(customer.text).toContain('Hej Aino,')
    expect(customer.text).toContain('inte en bekräftad bokning')

    // The confirmation survives a language switch, then the form can be reset.
    await page.locator('header').getByRole('button', { name: 'English' }).click()
    await expect(page).toHaveURL(/\/en/)
    await expect(form(page).getByText('Your meeting is not booked yet')).toBeVisible()
    await form(page).getByRole('button', { name: 'Send another request' }).click()
    await expect(form(page).getByText('Step 1 of 4')).toBeVisible()
  })

  test('keeps unsent answers when switching language', async ({ page }) => {
    await page.goto('/en#contact')
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
      await page.goto('/en#contact')
      await fillAllSteps(page, en)
      await form(page).getByRole('button', { name: en.submit }).click()
      const alert = form(page).getByRole('alert')
      await expect(alert).toContainText(text)
      await expect(alert.getByRole('link', { name: /hello@novaform\.studio/ })).toHaveAttribute(
        'href',
        'mailto:hello@novaform.studio',
      )
      await expect(form(page).getByRole('button', { name: 'Try again' })).toBeEnabled()
      await expect(form(page).getByText('Thank you')).toHaveCount(0)
    })
  }

  test('handles network failures', async ({ page }) => {
    await page.route('**/api/inquiry', (route) => route.abort('internetdisconnected'))
    await page.goto('/en#contact')
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
