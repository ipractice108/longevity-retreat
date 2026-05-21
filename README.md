# Nuanu Longevity Retreat — Landing Pages

Five audience-tested landing pages for paid-traffic A/B testing of the 14-day longevity retreat at Nuanu Creative City, Bali. One shared design system, five offers.

## Routes

| URL | Audience | Hook |
| --- | --- | --- |
| `/` and `/healthspan` | Healthspan (HNW 45-60) | DunedinPACE + VO2max + 60-marker panel |
| `/unplug` | Burnout / senior operators | WHOOP + phone-free protocol |
| `/reset` | Metabolic / weight | Continuous glucose monitor, take-home |
| `/moms-reset` | Gifted to a parent | Daily WhatsApp updates |
| `/work-well` | Workation with diagnostics | Ship home with biomarkers |

All five share the same template — only the hero image, headline, sub-headline, hook and price band swap per route.

## Stack

- Static HTML + Tailwind (via CDN)
- React 18 (via UMD CDN)
- Compiled JSX → `bundle.js` (no runtime Babel)
- 20 brand-consistent images generated via Gemini Nano Banana 2

## Local development

```bash
python3 -m http.server 8765
open http://localhost:8765/
```

The tweaks panel in the lower-right corner switches variants live.

## Build

After editing any `.jsx` source file:

```bash
./build.sh
```

This compiles JSX with esbuild and concatenates into `bundle.js`.

## Deploy (Vercel)

```bash
vercel --prod
```

`vercel.json` handles the five route rewrites and asset cache headers.

## Brand notes

Visual system follows Nuanu Brand Guideline V1.0 (colours, typography, photography direction). See `assets/` for source brand notes.
