import styles from './ImageBand.module.css'

/** The band's photos, in /public/img/. Each is shown at about its own height (no upscaling). */
const TILES = [
  { src: '/img/house-dusk.webp', width: 502, height: 377 },
  { src: '/img/office-view.webp', width: 443, height: 304 },
  { src: '/img/terrace-sunset.webp', width: 400, height: 321 },
  { src: '/img/phone-rock.webp', width: 369, height: 377 },
]

/** A full-width strip of photos with one short line, drifting slowly as the page scrolls. */
export function ImageBand({ text }: { text: string }) {
  return (
    <div className={styles.band}>
      <div className="container">
        <p className={`${styles.line} reveal`}>{text}</p>
      </div>
      <div className={styles.viewport} aria-hidden="true">
        <div className={styles.strip}>
          {TILES.map((tile) => (
            <img key={tile.src} src={tile.src} alt="" width={tile.width} height={tile.height} loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </div>
  )
}
