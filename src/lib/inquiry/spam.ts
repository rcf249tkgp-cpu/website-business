import 'server-only'

/** Verify a Cloudflare Turnstile token when TURNSTILE_SECRET_KEY is configured. */
export async function verifyTurnstile(token: unknown, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (typeof token !== 'string' || !token) return false
  const body = new URLSearchParams({ secret, response: token })
  if (ip) body.set('remoteip', ip)
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(8_000),
    })
    const json = (await res.json()) as { success?: boolean }
    return json.success === true
  } catch {
    return false
  }
}

const hits = new Map<string, number[]>()

/**
 * Simple in-memory sliding-window rate limit per client IP. Good enough for a
 * single server; on serverless platforms each instance keeps its own window.
 */
export function rateLimited(ip: string): boolean {
  const limit = Number(process.env.INQUIRY_RATE_LIMIT || 5)
  const windowMs = 15 * 60 * 1000
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs)
  if (recent.length >= limit) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5_000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= windowMs)) hits.delete(key)
  }
  return false
}
