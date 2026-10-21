#!/usr/bin/env sh
# Pre-push quality gate. Runs the package.json scripts named in PRE_PUSH_SCRIPTS
# (missing scripts are skipped), then Prettier on changed files and a soft
# file-size warning.
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

# GUI git clients (Cursor, VS Code) run hooks with a minimal PATH that omits nvm.
# shellcheck disable=SC1091
. "$ROOT_DIR/scripts/ensure-node.sh"

# Order matters: cheap checks first so a lint error fails in seconds.
# Override per repo here, or per push: PRE_PUSH_SCRIPTS="lint test" git push
PRE_PUSH_SCRIPTS="${PRE_PUSH_SCRIPTS:-lint typecheck build}"

echo "🚀 Running pre-push checks (Node $(node -v))..."

# Integration branch to diff against: first remote branch that exists.
resolve_diff_base_ref() {
  for ref in origin/dev origin/develop origin/main origin/master; do
    if git show-ref --verify --quiet "refs/remotes/$ref"; then
      printf '%s' "$ref"
      return
    fi
  done
  printf '%s' ''
}

# Files being pushed (the pre-push hook passes refs via env).
collect_changed_files() {
  diff_base_ref=$(resolve_diff_base_ref)

  if [ -n "${PRE_PUSH_LOCAL_SHA:-}" ] && [ -n "${PRE_PUSH_REMOTE_SHA:-}" ]; then
    if [ "$PRE_PUSH_REMOTE_SHA" = "0000000000000000000000000000000000000000" ]; then
      if [ -n "$diff_base_ref" ]; then
        git diff --name-only "$(git merge-base "$diff_base_ref" "$PRE_PUSH_LOCAL_SHA")" "$PRE_PUSH_LOCAL_SHA"
        return
      fi
      git diff --name-only "$PRE_PUSH_LOCAL_SHA~1" "$PRE_PUSH_LOCAL_SHA" 2>/dev/null || git diff --name-only HEAD
      return
    fi
    git diff --name-only "$PRE_PUSH_REMOTE_SHA" "$PRE_PUSH_LOCAL_SHA"
    return
  fi

  if [ -n "$diff_base_ref" ]; then
    git diff --name-only "$diff_base_ref"...HEAD
    return
  fi

  git diff --name-only HEAD~1 HEAD 2>/dev/null || true
}

CHANGED_FILES=$(collect_changed_files || true)

has_script() {
  node -e 'process.exit(require("./package.json").scripts?.[process.argv[1]] ? 0 : 1)' "$1"
}

for script in $PRE_PUSH_SCRIPTS; do
  if has_script "$script"; then
    echo "🔍 npm run $script"
    npm run --silent "$script" || {
      echo "❌ Pre-push check '$script' failed. Fix it before pushing."
      exit 1
    }
  else
    echo "⏭️  No '$script' script in package.json; skipping."
  fi
done

echo "🎨 Checking code formatting on changed files..."
FORMATTABLE_CHANGED=$(
  printf '%s\n' "$CHANGED_FILES" \
    | grep -E '\.(js|jsx|mjs|cjs|ts|tsx|json|css|scss|md|ya?ml)$' \
    | grep -Ev '^node_modules/' \
    | while IFS= read -r f; do
        [ -n "$f" ] && [ -e "$ROOT_DIR/$f" ] && printf '%s\n' "$f"
      done \
    || true
)

if [ -z "$FORMATTABLE_CHANGED" ]; then
  echo "⏭️  No formattable files in push range; skipping Prettier."
elif [ "$(printf '%s\n' "$FORMATTABLE_CHANGED" | wc -l | tr -d ' ')" -gt 200 ]; then
  echo "ℹ️  Large change set; running full Prettier check..."
  npx --no -- prettier --check . || {
    echo "❌ Code formatting issues found. Run 'npm run format' to fix them."
    exit 1
  }
else
  FORMATTABLE_TRACKED=$(printf '%s\n' "$FORMATTABLE_CHANGED" | xargs git ls-files 2>/dev/null || true)
  if [ -z "$FORMATTABLE_TRACKED" ]; then
    echo "⏭️  No tracked formattable files in push range; skipping Prettier."
  else
    printf '%s\n' "$FORMATTABLE_TRACKED" | xargs npx --no -- prettier --check --ignore-unknown || {
      echo "❌ Code formatting issues found. Run 'npm run format' to fix them."
      exit 1
    }
  fi
fi

echo "📏 Checking changed file sizes (soft warning)..."
CHANGED_FILES="$CHANGED_FILES" sh "$ROOT_DIR/scripts/check-file-size.sh" || true

echo "✅ All pre-push checks passed!"
