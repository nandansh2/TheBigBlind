# The Big Blind

The website for The Big Blind — a venture-building ecosystem connecting founders,
investors, VCs, and financial institutions.

## Structure

This repo serves **two distinct sites** from one Next.js app, using route groups
with [multiple root layouts](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts).
Each group owns its fonts and CSS, so the two design systems stay fully isolated.

```
src/app/
  (site)/        → the main site        (/, /vision, /founders, …)
  (waitlist)/    → the original landing page at /waitlist
  sitemap.ts     robots.ts   icon.svg
public/our_deck/ → static investor deck served at /our_deck (via next.config rewrites)
```

### Routes

| Route | What |
|---|---|
| `/` | Main site homepage — shader hero |
| `/vision` | Our Vision |
| `/founders` `/investors` `/venture-capital` `/financial-institutions` | Where We Come In |
| `/partners` | Partners, network, photo carousel |
| `/reach-out` | Application form (Formspree) |
| `/waitlist` | The original waitlist landing page |
| `/our_deck` | Static investor deck (plain HTML in `public/`) |

## Design systems

Both token sets live in `tailwind.config.ts`. Font families resolve through CSS
variables that **each root layout defines**, so `font-mono` means JetBrains inside
`(site)` and IBM Plex inside `(waitlist)` without either overriding the other.

| | (site) | (waitlist) |
|---|---|---|
| Display | Fraunces | Fraunces (italic) |
| Body | Manrope | Inter |
| Mono | JetBrains Mono | IBM Plex Mono |
| Background | `#0B0B0D` | `#0A0A0A` |
| Accent | `#FF3D68` pink-red | — |

Suits (♠♥♦♣) are custom SVGs in `src/components/primitives/Glyph.tsx` — colour-aware
(♥♦ pink, ♠♣ silver), never emoji.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

> Don't run `npm run build` while `next dev` is running — they share `.next` and the
> dev server will start 404ing. Stop dev first, or `rm -rf .next && npm run dev` after.

## SEO

Base layer in place: per-page titles/descriptions, canonical URLs, Open Graph +
Twitter cards (`src/lib/seo.ts` → `pageMeta()`), `sitemap.xml`, `robots.txt`,
JSON-LD `Organization`, semantic headings, and alt text on every image.

**Still to do:** a real Open Graph share image (`opengraph-image.png`), per-page OG
images, and richer structured data (Person / BreadcrumbList / FAQ).

## Assets

Gallery photos live in `public/assets/gallery/` and are referenced from
`src/components/partners/GalleryCarousel.tsx`. Logo placeholders are in
`public/assets/`.

## Form

`/reach-out` posts to Formspree (`SITE.formspree` in `src/lib/constants.ts`).
Fields include the selected path, the "I am a" segment, and contact details.
