# JBAIStuff — Jeff Brown Resume Website

A single-page personal resume website for **Jeff Brown**, built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

## Live URL

https://jbai-stuff.vercel.app

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — ESLint

## Tech

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Static/server-rendered, no client-side data fetching
- Light/dark theme toggle that respects system preference on first load

## Privacy note

The residential/postal address (P. O. Box 72 / 107 East North Street, Muncie, IL 61857) and phone number (919-475-6668) from the resume are intentionally omitted from this public site, per the project requirements. City/state and the resume email were retained because they are safe to publish.

## Deliberately skipped

- Contact form (out of scope for phase 1, per PRD)
- Analytics / third-party tracking (out of scope)
- Multi-page routes, CMS, auth, PDF generation (out of scope)
- LinkedIn link in the header (the profile URL was provided by the attendee and linked; it is not on the resume as content)