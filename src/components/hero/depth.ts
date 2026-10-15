import {
  LinearFilter,
  Matrix3,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Texture,
  TextureLoader,
  Vector2,
  Vector4,
  WebGLRenderer,
} from 'three'
import { imageToFace, scene as geo } from './geometry'

/** How far (in UV units) near and far layers move apart at full mouse deflection. */
const STRENGTH = 0.011
/** Depth that stays put: nearer layers move with the pointer, farther ones against it. */
const FOCUS = 0.45
/** How much the near layers rise as the hero scrolls away. */
const SCROLL_STRENGTH = 0.02

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

/*
 * Depth displacement: each pixel samples the photo a little away from itself, in
 * proportion to its depth (white = near), so the laptop and rocks slide over the
 * mountains. A few refinement steps keep edges from smearing. The laptop screen is then
 * drawn from the sharp screenshot through the inverse perspective transform, at the
 * displaced position, so it moves with the laptop.
 */
const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uImage;
  uniform sampler2D uDepth;
  uniform sampler2D uScreen;
  uniform vec2 uOffset;
  uniform vec2 uImageSize;
  uniform mat3 uToFace;
  uniform vec2 uFace;
  uniform vec4 uDisplay;
  uniform vec2 uCover;
  uniform float uFocus;

  void main() {
    vec2 uv = vec2(vUv.x, 1.0 - vUv.y);
    vec2 p = uv;
    for (int i = 0; i < 4; i++) {
      float d = texture2D(uDepth, p).r;
      p = uv - uOffset * (d - uFocus);
    }
    p = clamp(p, vec2(0.001), vec2(0.999));
    vec3 color = texture2D(uImage, p).rgb;

    // Laptop screen: photo pixels -> lid face pixels.
    vec3 f = uToFace * vec3(p * uImageSize, 1.0);
    vec2 q = f.xy / f.z;
    vec2 lo = uDisplay.xy;
    vec2 hi = uFace - uDisplay.zw;
    vec2 edge = min(q - lo, hi - q);
    float inside = smoothstep(0.0, 2.5, min(edge.x, edge.y));
    if (inside > 0.0) {
      vec2 s = (q - lo) / (hi - lo);
      vec3 shot = texture2D(uScreen, vec2(s.x * uCover.x, s.y * uCover.y)).rgb;
      // Glossy glass: a soft diagonal sheen and a faint top-left light.
      float t = s.x * 0.75 + s.y * 0.45;
      float sheen = pow(clamp(1.0 - abs(t - 0.32) / 0.22, 0.0, 1.0), 2.0) * 0.09 + clamp(1.0 - t / 0.9, 0.0, 1.0) * 0.035;
      color = mix(color, shot + sheen, inside);
    }
    gl_FragColor = vec4(color, 1.0);
  }
`

function load(url: string): Promise<Texture> {
  return new Promise((resolve, reject) => new TextureLoader().load(url, resolve, undefined, reject))
}

/**
 * Starts the effect inside `container` (the hero scene). Returns a function that stops it
 * and frees the GPU resources. Rejects if WebGL or the images aren't available, in which
 * case the plain image stays.
 */
export async function startDepth(container: HTMLElement, layer: HTMLElement): Promise<() => void> {
  const [image, depth, screen] = await Promise.all([
    load('/hero-2000.webp'),
    load('/hero-depth.png'),
    load('/hero-screen.webp'),
  ])
  for (const t of [image, depth, screen]) {
    t.flipY = false
    t.minFilter = t === screen ? t.minFilter : LinearFilter
    t.generateMipmaps = t === screen
  }
  // The shader passes the image's sRGB values straight through, so no colour-space conversion.

  const renderer = new WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const { face, display, screenshot } = geo
  const dw = face.width - display.left - display.right
  const dh = face.height - display.top - display.bottom
  // Cover the display with the screenshot, anchored to the top (as in the CSS overlay).
  const cover = Math.max(dw / screenshot.width, dh / screenshot.height)

  const m = imageToFace
  const material = new ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      uImage: { value: image },
      uDepth: { value: depth },
      uScreen: { value: screen },
      uOffset: { value: new Vector2() },
      uImageSize: { value: new Vector2(geo.image.width, geo.image.height) },
      uToFace: { value: new Matrix3().set(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8]) },
      uFace: { value: new Vector2(face.width, face.height) },
      uDisplay: { value: new Vector4(display.left, display.top, display.right, display.bottom) },
      uCover: { value: new Vector2(dw / (screenshot.width * cover), dh / (screenshot.height * cover)) },
      uFocus: { value: FOCUS },
    },
  })
  const scene = new Scene()
  const geometry = new PlaneGeometry(2, 2)
  scene.add(new Mesh(geometry, material))
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const canvas = renderer.domElement
  layer.appendChild(canvas)

  const resize = () => renderer.setSize(container.offsetWidth, container.offsetHeight, false)
  resize()
  const ro = new ResizeObserver(() => {
    resize()
    request()
  })
  ro.observe(container)

  // Pointer and scroll targets, eased toward each frame.
  const target = new Vector2()
  const current = new Vector2()
  let scroll = 0
  const hero = container.closest('section') ?? container
  const onPointer = (e: PointerEvent) => {
    target.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1)
    request()
  }
  const onScroll = () => {
    const r = hero.getBoundingClientRect()
    scroll = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height)))
    request()
  }
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })

  let visible = true
  let frame = 0
  let first = true
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) request()
  })
  io.observe(container)
  const onVisibility = () => !document.hidden && request()
  document.addEventListener('visibilitychange', onVisibility)

  function request() {
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(tick)
  }

  function tick() {
    frame = 0
    current.lerp(target, 0.08)
    const offset = material.uniforms.uOffset.value as Vector2
    offset.set(current.x * STRENGTH, current.y * STRENGTH * 0.6 - scroll * SCROLL_STRENGTH)
    renderer.render(scene, camera)
    if (first) {
      first = false
      container.setAttribute('data-webgl', '')
    }
    // Keep animating only while still easing toward the pointer.
    if (current.distanceTo(target) > 0.0005) request()
  }
  onScroll()
  request()

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('visibilitychange', onVisibility)
    io.disconnect()
    ro.disconnect()
    container.removeAttribute('data-webgl')
    canvas.remove()
    geometry.dispose()
    material.dispose()
    for (const t of [image, depth, screen]) t.dispose()
    renderer.dispose()
  }
}
