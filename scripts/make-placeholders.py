"""Erzeugt beschriftete Platzhalterbilder für src/images.

Echtes Foto ersetzen: Datei mit gleichem Namen in src/images ablegen und in
src/data/images.ts den Eintrag auf `placeholder: false` setzen.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src" / "images"
FONT = "/System/Library/Fonts/Helvetica.ttc"

SLOTS = {
    "platzhalter-fahrzeug-beispiel.png": ("Fahrzeug", "Seitenansicht, Tageslicht, Hof", (1600, 1200)),
    "platzhalter-hof.png": ("Hof und Einfahrt", "Echtes Foto vom Gelände", (1600, 1100)),
    "platzhalter-werkstatt.png": ("Werkstatt", "Hebebühne, Team bei der Arbeit", (1600, 1100)),
    "platzhalter-team.png": ("Team", "Alle Gesellschafter, vor dem Hof", (1600, 1100)),
}

for name, (title, hint, size) in SLOTS.items():
    w, h = size
    img = Image.new("RGB", size, "#DCE9E2")
    d = ImageDraw.Draw(img)
    for x in range(0, w, 80):
        d.line([(x, 0), (x, h)], fill="#CBDBD2", width=2)
    for y in range(0, h, 80):
        d.line([(0, y), (w, y)], fill="#CBDBD2", width=2)
    d.rectangle([40, 40, w - 40, h - 40], outline="#171B1F", width=4)
    big = ImageFont.truetype(FONT, 84)
    small = ImageFont.truetype(FONT, 38)
    tag = ImageFont.truetype(FONT, 30)
    d.text((90, h // 2 - 90), title, font=big, fill="#171B1F")
    d.text((90, h // 2 + 30), hint, font=small, fill="#3B4650")
    d.rectangle([90, h - 150, 560, h - 90], fill="#F2C200")
    d.text((110, h - 140), "PLATZHALTER", font=tag, fill="#171B1F")
    img.save(OUT / name, optimize=True)
    print("ok", name)
