/**
 * Spam heuristics for the inquiry form, written so a real visitor is never
 * rejected. Pure functions (no server-only imports) so they can be unit-tested.
 */

/** Minimum time a human needs for the four-step form. Autofill makes people fast, so keep this low. */
export const MIN_FILL_MS = 3_000

export type SpamReason = 'honeypot' | 'too fast' | 'origin'

/**
 * Checks the honeypot and the time spent on the form.
 *
 * Timing uses `elapsedMs`, measured entirely on the visitor's own clock, so a
 * wrong system clock can't make a real person look like a bot. There is no
 * upper limit: a draft restored after a long break is still a real visitor.
 * Older clients that only send `startedAt` are compared against the server
 * clock, but only to catch instant posts; skew can only make them pass.
 */
export function automatedReason(
  input: { honeypot: unknown; elapsedMs?: unknown; startedAt?: unknown },
  now = Date.now(),
): SpamReason | null {
  if (typeof input.honeypot === 'string' && input.honeypot.trim() !== '') return 'honeypot'

  if (typeof input.elapsedMs === 'number' && Number.isFinite(input.elapsedMs)) {
    // Negative means the device clock was changed mid-fill: not evidence of a bot.
    return input.elapsedMs >= 0 && input.elapsedMs < MIN_FILL_MS ? 'too fast' : null
  }
  if (typeof input.startedAt === 'number' && Number.isFinite(input.startedAt)) {
    const elapsed = now - input.startedAt
    // A client clock ahead of the server gives a negative value: not evidence of a bot.
    return elapsed >= 0 && elapsed < MIN_FILL_MS ? 'too fast' : null
  }
  // Neither field: not sent by our form.
  return 'too fast'
}

/** Hosts this request can legitimately come from (Vercel may list several in forwarded headers). */
function hostsOf(headers: { get(name: string): string | null }, siteUrl?: string): Set<string> {
  const hosts = new Set<string>()
  for (const name of ['host', 'x-forwarded-host']) {
    for (const value of (headers.get(name) ?? '').split(',')) {
      const host = value.trim().toLowerCase()
      if (host) hosts.add(host)
    }
  }
  if (siteUrl) {
    try {
      hosts.add(new URL(siteUrl).host.toLowerCase())
    } catch {
      // ignore a malformed NEXT_PUBLIC_SITE_URL
    }
  }
  return hosts
}

/**
 * Blocks posts from other websites. Allowed: no Origin header, the opaque
 * "null" origin (privacy modes, some in-app browsers), or an origin whose host
 * matches Host, X-Forwarded-Host or the configured site URL. `www.` is ignored,
 * so apex and www versions of the domain both work.
 */
export function originAllowed(headers: { get(name: string): string | null }, siteUrl?: string): boolean {
  const origin = headers.get('origin')
  if (!origin || origin === 'null') return true
  let host: string
  try {
    host = new URL(origin).host.toLowerCase()
  } catch {
    return false
  }
  const bare = (h: string) => h.replace(/^www\./, '')
  for (const allowed of hostsOf(headers, siteUrl)) if (bare(allowed) === bare(host)) return true
  return false
}
