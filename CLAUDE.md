# CLAUDE.md - angie-earspa-health-care-wellness

> **Documentation Version**: 1.0  
> **Last Updated**: 2026-04-04  
> **Project**: Angie Earspa Wellness  
> **Description**: Bilingual (CN+EN) premium wellness website — Next.js 14 + Tailwind CSS + Framer Motion  

This file provides essential guidance to Claude Code when working with this repository.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with custom brand tokens
- **UI Components**: shadcn/ui (Card, Dialog, Tabs)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond, Josefin Sans, DM Sans, Noto Serif SC, Noto Sans SC

## Project Structure

```
/src/app          — Pages (/, /services, /packages, /branches, /gallery, /about, /book)
/src/components   — Reusable components (Navbar, Footer, WhatsAppFAB, etc.)
/src/components/ui — shadcn/ui base components
/src/lib          — Constants, WhatsApp utils
/public/images    — Logo + gallery images
```

## Brand Colors (Tailwind classes)

- `blush` (#F2A49E), `blush-light` (#F9D4CF), `rose-deep` (#D4756D)
- `cream` (#FDF8F5), `cream-alt` (#FAF0EB), `gold` (#C9A96E)
- `heritage` (#2C1810), `text-muted` (#8B7355)

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Key Rules

- All WhatsApp numbers and branch details marked TODO — replace before launch
- Images are client-provided in /public/images/
- No backend — booking form sends to WhatsApp via wa.me deep link
- Bilingual: Chinese primary, English secondary
- Never use Inter, Roboto, or Arial fonts
