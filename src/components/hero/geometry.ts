import scene from './scene.json'

type Point = readonly [number, number]
/** Row-major 3×3 matrix. */
export type Mat3 = [number, number, number, number, number, number, number, number, number]

/** The projective transform (homography) that maps the four `from` points onto the four `to` points. */
export function homography(from: readonly Point[], to: readonly Point[]): Mat3 {
  // Solve the 8×8 linear system A·h = b (h33 = 1) by Gaussian elimination.
  const a: number[][] = []
  for (let i = 0; i < 4; i++) {
    const [x, y] = from[i]
    const [u, v] = to[i]
    a.push([x, y, 1, 0, 0, 0, -u * x, -u * y, u])
    a.push([0, 0, 0, x, y, 1, -v * x, -v * y, v])
  }
  for (let c = 0; c < 8; c++) {
    let pivot = c
    for (let r = c + 1; r < 8; r++) if (Math.abs(a[r][c]) > Math.abs(a[pivot][c])) pivot = r
    ;[a[c], a[pivot]] = [a[pivot], a[c]]
    for (let r = 0; r < 8; r++) {
      if (r === c) continue
      const f = a[r][c] / a[c][c]
      for (let k = c; k < 9; k++) a[r][k] -= f * a[c][k]
    }
  }
  const h = a.map((row, i) => row[8] / row[i])
  return [h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], 1]
}

const { width: FW, height: FH } = scene.face
const FACE: Point[] = [
  [0, 0],
  [FW, 0],
  [FW, FH],
  [0, FH],
]
const LID = scene.lid as unknown as Point[]

/** Lid face (local px) → photo (image px). */
export const faceToImage = homography(FACE, LID)
/** Photo (image px) → lid face (local px), for the WebGL shader. */
export const imageToFace = homography(LID, FACE)

/** CSS `matrix3d()` for a homography (CSS wants a column-major 4×4 matrix). */
export function cssMatrix3d(m: Mat3): string {
  const [a, b, c, d, e, f, g, h, i] = m
  const n = (v: number) => +v.toPrecision(10)
  return `matrix3d(${[a, d, 0, g, b, e, 0, h, 0, 0, 1, 0, c, f, 0, i].map(n).join(',')})`
}

export { scene }
