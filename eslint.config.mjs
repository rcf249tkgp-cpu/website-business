import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const config = [
  ...nextVitals,
  ...nextTs,
  // Images are served as-is (Cloudflare, `images.unoptimized`) with hand-written srcsets.
  { rules: { '@next/next/no-img-element': 'off' } },
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'playwright-report/**', 'test-results/**', '.open-next/**', '.wrangler/**', 'cloudflare-env.d.ts'] },
]

export default config
