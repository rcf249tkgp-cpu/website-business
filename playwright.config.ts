import { defineConfig, devices } from '@playwright/test'

const PORT = 3200
const SMTP_PORT = 2526 // keep in sync with tests/e2e/smtp.ts

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60_000,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : undefined,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'] }, grep: /@mobile/ },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}/en`,
    timeout: 240_000,
    reuseExistingServer: false,
    env: {
      NEXT_TELEMETRY_DISABLED: '1',
      // Real SMTP delivery to a local capture server started by the tests.
      SMTP_HOST: '127.0.0.1',
      SMTP_PORT: String(SMTP_PORT),
      SMTP_SECURE: 'false',
      MAIL_FROM: 'Fusion Sites <no-reply@studio.test>',
      INQUIRY_TO_EMAIL: 'inbox@studio.test',
      INQUIRY_RATE_LIMIT: '100',
      // Second delivery channel, captured by a local server in the tests.
      INQUIRY_WEBHOOK_URL: 'http://127.0.0.1:2527/hook',
    },
  },
})
