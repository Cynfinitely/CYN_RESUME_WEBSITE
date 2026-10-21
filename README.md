# Celal Yasin Nari — resume website

- [Live site](https://cyn-resume-website.vercel.app/)

Senior Full Stack Developer portfolio — a newspaper-style personal brand site built with Next.js (App Router), TypeScript, and Framer Motion.

## Development

Node version: `.nvmrc` (22).

```bash
npm install          # also installs the Git hooks (Husky)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command             | What it does                  |
| ------------------- | ----------------------------- |
| `npm run lint`      | ESLint, zero warnings allowed |
| `npm run typecheck` | TypeScript, no emit           |
| `npm run format`    | Prettier, writes changes      |
| `npm run build`     | Production build              |

Git hooks: pre-commit scans for secrets (needs `brew install gitleaks`) and formats/lints staged files; commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/); pre-push runs lint, typecheck and build. Agent and contributor rules: [`AGENTS.md`](AGENTS.md).

## Structure

- `data/` — all content: `profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `socials.ts`. Edit these to update the site.
- `components/SectionModal.tsx` — teaser card + full-screen section. Each section has its own URL (`/#about`, `/#skills`, `/#projects`, `/#experience`, `/#youtube`), so the browser Back button closes it and sections can be linked directly.
- `components/Modal/InkModal.tsx` — the dialog itself (focus trap, Escape, reduced motion).
- `app/globals.css` — imports the stylesheets in `app/styles/` (design tokens in `tokens.css`, then one file per section).
- `lib/youtube.ts` — latest videos from the channel RSS feed, revalidated hourly.

## Deploy

Deployed on Vercel from the repo root. Every push to `master` deploys.
