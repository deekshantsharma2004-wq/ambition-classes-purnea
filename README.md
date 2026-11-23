# Ambition Classes, Purnea — Next.js Website (REAL build, not static HTML)

## Run it
```bash
cd ~/workspace/ambition-nextjs
npm install
npm run build   # must pass with 0 errors
npm run start   # serves on http://localhost:3100
```

## Stack — all installed for real via npm (verified with `npm list`)
- next 16.4.6, react 19.3.0, react-dom 19.3.0 — framework (App Router, TypeScript)
- tailwindcss 4.3.3 — styling (`src/app/globals.css`, `@theme` navy/gold)
- framer-motion 14.14.0 — animations (`src/components/Reveal.tsx`: fade-up on scroll, respects `prefers-reduced-motion`)
- lucide-react 1.78.0 — ALL icons (Menu/X, Phone, MessageCircle, PenLine, MapPin, Star, Check). No emoji icons anywhere.
- next-seo / next-sitemap: NOT installed — SEO is done with Next.js built-in `metadata`, `sitemap.ts`, `robots.ts` and JSON-LD. Do not claim otherwise.
- Front-End Checklist / OWASP / Node Best Practices: audit standards only, NOT installed libraries.

## Placement ownership
- UI/UX + Placement team: hero order, form position, where every photo/button goes.
- Content team: text, Hindi line, mission/vision, faculty/result facts.
- Frontend team (React/Tailwind/Framer Motion): implements placement, animations, mobile/desktop.
- Backend team: form → WhatsApp prefilled message, validation, lead log.
- QA team: checks every placement + every button on phone AND laptop before reporting done.

## Placement rules (enforced, verified by grep + live curl)
- Director photo (director.jpg) appears EXACTLY ONCE — About page only, with Mr. Amit Kumar Sinha + his message.
- Faculty photos only on /faculty. Student photos only on /results. Hostel/library/campus photos only on /facilities (and the 6-photo Gallery, as specified).
- Gallery: exactly 6 photos — campus, classroom (p1), hostel1, hostel2, library, admission. No director/faculty/students.
- p1.jpg hero only on Home (plus Gallery, plus Open Graph metadata image).
- slider/1-3.jpg NEVER used (baked-in old landline 06454-336015 + "22 years").
- Every WhatsApp link is `wa.me/919771347243?text=...` with a pre-filled message (general / per-course / form submit). Zero bare wa.me links — verified in rendered HTML.
- Phones only 9771347243 / 9031251134. No Facebook/Instagram/YouTube/tracking. No invented fee/rank/year/email. No stock photos.

## Routes (all return 200, verified live)
`/`, `/about`, `/courses`, `/courses/jee`, `/courses/neet`, `/courses/foundation`,
`/faculty`, `/results`, `/facilities`, `/fees`, `/admission`, `/gallery`, `/reviews`,
`/contact`, `/faq`, `/blog`, `/blog/choosing-coaching-purnea`, `/blog/jee-neet-2027-plan`,
`/privacy`, `/terms`, `/refund`, `/admin` (demo lead log, localStorage only — never call it a CRM),
`/sitemap.xml`, `/robots.txt`. Unknown routes return the custom 404 page.

## What is NOT in this build (say it plainly)
- No backend / database / server actions. Forms save to a device-local demo log and open a pre-filled WhatsApp message. A real CRM (Google Sheet / server) is Phase 2.
- No login, no payment, no online test, no parent app — their buttons were left OUT, not faked.
- NOT deployed. A Vercel deploy needs a GitHub repo + a Vercel account, which this build does not have. Do not invent a deploy URL. To deploy: push this folder to GitHub, import the repo in Vercel, `npm run build` is the build command.
