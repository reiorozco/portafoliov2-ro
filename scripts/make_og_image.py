#!/usr/bin/env python3
"""Generate a branded 1200x630 Open Graph image for the portfolio."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (10, 10, 16)        # near-black, matches dark theme
PURPLE = (131, 56, 236)  # #8338ec accent
RED = (217, 4, 41)       # #d90429 accent
WHITE = (245, 245, 247)
GRAY = (160, 160, 175)


def font(paths, size):
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


BOLD = ["/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/Library/Fonts/Arial Bold.ttf"]
REG = ["/System/Library/Fonts/Supplemental/Arial.ttf",
       "/System/Library/Fonts/Helvetica.ttc",
       "/Library/Fonts/Arial.ttf"]

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Accent gradient bar on the left
for y in range(H):
    t = y / H
    r = int(PURPLE[0] * (1 - t) + RED[0] * t)
    g = int(PURPLE[1] * (1 - t) + RED[1] * t)
    b = int(PURPLE[2] * (1 - t) + RED[2] * t)
    d.line([(0, y), (16, y)], fill=(r, g, b))

PAD = 80
# Eyebrow
d.text((PAD, 130), "PORTFOLIO", font=font(BOLD, 28), fill=PURPLE)
# Name
d.text((PAD, 175), "Reinaldo “Rei” Orozco", font=font(BOLD, 76), fill=WHITE)
# Role
d.text((PAD, 280), "Full Stack Engineer", font=font(BOLD, 52), fill=WHITE)
# Stack line
d.text((PAD, 350), "React · Next.js · Node.js · TypeScript", font=font(REG, 34), fill=GRAY)
d.text((PAD, 396), "Now engineering AI/LLM agent environments (MCP)", font=font(REG, 34), fill=GRAY)

# Footer line
d.line([(PAD, 500), (W - PAD, 500)], fill=(40, 40, 52), width=2)
d.text((PAD, 525), "portfolio-ro-bay.vercel.app", font=font(REG, 30), fill=GRAY)
d.text((W - PAD - 280, 525), "Medellín, Colombia", font=font(REG, 30), fill=GRAY)

img.save("public/images/og-image.png", "PNG")
print("Saved public/images/og-image.png", img.size)
