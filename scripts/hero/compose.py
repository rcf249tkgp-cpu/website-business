"""Bakes the website screenshot into the laptop screen of public/hero.jpg (development only).

  python scripts/hero/compose.py            # all languages: fi, sv, en

Reads  public/hero.jpg, public/hero-screen-{lang}.webp and src/components/hero/scene.json.
Writes public/hero-{lang}-{800,1200,2000}.webp: the photo with that language's screenshot
warped onto the laptop's display (perspective transform), a dark bezel and a soft gloss.

The page also lays a sharp copy of the screenshot over this exact spot (CSS matrix3d,
or the WebGL shader on desktop). Baking it in as well means the original placeholder
screen never shows: not before scripts load, not in link previews, not in any fallback.
"""

import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
SCENE = json.loads((ROOT / 'src/components/hero/scene.json').read_text())
SS = 2  # supersampling for clean edges


def homography(src, dst):
    """3×3 matrix mapping the four src points onto the four dst points."""
    a = []
    for (x, y), (u, v) in zip(src, dst):
        a.append([x, y, 1, 0, 0, 0, -u * x, -u * y, -u])
        a.append([0, 0, 0, x, y, 1, -v * x, -v * y, -v])
    _, _, vt = np.linalg.svd(np.array(a, dtype=float))
    h = vt[-1].reshape(3, 3)
    return h / h[2, 2]


def face_image(lang):
    """The lid's front: black glass bezel, the screenshot, and a gloss highlight."""
    fw, fh = SCENE['face']['width'], SCENE['face']['height']
    d = SCENE['display']
    face = Image.new('RGBA', (fw, fh), (0, 0, 0, 0))
    mask = Image.new('L', (fw, fh), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, fw - 1, fh - 1], radius=46, fill=255)
    face.paste((6, 7, 10, 255), (0, 0), mask)

    shot = Image.open(ROOT / f'public/hero-screen-{lang}.webp').convert('RGB')
    dw, dh = fw - d['left'] - d['right'], fh - d['top'] - d['bottom']
    # Cover the display area, anchored to the top of the page.
    scale = max(dw / shot.width, dh / shot.height)
    shot = shot.resize((round(shot.width * scale), round(shot.height * scale)), Image.LANCZOS)
    shot = shot.crop((0, 0, dw, dh))
    face.paste(shot, (d['left'], d['top']))

    # Glossy reflection: a soft diagonal sheen over the glass, strongest top-left.
    yy, xx = np.mgrid[0:fh, 0:fw].astype(np.float32)
    t = (xx / fw) * 0.75 + (yy / fh) * 0.45
    sheen = np.clip(1 - np.abs(t - 0.32) / 0.22, 0, 1) ** 2 * 0.09
    sheen += np.clip(1 - t / 0.9, 0, 1) * 0.035
    sheen *= np.asarray(mask, dtype=np.float32) / 255
    gloss = np.zeros((fh, fw, 4), np.uint8)
    gloss[..., :3] = 255
    gloss[..., 3] = (sheen * 255).astype(np.uint8)
    face = Image.alpha_composite(face, Image.fromarray(gloss))
    return face


def warp_onto(base, face):
    fw, fh = face.size
    lid = SCENE['lid']
    h = homography(lid, [(0, 0), (fw, 0), (fw, fh), (0, fh)])  # image -> face
    xs, ys = [p[0] for p in lid], [p[1] for p in lid]
    x0, y0, x1, y1 = int(min(xs)) - 2, int(min(ys)) - 2, int(max(xs)) + 3, int(max(ys)) + 3
    w, hgt = (x1 - x0) * SS, (y1 - y0) * SS
    yy, xx = np.mgrid[0:hgt, 0:w].astype(np.float64)
    px, py = x0 + (xx + 0.5) / SS, y0 + (yy + 0.5) / SS
    den = h[2, 0] * px + h[2, 1] * py + h[2, 2]
    u = (h[0, 0] * px + h[0, 1] * py + h[0, 2]) / den
    v = (h[1, 0] * px + h[1, 1] * py + h[1, 2]) / den

    src = np.asarray(face, dtype=np.float32)
    inside = (u >= 0) & (u <= fw - 1) & (v >= 0) & (v <= fh - 1)
    uc, vc = np.clip(u, 0, fw - 1.001), np.clip(v, 0, fh - 1.001)
    i, j = np.floor(uc).astype(int), np.floor(vc).astype(int)
    fu, fv = (uc - i)[..., None], (vc - j)[..., None]
    sample = (src[j, i] * (1 - fu) * (1 - fv) + src[j, i + 1] * fu * (1 - fv)
              + src[j + 1, i] * (1 - fu) * fv + src[j + 1, i + 1] * fu * fv)
    sample[~inside] = 0
    patch = Image.fromarray(sample.astype(np.uint8), 'RGBA').resize((x1 - x0, y1 - y0), Image.LANCZOS)
    out = base.convert('RGBA')
    out.alpha_composite(patch, (x0, y0))
    return out.convert('RGB')


def main(langs):
    base = Image.open(ROOT / 'public/hero.jpg').convert('RGB')
    for lang in langs:
        out = warp_onto(base, face_image(lang))
        for width in (800, 1200, 2000):
            img = out if width == out.width else out.resize((width, round(out.height * width / out.width)), Image.LANCZOS)
            img.save(ROOT / f'public/hero-{lang}-{width}.webp', quality=72, method=6)
            print(f'wrote public/hero-{lang}-{width}.webp', img.size)


if __name__ == '__main__':
    main(sys.argv[1:] or ['fi', 'sv', 'en'])
