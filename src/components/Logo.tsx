import { BrandMark } from './BrandMark'

/** Header/footer lockup: the F mark with the stacked FUSION / SITES wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`brand-logo ${className ?? ''}`}>
      <BrandMark size={34} />
      <span className="brand-logo-text">
        <span className="brand-logo-name">Fusion</span>
        <span className="brand-logo-sub">Sites</span>
      </span>
    </span>
  )
}
