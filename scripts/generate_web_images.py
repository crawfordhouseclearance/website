"""
One-off WebP generation from public/images/launch sources.
Max widths; never upscales. Run from repo root: python scripts/generate_web_images.py
"""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LAUNCH = ROOT / "public" / "images" / "launch"
OUT = ROOT / "public" / "images" / "web"


def save_webp(src: Path, dest: Path, max_w: int, quality: int = 82) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    if w > max_w:
        nh = int(round(h * (max_w / w)))
        im = im.resize((max_w, nh), Image.Resampling.LANCZOS)
    rgb = Image.new("RGB", im.size, (255, 255, 255))
    rgb.paste(im, mask=im.split()[3] if im.mode == "RGBA" else None)
    rgb.save(dest, "WEBP", quality=quality, method=6)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    # Hero
    save_webp(LAUNCH / "hero.png", OUT / "hero.webp", 1800)

    # Service grids (~1000px)
    for i in range(1, 5):
        save_webp(LAUNCH / f"service_probate_{i:02d}.png", OUT / f"service_probate_{i:02d}.webp", 1000)
    mapping_dom = [
        ("service_domestic_1.png", "service_domestic_1.webp"),
        ("service_domestic_2.png", "service_domestic_2.webp"),
        ("service_domestic_03.png", "service_domestic_03.webp"),
        ("service_domestic_04.png", "service_domestic_04.webp"),
    ]
    for src_name, dest_name in mapping_dom:
        save_webp(LAUNCH / src_name, OUT / dest_name, 1000)
    for i in range(1, 5):
        save_webp(LAUNCH / f"service_commercial_{i:02d}.png", OUT / f"service_commercial_{i:02d}.webp", 1000)

    # Job case images: preview (~750) + modal (~1200)
    job_sources = [
        "case_probate_room_before.png",
        "case_probate_room_after.png",
        "case_probate_bedroom_before.png",
        "case_probate_bedroom_after.png",
        "case_domestic_kitchen_before.png",
        "case_domestic_kitchen_after.png",
        "case_domestic_bedroom_before.png",
        "case_domestic_bedroom_after.png",
        "case_garage_02_before.png",
        "case_garage_02_after.png",
    ]
    for name in job_sources:
        stem = Path(name).stem
        src = LAUNCH / name
        save_webp(src, OUT / f"{stem}.webp", 750)
        save_webp(src, OUT / f"{stem}_full.webp", 1200)

    print("Wrote WebP assets under", OUT)


if __name__ == "__main__":
    main()
