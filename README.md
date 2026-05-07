# Purple River, PBC — Marketing Website

Production-grade Next.js 15 marketing site for Purple River, a Public Benefit Corporation bringing enterprise-grade cybersecurity to U.S. non-profits.

---

## Setup

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Install & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

### Build & Preview

```bash
pnpm build
pnpm start
```

### Type Check & Lint

```bash
pnpm type-check
pnpm lint
pnpm format
```

---

## Environment Variables

Create a `.env.local` file in the repo root. None are required to run locally — the form routes log to the console when env vars are absent.

```bash
# HubSpot (for contact form & waitlist)
HUBSPOT_API_KEY=your_api_key_here
HUBSPOT_WAITLIST_LIST_ID=your_list_id_here

# Resend (for transactional email)
RESEND_API_KEY=your_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here

# Site URL
NEXT_PUBLIC_SITE_URL=https://purpleriver.org
```

---

## How to Wire the Forms

Both forms log to the console in development. Wire them in:

- **Contact form**: `src/app/api/contact/route.ts` — look for `// TODO: wire to HubSpot, Resend, or Notion DB`
- **Waitlist form**: `src/app/api/waitlist/route.ts` — same pattern

### HubSpot

1. Create a Private App API key in HubSpot → Settings → Integrations → Private Apps
2. Add `HUBSPOT_API_KEY` to `.env.local`
3. Uncomment the HubSpot fetch blocks in each route file

### Resend

1. Create an account at resend.com, add your domain, create an Audience
2. Add `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` to `.env.local`
3. `pnpm add resend` and uncomment the Resend blocks in each route file

---

## Adding Blog Posts

Place MDX files in `src/content/blog/`. Required frontmatter:

```yaml
---
title: "Post Title"
dek: "One-sentence summary."
date: "2026-05-01"
category: "Identity"   # Identity | Compliance | Incident Response | Board Communication | Tools & Tactics
readingTime: "3 min read"
featured: false
pullQuote: "Optional pull quote."
---
```

The filename becomes the URL slug: `my-post.mdx` → `/resources/my-post`

---

## Logo Assets

Place logo files at:

```
public/brand/purple_river_logo_dark.PNG    # for dark backgrounds
public/brand/purple_river_logo_light.PNG   # for light backgrounds
```

---

## Deployment Checklist

- [ ] Add environment variables to Vercel project settings
- [ ] Upload logo files to `public/brand/`
- [ ] Fill founder bios in `src/app/about/page.tsx` (search `{{TODO}}`)
- [ ] Wire contact and waitlist forms
- [ ] Update `metadataBase` URL in `src/app/layout.tsx`
- [ ] Update sitemap and robots URLs (`src/app/sitemap.ts`, `src/app/robots.ts`)

```bash
# Deploy via Vercel CLI
npx vercel --prod
```

---

## File Tree (3 levels)

```
.
├── public/brand/
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── api/{contact,waitlist}/route.ts
│   │   ├── approach/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── resources/{page.tsx,[slug]/page.tsx}
│   │   ├── roadmap/page.tsx
│   │   ├── who-we-serve/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── opengraph-image.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── brand/{Logo,RiverFlow}.tsx
│   │   ├── forms/{ContactForm,WaitlistForm}.tsx
│   │   ├── founders/FounderCard.tsx
│   │   ├── home/{Hero,PovertyLine,PillarGrid,CrossSubsidy,PBCBlock}.tsx
│   │   ├── layout/{NavBar,Footer,Section}.tsx
│   │   ├── pillars/PillarDetail.tsx
│   │   ├── roadmap/ProductCard.tsx
│   │   ├── tiers/TierCard.tsx
│   │   └── ui/{Button,Card,EyebrowLabel,Input}.tsx
│   ├── content/blog/{*.mdx}
│   └── lib/posts.ts
├── BRAND.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Three Next Steps to Launch-Ready

1. **Wire the forms** — Connect `api/contact` and `api/waitlist` to HubSpot or Resend. This is the most critical pre-launch task.
2. **Add real founder content** — Replace all `{{TODO}}` placeholders in `src/app/about/page.tsx` with real bios, LinkedIn URLs, and photos.
3. **Add logo assets** — Place `purple_river_logo_dark.PNG` and `purple_river_logo_light.PNG` in `public/brand/`.
