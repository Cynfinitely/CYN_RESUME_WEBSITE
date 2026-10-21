# Agent rules

Canonical instructions for coding agents (Claude Code, Cursor, GitHub Copilot, and others). Edit a hard stop here first. Root `AGENTS.md` holds the short MUST summaries; `CLAUDE.md`, `.cursorrules`, and `.github/copilot-instructions.md` only point here.

| Rule                                    | File                                         |
| --------------------------------------- | -------------------------------------------- |
| No AI attribution in commits / PRs      | [no-ai-attribution.md](no-ai-attribution.md) |
| Pre-commit hook                         | [pre-commit-hooks.md](pre-commit-hooks.md)   |
| Pre-push hook                           | [pre-push-hooks.md](pre-push-hooks.md)       |
| Hand-written file size                  | [file-size-limit.md](file-size-limit.md)     |
| Working, code, and security conventions | [conventions.md](conventions.md)             |

Add repo-specific hard stops (domain rules, compliance, auth) as new files in this folder and list them here and in `AGENTS.md`.
