#!/usr/bin/env sh
# Shared Node bootstrap for Husky hooks.
# GUI git clients (Cursor, VS Code) run hooks with a minimal PATH that omits nvm,
# so npx/npm can hang or fail. Source this before any Node tooling:
#   . "$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)/scripts/ensure-node.sh"
#
# When .nvmrc exists, the hook requires that exact Node version (same as CI).
# Without .nvmrc, any Node on PATH is accepted.

ensure_node() {
  # Husky runs from the repo root; prefer cwd .nvmrc when sourced ($0 is unreliable).
  _nvmrc=
  if [ -f .nvmrc ]; then
    _nvmrc=.nvmrc
  elif [ -f "$(dirname "$0")/../.nvmrc" ]; then
    _nvmrc="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)/.nvmrc"
  fi

  _pinned_node=
  if [ -n "$_nvmrc" ]; then
    _pinned_node=$(tr -d '[:space:]' < "$_nvmrc" | sed 's/^v//')
  fi

  if [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
    # shellcheck disable=SC1090
    . "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
    if [ -n "$_pinned_node" ]; then
      nvm use "$_pinned_node" >/dev/null 2>&1 || true
    fi
  fi

  if ! command -v node >/dev/null 2>&1; then
    echo "❌ Node.js not found in PATH. Install Node ${_pinned_node:-(any LTS)} or configure nvm."
    exit 1
  fi

  if [ -z "$_pinned_node" ]; then
    return 0
  fi

  _current_node=$(node -p "process.versions.node")
  # An exact pin ("22.22.2") must match exactly; a major or minor pin ("22",
  # "22.22") matches any version under it.
  _matches=no
  if [ "$_current_node" = "$_pinned_node" ]; then
    _matches=yes
  else
    case "$_current_node" in
      "$_pinned_node".*) _matches=yes ;;
    esac
  fi
  if [ "$_matches" != yes ]; then
    echo "❌ This hook requires Node.js ${_pinned_node} (current: v${_current_node}). See .nvmrc."
    echo "   GUI git may not load nvm. Run: source ~/.nvm/nvm.sh && nvm use ${_pinned_node}"
    exit 1
  fi
}

ensure_node
