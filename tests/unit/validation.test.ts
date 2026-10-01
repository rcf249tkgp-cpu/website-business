import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  coerceInquiry,
  earliestMeetingDate,
  emptyInquiry,
  isWeekend,
  normalizeWebsite,
  todayIn,
  validateInquiry,
  type InquiryData,
} from '../../src/lib/inquiry/validation.ts'

// Wednesday 1 October 2026, 10:00 in Helsinki
const NOW = new Date('2026-10-01T07:00:00Z')

const valid: InquiryData = {
  websiteType: 'ecommerce',
  features: ['cms', 'payments'],
  description: 'We sell handmade ceramics and want a modern online store.',
  budget: 'b2',
  timeline: '1-3',
  company: 'Acme Oy',
  name: 'Aino Virtanen',
  email: 'aino@example.fi',
  phone: '+358 40 123 4567',
  website: 'acme.fi',
  meetingDate: '2026-10-06',
  meetingTime: '10:00',
  meetingFormat: 'video',
  consent: true,
}

describe('validateInquiry', () => {
  it('accepts a complete inquiry', () => {
    assert.deepEqual(validateInquiry(valid, undefined, NOW), {})
  })

  it('reports every required field on an empty form', () => {
    const errors = validateInquiry(emptyInquiry, undefined, NOW)
    for (const field of [
      'websiteType',
      'description',
      'budget',
      'timeline',
      'company',
      'name',
      'email',
      'phone',
      'meetingDate',
      'meetingTime',
      'consent',
    ]) {
      assert.ok(errors[field as keyof InquiryData], `expected error for ${field}`)
    }
    assert.equal(errors.website, undefined, 'website is optional')
    assert.equal(errors.features, undefined, 'features are optional')
  })

  it('validates only the requested fields', () => {
    const errors = validateInquiry(emptyInquiry, ['company', 'name'], NOW)
    assert.deepEqual(Object.keys(errors).sort(), ['company', 'name'])
  })

  it('rejects malformed contact details', () => {
    const errors = validateInquiry({ ...valid, email: 'nope@', phone: '12', website: 'not a url' }, undefined, NOW)
    assert.equal(errors.email?.code, 'email')
    assert.equal(errors.phone?.code, 'phone')
    assert.equal(errors.website?.code, 'url')
  })

  it('enforces description length with params', () => {
    const errors = validateInquiry({ ...valid, description: 'too short' }, undefined, NOW)
    assert.deepEqual(errors.description, { code: 'tooShort', params: { min: 20 } })
  })

  it('rejects past dates, today and weekends', () => {
    assert.equal(
      validateInquiry({ ...valid, meetingDate: '2026-09-30' }, ['meetingDate'], NOW).meetingDate?.code,
      'dateInPast',
    )
    assert.equal(
      validateInquiry({ ...valid, meetingDate: '2026-10-01' }, ['meetingDate'], NOW).meetingDate?.code,
      'dateInPast',
    )
    assert.equal(
      validateInquiry({ ...valid, meetingDate: '2026-10-03' }, ['meetingDate'], NOW).meetingDate?.code,
      'weekend',
    )
  })

  it('rejects unknown option values', () => {
    const errors = validateInquiry(
      { ...valid, websiteType: 'spaceship', budget: 'b99', meetingTime: '03:00', features: ['hack'] },
      undefined,
      NOW,
    )
    assert.equal(errors.websiteType?.code, 'selectOne')
    assert.equal(errors.budget?.code, 'selectOne')
    assert.equal(errors.meetingTime?.code, 'selectOne')
    assert.equal(errors.features?.code, 'selectOne')
  })

  it('requires explicit consent', () => {
    assert.equal(validateInquiry({ ...valid, consent: false }, ['consent'], NOW).consent?.code, 'consent')
  })
})

describe('helpers', () => {
  it('normalizes websites', () => {
    assert.equal(normalizeWebsite('acme.fi'), 'https://acme.fi/')
    assert.equal(normalizeWebsite('http://www.acme.fi/shop'), 'http://www.acme.fi/shop')
    assert.equal(normalizeWebsite('javascript:alert(1)'), null)
    assert.equal(normalizeWebsite('localhost'), null)
  })

  it('computes dates in the studio time zone', () => {
    assert.equal(todayIn('Europe/Helsinki', new Date('2026-10-01T22:30:00Z')), '2026-10-02')
    assert.equal(isWeekend('2026-10-03'), true)
    assert.equal(isWeekend('2026-10-05'), false)
  })

  it('picks the next weekday as the earliest meeting date', () => {
    assert.equal(earliestMeetingDate(NOW), '2026-10-02')
    // Friday → next Monday
    assert.equal(earliestMeetingDate(new Date('2026-10-02T07:00:00Z')), '2026-10-05')
  })

  it('coerces untrusted input and strips control characters from single-line fields', () => {
    const data = coerceInquiry({ company: 'Evil\r\nBcc: x@y.z', features: ['cms', 42], consent: 'yes' })
    assert.equal(data.company, 'Evil Bcc: x@y.z')
    assert.deepEqual(data.features, ['cms'])
    assert.equal(data.consent, false)
    assert.equal(data.name, '')
  })
})
