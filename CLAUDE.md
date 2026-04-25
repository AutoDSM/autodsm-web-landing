# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (localhost:3000)
npm run build    # Production build with Turbopack
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 15 landing page for AutoDSM using the App Router. The site is a single-page marketing landing with light/dark theme support.

**Stack**: Next.js 15, React 19, Tailwind CSS v4, TypeScript

**Key files**:
- `app/page.tsx` - Single client component with all landing page sections (hero, product, how-it-works, pricing, FAQ, CTA)
- `app/globals.css` - CSS variables for theming, component styles, and responsive breakpoints
- `app/layout.tsx` - Root layout with font configuration (Manrope headings, Geist body/mono)

**Theming**: Uses CSS variables with `data-theme` attribute on `<html>`. Theme state is managed in `page.tsx` with localStorage persistence.

**Fonts**: CSS variables `--font-heading`, `--font-body`, `--font-mono` are set via Next.js Google Fonts in layout.tsx.

**Static assets**: SVG logos in `/public/brand/`, visual assets in `/public/visuals/`.
