#!/usr/bin/env sh
# Lint a GitHub PR title with the same commitlint config as commit-msg.
# GitHub often copies the branch name into the title (hyphens → spaces).
# That string is not empty, but commitlint still reports type-empty /
# subject-empty because there is no `type:` prefix.
set -eu

title=${1:-${PR_TITLE:-}}

if [ -z "$title" ]; then
  printf '%s\n' 'PR title is empty. Use: type(optional-scope): subject'
  printf '%s\n' 'Example: feat(api): add customer export endpoint'
  exit 1
fi

if printf '%s\n' "$title" | npx --no -- commitlint; then
  exit 0
fi

printf '%s\n' ''
printf '%s\n' 'PR title must be a conventional commit header: type(optional-scope): subject'
printf '%s\n' 'GitHub often fills the title from the branch name (1322-add-export →'
printf '%s\n' '"1322 add export"). That is not a type/subject header, so commitlint'
printf '%s\n' 'reports type-empty and subject-empty.'
printf '%s\n' 'Edit the GitHub PR title (not the branch). The PR title check re-runs on edited.'
printf '%s\n' 'Example: feat(api): add customer export endpoint'
exit 1
