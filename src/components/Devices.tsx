import styles from './Devices.module.css'

interface Screen {
  src: string
  width: number
  height: number
  /** Which part of the screenshot stays in view when the screen crops it. */
  position?: string
}

/**
 * Real screenshots in a laptop and, optionally, a phone, drawn in CSS so the images stay
 * sharp and swappable. The phone overlaps the laptop's lower right corner.
 */
export function Devices({ desktop, phone, alt }: { desktop: Screen; phone?: Screen; alt: string }) {
  return (
    <div className={styles.devices} data-phone={phone ? '' : undefined}>
      <div className={styles.laptop}>
        <div className={styles.screen}>
          <img
            src={desktop.src}
            alt={alt}
            width={desktop.width}
            height={desktop.height}
            loading="lazy"
            decoding="async"
            style={desktop.position ? { objectPosition: desktop.position } : undefined}
          />
        </div>
        <div className={styles.base} aria-hidden="true" />
      </div>
      {phone && (
        <div className={styles.phone} aria-hidden="true">
          <img src={phone.src} alt="" width={phone.width} height={phone.height} loading="lazy" decoding="async" />
        </div>
      )}
    </div>
  )
}
