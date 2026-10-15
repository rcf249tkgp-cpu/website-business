import staticAssetsCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

/**
 * OpenNext's read-only static-assets cache, minus the error log on writes.
 *
 * Every page is prerendered at build time and served from Workers static assets. Next.js
 * still tries to store a per-request route cache entry; the stock cache logs each of those
 * attempts as an error, which would fill the Worker logs on every page view. Writes are
 * simply ignored here; reads are unchanged.
 */
const cache = Object.create(staticAssetsCache) as typeof staticAssetsCache
cache.set = async () => {}
cache.delete = async () => {}

export default cache
