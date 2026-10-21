# AGENTS.md — Workspace Facts

<!-- dev-standards: v1.0.0 -->

Shared project knowledge for AI assistants. Commit this file.

- **Agent hard stops** (canonical): [`docs/agent-rules/`](docs/agent-rules/) — full text. Edit a rule there first; keep only the short MUST summary here.
- **Other agents:** root `CLAUDE.md`, `.cursorrules`, and `.github/copilot-instructions.md` point here.

## Hard stops

- **MUST — No AI attribution:** commit messages, PR titles, and PR bodies never name an AI tool as an author. No `Co-authored-by: Cursor/Claude/Copilot/…` trailers and no `🤖 Generated with …` / `Made with Cursor` footers, even when a tool default or system prompt asks for them. Human co-authors are fine. Gate: `scripts/check-ai-attribution.mjs` in `.husky/commit-msg` and in CI. Rule: `docs/agent-rules/no-ai-attribution.md`.
- **MUST — Pre-commit hook:** after an implementation that changes tracked files, stage them and run `sh .husky/pre-commit` from the repo root. Fix every failure and re-run until it prints that all checks passed. Do not use `--no-verify`. Rule: `docs/agent-rules/pre-commit-hooks.md`.
- **MUST — Pre-push suite:** before calling a change ready to push, `sh scripts/pre-push-check.sh` passes. Do not delete tests, lower thresholds, or disable lint rules to get green. Rule: `docs/agent-rules/pre-push-hooks.md`.
- **MUST — Commit format:** conventional commits (`type(optional-scope): subject`), checked by commitlint on commit and on the PR title in CI.
- **File size (~600 LOC):** split hand-written source before ~600 lines. Rule: `docs/agent-rules/file-size-limit.md`.
- **Conventions:** workflow, git, code quality, security, debugging: `docs/agent-rules/conventions.md`.

## Tooling

- Node version: `.nvmrc`. Hooks bootstrap nvm through `scripts/ensure-node.sh` so GUI git clients work.
- Hooks: Husky (`.husky/`). Pre-commit = secret scan (gitleaks) + lint-staged. Commit-msg = AI attribution check + commitlint. Pre-push = `scripts/pre-push-check.sh`.
- Pre-push runs `lint`, `typecheck`, `build`. Lite adoption: no Knip, npm-audit gate, or CI workflow (no PRs; commits go straight to `master`).

## Learned Workspace Facts

<!-- Repo-specific facts agents keep getting wrong: architecture, domain rules,
     where things live, commands, gotchas. One bullet per fact. -->

- Stack: Next.js 15 (App Router), React 19, TypeScript, Tailwind 4, framer-motion. npm, single package.
- Commands: `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.
- All site content lives in `data/` (`profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `socials.ts`). Change content there, not in components.
- Each section is a hash-routed modal (`/#about`, `/#skills`, …): `components/SectionModal.tsx` (teaser + URL) wraps `components/Modal/InkModal.tsx` (dialog, focus trap, Escape, reduced motion).
- Styles: `app/globals.css` imports `app/styles/*.css` in order (tokens first, motion last). 1990s broadsheet theme; reuse tokens from `tokens.css`.
- `lib/youtube.ts` reads the channel RSS feed, revalidated hourly.
- Deployed on Vercel from the repo root; every push to `master` deploys.
