import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

for (const path of [
  '/en',
  '/sv',
  '/fi',
  '/en/services',
  '/sv/work',
  '/fi/approach',
  '/en/process',
  '/en/contact',
  '/en/start',
  '/en/privacy',
]) {
  test(`has no detectable accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path)
    await page.waitForTimeout(2500) // let entrance animations settle before measuring contrast
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
    const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)
    expect(summary).toEqual([])
  })
}

test('form steps are accessible', async ({ page }) => {
  await page.goto('/en/start')
  await page.locator('#contact').getByRole('button', { name: 'Continue' }).click()
  const results = await new AxeBuilder({ page }).include('#contact').analyze()
  expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)).toEqual([])
})
