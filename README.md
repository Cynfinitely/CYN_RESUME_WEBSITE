# Celal Yasin Nari — resume website

- [Live site](https://cyn-resume-website.vercel.app/)

Senior Full Stack Developer portfolio — a newspaper-style personal brand site built with Next.js (App Router), TypeScript, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `data/` — all content: `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `socials.ts`. Edit these to update the site.
- `components/SectionModal.tsx` — teaser card + full-screen section. Each section has its own URL (`/#about`, `/#skills`, `/#projects`, `/#experience`, `/#youtube`), so the browser Back button closes it and sections can be linked directly.
- `components/Modal/InkModal.tsx` — the dialog itself (focus trap, Escape, reduced motion).
- `app/globals.css` — design tokens (palette, type scale, spacing) and all styles.
- `lib/youtube.ts` — latest videos from the channel RSS feed, revalidated hourly.

## Deploy

Deployed on Vercel. Set the project root directory to `/` (repo root, not `cyn_resume/`).
