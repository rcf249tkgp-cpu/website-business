import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { automatedReason, MIN_FILL_MS, originAllowed } from '../../src/lib/inquiry/spam-rules.ts'

const headers = (h: Record<string, string>) => ({ get: (name: string) => h[name.toLowerCase()] ?? null })

describe('automatedReason', () => {
  it('passes a normal human submission', () => {
    assert.equal(automatedReason({ honeypot: '', elapsedMs: 45_000 }), null)
  })
  it('flags a filled honeypot', () => {
    assert.equal(automatedReason({ honeypot: 'spam', elapsedMs: 45_000 }), 'honeypot')
  })
  it('flags instant posts', () => {
    assert.equal(automatedReason({ honeypot: '', elapsedMs: 200 }), 'too fast')
    assert.equal(automatedReason({ honeypot: '' }), 'too fast')
  })
  it('accepts a fast autofill user just above the minimum', () => {
    assert.equal(automatedReason({ honeypot: '', elapsedMs: MIN_FILL_MS }), null)
  })
  it('never rejects a draft restored days later', () => {
    assert.equal(automatedReason({ honeypot: '', elapsedMs: 9 * 24 * 3600 * 1000 }), null)
  })
  it('is not fooled by a device clock changed mid-fill', () => {
    assert.equal(automatedReason({ honeypot: '', elapsedMs: -120_000 }), null)
  })
  it('tolerates client/server clock skew for clients that only send startedAt', () => {
    const now = Date.parse('2026-10-05T10:00:00Z')
    // Client clock 10 minutes ahead of the server.
    assert.equal(automatedReason({ honeypot: '', startedAt: now + 10 * 60_000 }, now), null)
    // Client clock hours behind.
    assert.equal(automatedReason({ honeypot: '', startedAt: now - 5 * 3600_000 }, now), null)
  })
})

describe('originAllowed', () => {
  it('allows same-origin posts on Vercel with a custom domain', () => {
    assert.ok(
      originAllowed(
        headers({ origin: 'https://fusionsites.fi', host: 'x.vercel.app', 'x-forwarded-host': 'fusionsites.fi' }),
      ),
    )
  })
  it('allows www and apex interchangeably, and the configured site URL', () => {
    assert.ok(originAllowed(headers({ origin: 'https://www.fusionsites.fi', host: 'fusionsites.fi' })))
    assert.ok(originAllowed(headers({ origin: 'https://fusionsites.fi', host: 'internal' }), 'https://fusionsites.fi'))
  })
  it('allows a missing or opaque origin', () => {
    assert.ok(originAllowed(headers({ host: 'fusionsites.fi' })))
    assert.ok(originAllowed(headers({ origin: 'null', host: 'fusionsites.fi' })))
  })
  it('handles comma-separated forwarded hosts', () => {
    assert.ok(
      originAllowed(
        headers({ origin: 'https://fusionsites.fi', 'x-forwarded-host': 'fusionsites.fi, proxy.internal' }),
      ),
    )
  })
  it('blocks other websites', () => {
    assert.equal(originAllowed(headers({ origin: 'https://evil.example', host: 'fusionsites.fi' })), false)
  })
})
