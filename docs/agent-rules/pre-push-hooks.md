# Pre-push hook

`.husky/pre-push` runs `scripts/pre-push-check.sh`. It runs these `package.json` scripts in order, skipping any that don't exist:

```text
lint → typecheck → build
```

Then it runs Prettier on the files in the push range and prints a soft warning for changed files over ~600 lines. This repo has no CI workflow, so the hook is the only gate before Vercel deploys.

## Do

```text
Before saying a change is ready to push, run: sh scripts/pre-push-check.sh
Fix failures at the source (types, tests, unused exports)
```

## Do not

```text
❌ Push with --no-verify to get past a red hook
❌ Delete or skip a failing test to make the suite pass
❌ Lower a coverage threshold or raise a warning budget to get green
❌ Report "tests pass" without having run them
```

Per-push override for a quick fix: `PRE_PUSH_SCRIPTS="lint" git push`.
