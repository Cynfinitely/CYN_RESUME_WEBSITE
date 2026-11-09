---
description: Plan, implement, commit, push and open a PR for a GitHub issue
argument-hint: <issue-number | issue-url> [extra instructions]
---

Work on the GitHub issue given in `$ARGUMENTS`. The first word is the issue
number or URL. Anything after it is an extra instruction from me and overrides
the defaults below (for example `--draft`, `no migration`, `base main`).

This command is generic. It does not know this repo, so step 1 learns it.
Where `AGENTS.md` or `docs/agent-rules/` say something different from this
file, follow the repo.

## 1. Learn the repo (read only)

Find each of these and keep the answers for the plan. Do not guess. If
something cannot be found, use the default and say so in the plan.

| What                | Where to look, in order                                                                                                                                                  | Default if not found                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| PR base branch      | `AGENTS.md` _Learned Workspace Facts_, `CONTRIBUTING.md`, then the base of recent merged PRs (`gh pr list --state merged --limit 20 --json baseRefName`)                 | the default branch (`gh repo view --json defaultBranchRef`) |
| Hard stops          | `AGENTS.md`, then every file in `docs/agent-rules/` that the change could touch                                                                                          | none                                                        |
| Branch names        | a documented convention, then recent branch names (`gh pr list --state merged --limit 20 --json headRefName`)                                                            | `<issue-number>-<short-slug>`                               |
| Commit and PR title | `commitlint.config.*`, then `git log --format=%s -30 origin/<base>` for the scopes in use                                                                                | conventional commits                                        |
| Checks              | `.husky/pre-commit`, `scripts/pre-push-check.sh`, `package.json` scripts, or the stack's own (`Makefile`, `pyproject.toml`, `go test`), and `.github/workflows/`         | lint, typecheck, test, build if they exist                  |
| PR body             | `.github/PULL_REQUEST_TEMPLATE.md`, `.github/pull_request_template.md`, `.github/PULL_REQUEST_TEMPLATE/`, `docs/pull_request_template.md`                                | Summary, Changes, How to test, Risks                        |
| Shared state        | migration folders (`prisma/migrations`, `drizzle/`, `migrations/`, `alembic/versions`, `db/migrate`), generated files (API specs, clients, lockfiles), translation files | none                                                        |
| Docs tied to code   | any rule that says "when X changes, update Y" (knowledge articles, changelogs, architecture docs, env var lists)                                                         | none                                                        |
| Codebase map        | `graphify-out/`, a docs index, or an architecture doc                                                                                                                    | search the code                                             |

## 2. Read the issue

1. `gh issue view <n> --comments`. Open linked issues, parent issues, and
   images if they hold requirements.
2. Look for earlier work: `gh pr list --state all --search "<n>"`. If the issue
   is closed or an open PR already covers it, stop and tell me.
3. Write down the acceptance criteria. If the issue lists none, derive them and
   mark them as derived so I can correct them.

## 3. Get onto the right branch

1. `git status` must be clean. If it is not, stop and ask. Do not stash or
   discard my changes.
2. `git fetch origin`.
3. On the base branch, the default branch, or a branch for something else:
   create the issue branch from `origin/<base>`. Already on a branch with
   commits: check they belong to this issue, otherwise ask.
4. Note how far the branch is behind `origin/<base>`.

## 4. Size the change

1. Read the code involved before planning. Use the codebase map if there is one.
2. Call the change **small** (one area, no shared state), **normal**, or
   **risky**. Risky means any of: schema or migration, auth or permissions,
   money, personal data, a public API contract, deleting data, CI or infra.
3. If it touches shared state from step 1, list the open PRs that change the
   same paths (`gh pr list --state open --json number,title,headRefName,files`)
   and read their changes. Name each overlap.
4. If it is too big for one reviewable PR, propose a split.

## 5. Present the plan and wait

Match the length to the size. A small change gets a few lines. Include:

- What the issue asks, in two or three sentences, and the acceptance criteria.
- Files or areas to change, and the approach.
- Tests to add or change. For a bug, the test that fails today.
- Docs, generated files, and migrations that move with the change, and any
  overlap from step 4.
- The checks that will run, and what only I can verify (E2E, UI on a device,
  a deployed environment, external accounts).
- Defaults used in step 1 and open questions. Ask about anything ambiguous
  here, before writing code.

Wait for my approval. If I change the plan, show only the parts that changed.

## After I approve, carry on without checking in

6. **Sync.** Bring `origin/<base>` into the branch before writing code, with
   the repo's documented strategy (default: merge). Stop and ask if a conflict
   is not obvious to resolve.
7. **Implement** the plan and follow the hard stops. Add tests for behaviour
   changes. Stay in scope: note unrelated problems for the report and do not
   fix them.
8. **Generated files.** Run the repo's generators instead of writing their
   output by hand: migrations (generate-only, after step 6, per
   `docs/agent-rules/generated-migrations.md`), API specs and clients,
   translation sync. If an open PR from step 4 changes the same models in a
   migration, stop and ask whether to wait for it or merge its branch first.
9. **Verify.** Run the tests for the changed area and the typecheck. If the
   change is user visible and the repo documents how to run the app, run it
   and check the change works.
10. **Re-sync.** `git fetch origin`. If `origin/<base>` moved, merge it again.
    If that brought in new migrations, regenerate mine with the tool so it
    sorts last. Never rename a migration folder or edit an applied migration.
11. **Pre-commit.** Stage only the files of this change (no stray files). Run
    the repo's pre-commit hook (for example `sh .husky/pre-commit`). Fix every
    failure and re-run until it passes.
12. **Commit** in the repo's format with a body that says why. Several commits
    are fine when each is one logical step. No AI attribution.
13. **Push** with `git push -u origin HEAD`. If the pre-push hook fails, fix
    the cause, repeat step 11, commit the fix, and push again.
14. **Open the PR** with `gh pr create --base <base>`. The title is in commit
    format (squash merges use it). The body fills every section of the PR
    template; write "None" instead of deleting a section. Add `Closes #<n>`,
    or `Refs #<n>` when the PR covers only part of the issue. Open it as a
    draft if an acceptance criterion is not verified, or if I asked for one.
15. **CI.** Look at `gh pr checks` once. If a finished check failed because of
    this change, fix it and push. Do not wait on long suites.
16. **Report:** the PR link; each acceptance criterion with how it was
    verified, or why not; anything you could not fix; what I must run or check
    myself; problems you noticed outside the scope.

## Stop and ask when

- The working tree is dirty, or the issue is still unclear after reading it.
- A conflict is not obvious, or an open PR overlaps on shared state.
- Passing a check would need a hard stop broken or a gate weakened.
- The work needs secrets, credentials, a paid service, or an external account.
- The work grows well past the approved plan.
- A step would delete or rewrite data outside a local database.

## Never

- `--no-verify`, or deleting, skipping, or loosening tests, thresholds, or lint
  rules to get green.
- Hand-written migrations.
- AI attribution in commits, PR titles, or PR bodies.
- Force-pushing or rewriting pushed history without asking.
- Committing straight to the base branch.
