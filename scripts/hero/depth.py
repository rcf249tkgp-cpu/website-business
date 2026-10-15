"""Generates public/hero-depth.png from public/hero.jpg (development only, never during the build).

Uses Depth Anything V2 (small) as ONNX:
  curl -L -o depth_anything_v2_vits.onnx \
    https://github.com/fabio-sim/Depth-Anything-ONNX/releases/download/v2.0.0/depth_anything_v2_vits.onnx
  pip install onnxruntime pillow numpy
  python scripts/hero/depth.py path/to/depth_anything_v2_vits.onnx

Output: 8-bit grayscale, same size as hero.jpg, white = near, black = far. The map is
smoothed and the foreground is slightly dilated so the displacement effect doesn't tear
along the laptop's edges.
"""

import sys
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
SIZE = 518  # The exported model takes a fixed 518 × 518 input.


def main(model_path: str) -> None:
    src = Image.open(ROOT / 'public/hero.jpg').convert('RGB')
    x = np.asarray(src.resize((SIZE, SIZE), Image.BICUBIC), dtype=np.float32) / 255.0
    x = (x - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    x = x.transpose(2, 0, 1)[None].astype(np.float32)

    session = ort.InferenceSession(model_path)
    depth = session.run(None, {session.get_inputs()[0].name: x})[0][0]

    # Normalise robustly (ignore the extreme 1% at both ends), then back to full size.
    lo, hi = np.percentile(depth, [1, 99])
    depth = np.clip((depth - lo) / (hi - lo), 0, 1)
    img = Image.fromarray((depth * 255).astype(np.uint8)).resize(src.size, Image.BICUBIC)

    # Grow near areas a little and soften steps, so edges stretch instead of tearing.
    img = img.filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(6))
    img.save(ROOT / 'public/hero-depth.png', optimize=True)
    print('wrote public/hero-depth.png', img.size)


if __name__ == '__main__':
    main(sys.argv[1])
