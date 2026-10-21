#!/usr/bin/env sh
# Soft warning when changed hand-written source files exceed ~600 lines.
# Never fails the push (exit 0). Rule: docs/agent-rules/file-size-limit.md.
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

LIMIT="${FILE_SIZE_LIMIT:-600}"

# Prefer files passed as args; otherwise use CHANGED_FILES env from pre-push.
if [ "$#" -gt 0 ]; then
  CANDIDATES=$(printf '%s\n' "$@")
elif [ -n "${CHANGED_FILES:-}" ]; then
  CANDIDATES="$CHANGED_FILES"
else
  echo "⏭️  No changed files list for file-size check; skipping."
  exit 0
fi

# Tests, generated output and migrations are exempt. Add repo-specific
# generated paths here.
is_excluded() {
  f=$1
  case "$f" in
    *.test.*|*.spec.*) return 0 ;;
  esac
  case "$f" in
    */__tests__/*|tests/*|*/tests/*|*node_modules/*|*.next/*|dist/*|*/dist/*|build/*|*/generated/*|coverage/*|*/migrations/*) return 0 ;;
  esac
  return 1
}

offenders=
while IFS= read -r f; do
  [ -z "$f" ] && continue
  case "$f" in
    *.ts|*.tsx|*.js|*.jsx|*.mjs|*.cjs|*.py|*.go|*.rb|*.java|*.kt|*.cs|*.swift|*.vue|*.svelte) ;;
    *) continue ;;
  esac
  if is_excluded "$f"; then
    continue
  fi
  if [ ! -f "$ROOT_DIR/$f" ]; then
    continue
  fi
  lines=$(wc -l < "$ROOT_DIR/$f" | tr -d ' ')
  if [ "$lines" -gt "$LIMIT" ]; then
    offenders="${offenders}${lines}	${f}
"
  fi
done <<EOF
$CANDIDATES
EOF

if [ -z "$offenders" ]; then
  echo "✅ No changed hand-written files over ${LIMIT} lines"
  exit 0
fi

echo "⚠️  File size warning: changed files exceed ~${LIMIT} lines (non-blocking)."
echo "    Prefer co-located splits (hooks, sections, helpers). See docs/agent-rules/file-size-limit.md."
printf '%s' "$offenders" | sort -rn | while IFS= read -r row; do
  [ -n "$row" ] && printf '    %s\n' "$row"
done
echo ""
exit 0
