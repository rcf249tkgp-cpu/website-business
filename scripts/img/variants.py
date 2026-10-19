"""Writes smaller WebP widths next to the images in public/img/ for srcset.

Usage: python3 scripts/img/variants.py
Each entry: image name -> widths to generate (the original file is the largest size).
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2] / 'public' / 'img'
WIDTHS = {
    'craft-mockup': [768, 1152],
    'ba-row-bygg': [640],
    'ba-row-restaurang': [640],
    'ba-row-gym': [640],
    'concept-ember': [480],
    'concept-lumo': [480],
    'concept-voltra': [480],
    'concept-form-fjord': [480],
}

for name, widths in WIDTHS.items():
    src = Image.open(ROOT / f'{name}.webp')
    for w in widths:
        h = round(src.height * w / src.width)
        out = ROOT / f'{name}-{w}.webp'
        src.resize((w, h), Image.LANCZOS).save(out, 'WEBP', quality=80, method=6)
        print(out.name, w, h, out.stat().st_size // 1024, 'KB')
