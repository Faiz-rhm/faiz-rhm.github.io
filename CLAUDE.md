# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Faiz Rhm, a Flutter developer showcasing UI kits and projects. The site uses TypeScript, Mantine UI components, and Tailwind CSS.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Generate sitemap (runs automatically after build via postbuild)
npm run postbuild

# Start production server
npm start

# Lint
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Path Aliases
- `@/*` maps to `./src/*`

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with MantineProvider, HeaderMenu, Google Analytics
│   ├── page.tsx           # Homepage
│   ├── projects/          # Project showcase pages
│   │   ├── page.tsx       # Projects listing
│   │   └── [slug]/        # Dynamic project detail pages
│   ├── market/            # UI kit marketplace pages
│   │   ├── page.tsx       # Market listing
│   │   └── [slug]/        # Dynamic market detail pages
│   └── [ui-kit-name]/     # Individual UI kit detail pages
├── components/
│   ├── header/            # Header and navigation
│   ├── footer/            # Footer component
│   ├── card/              # Card components
│   └── others/            # Reusable components (HeroSection, AboutSection, etc.)
└── data/
    ├── project.json       # Project portfolio data
    └── market.json        # UI kits/marketplace data
```

### Data Architecture
- All project and marketplace content is stored in JSON files under `src/data/`
- `project.json` contains portfolio projects with fields: id, name, slug, description, cover, images, tag, completed, points, googlePlay, appStore
- `market.json` contains UI kits with fields: id, name, slug, description, repository, cover, images, tags, price, isVisible
- Dynamic routes use slug-based routing via `[slug]` directories

### Styling
- Uses both Tailwind CSS and Mantine UI component library
- CSS Modules for component-specific styles (`.module.css` files)
- MantineProvider configured with `defaultColorScheme="dark"` in root layout
- Google Fonts: Geist and Geist_Mono (mapped to CSS variables --font-Manrope and --font-Caveat)

### Key Configurations
- `next.config.ts`: React Strict Mode enabled, images unoptimized (for static export compatibility)
- `next-sitemap.config.js`: Generates sitemap for https://faizrhm.dev/ with weekly changefreq
- TypeScript configured with strict mode, ES2017 target

## Important Notes

- The site uses `'use client'` directives extensively, indicating client-side rendering for interactive features
- Google Analytics is integrated via `@next/third-parties/google` with GA ID: G-TLM95WV9VN
- SEO metadata includes Open Graph and Twitter card tags in root layout
- Project and market pages use dynamic imports with React Slick carousel for image galleries
- Images are unoptimized to support static site deployment (likely for GitHub Pages via `gh-pages` package)
