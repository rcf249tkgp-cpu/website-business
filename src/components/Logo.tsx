import { siteConfig } from '@/config/site'

/** Wordmark + geometric mark. Replace with your own logo if you have one. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span
        aria-hidden="true"
        style={{
          display: 'grid',
          placeItems: 'center',
          width: 28,
          height: 28,
          borderRadius: 9,
          background: 'linear-gradient(135deg, #a594ff, #4f8cff)',
          boxShadow: '0 4px 20px -4px rgba(124, 92, 255, 0.7)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M3 13V3l10 10V3"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.03em' }}>{siteConfig.name}</span>
    </span>
  )
}
