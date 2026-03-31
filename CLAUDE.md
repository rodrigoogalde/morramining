# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **Morra Mining** — a Chilean mining company focused on copper and gold supply from Chile and Argentina. The site targets traders, smelters/refineries, and industrial investors. It is a one-page landing with sections: Hero, About Us, What We Do, Operations, Value Proposition, Business Model, Markets, Advisory Services, and Contact.

## Stack

- **Next.js** with App Router
- **Tailwind CSS** for styling
- Static/SSG site (no backend, no auth)

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint
```

## Architecture

Single-page landing built as a Next.js app. The main page (`app/page.tsx`) composes section components that map to the website structure defined in README.md.

## Design Direction

- **Colors:** Black, dark gray, copper/bronze, white — conveying reliability and industrial quality
- **Tone:** Premium supply platform, NOT a generic mining company site. Should communicate: reliable supply, operational execution, mine-to-market capability
- **Images:** Real mining operations preferred over stock photos (photos pending from client)
- **Typography:** Distinctive, non-generic font choices (avoid Inter, Roboto, Arial)
- **Layout:** Clean, minimal, spacious, short text blocks

## Key Content

- **Contact:** info@morramining.cl / felipe.valenzuela@morramining.cl
- **Operations:** La Isla Copper Project (Chile, Valparaíso Region) and San Juan Gold Operation (Argentina)
- **Markets:** Europe, Middle East, Latin America
- **Positioning phrases:** "Reliable supply from the Southern Cone", "From mine to market", "Securing your metal supply"
