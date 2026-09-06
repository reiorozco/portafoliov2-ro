# Design

Visual system for the portfolio. Captured from the live code (`src/index.css`, Tailwind v4 `@theme`). Register: **brand** (dark, minimal, technical — Linear/Vercel lane).

## Theme

- **Mode:** dark-first. Canvas is near-black; content is light. No light mode.
- **Mood:** precise, quiet, technical. The 3D hero is the single focal flourish; everything else recedes.
- **Surface model:** flat near-black background with subtly lighter raised surfaces (cards) and a hairline border instead of heavy shadows.

## Color

Tailwind v4 tokens (`@theme` in `src/index.css`) — these are the source of truth:

| Token | Value | Role |
|---|---|---|
| (base) | `#000000` | Page background (`body`) |
| `--color-black-100` | `#0e0e10` | Card / surface background (`card-border`) |
| `--color-black-50` | `#1c1c21` | Hairline border; raised dark surfaces |
| `--color-black-200` | `#282732` | Button / control surface (`cta-button`) |
| `--color-white-50` | `#d9ecff` | Primary light text (cool off-white) |
| `--color-blue-50` | `#839cb5` | Muted captions / secondary labels |
| `--color-blue-100` | `#2d2d38` | Secondary surface tint |
| purple-500 | `#8338ec` | Spice only (3D pillow, rare emphasis) |
| red | `#d90429` | Secondary accent (sparingly) |

**Rules:** Accents are spice, not paint — purple/red appear at points of emphasis only, never as fills. Body text is `white-50` (cool off-white, not pure white) on near-black. Keep contrast ≥4.5:1. Avoid introducing new hues; the palette is deliberately narrow (anti-reference: "noisy").

## Typography

- **Families (paired on a personality-contrast axis):**
  - **Display — `Bricolage Grotesque`** (variable, opsz 12–96, weights 500–800): hero headline + all section/card/role titles. Applied via the `.display-type` class (`font-optical-sizing: auto`, `letter-spacing: -0.02em`). Carries the "designed, not template" character; optically sized so it sharpens at the large hero size.
  - **Body — `Mona Sans`** (variable 200–900, italic axis): everything else — paragraphs, labels, UI. Neutral humanist sans that lets the display lead.
  - Both load with `font-display: swap`. Keep to these two families.
- **Scale (fluid):** hero `~30px → 60px` (`.hero-text`); section titles `text-3xl → md:text-5xl`; experience role `text-3xl`; body `text-lg / md:text-xl`; captions `text-sm`.
- **Weights:** semibold for headings, regular for body. Light type on dark → keep generous line-height.
- **Hierarchy:** exactly one `<h1>` (hero). Section titles `<h2>`, item titles `<h3>`. No emoji kickers above headings (removed — read as template scaffolding).

## Layout & Spacing

- Single-column narrative scroll; one dominant idea per fold.
- Horizontal padding utilities: `padding-x` (`px-5 md:px-10`), `padding-x-lg` (`px-5 md:px-20`), `section-padding` (adds `md:mt-40 mt-20`).
- Grids: `grid-3-cols`, `grid-4-cols` (counters). Showcase = 60/40 (flagship + one production case). Contact is a single-column form.
- Breakpoints: mobile-first; key jumps at `md` and `xl`.

## Components

- **`card-border`** — `bg-black-100` + `1px` `black-50` border. The base surface; hairline over shadow. Never nest.
- **`GlowCard`** — experience card with cursor-tracked conic glow (`--start` var). Holds a first-person impact line (not a fake testimonial).
- **`cta-button`** — dark control (`black-200`) with the full label visible at rest (`white-50`) and a hairline arrow disc. Hover lifts to `black-50`. Real `href` on in-page CTAs.
- **Project links** — `Live demo` (solid white) + `GitHub` (outline) on showcase cards. Min height 44px.
- **`tech-card`** — compact rounded tile, logo + label. Six items, 2/3 columns. No hover sweep, no grab cursor.

## Motion

- **Library:** GSAP + `@gsap/react`, ScrollTrigger for scroll-linked reveals; React Three Fiber for the **hero** 3D only.
- **Character:** one orchestrated entrance per section (staggered fade/slide), not fade-on-scroll everywhere. The 3D room is the signature motion; it is lazy-loaded and must not block first paint.
- **Reduced motion:** `prefers-reduced-motion` skips GSAP entrances, freezes CSS animation, and the particle loop respects the hook. The canvas may still mount.

## Imagery

Real assets only: live project screenshots (`project1.x.png`), real company logos (Fleet, Geeks5G, Blue Express, Cuculi, Work2, Henry), and the WebGL hero scene as the primary "image." No colored-block placeholders.
