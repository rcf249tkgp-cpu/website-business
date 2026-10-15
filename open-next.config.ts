// Cloudflare (Workers + static assets) build config for OpenNext.
// Every page is prerendered and nothing uses ISR, so pages are served straight from the
// static assets: no R2 bucket or KV namespace is needed.
import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from './cloudflare/static-assets-cache'

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
