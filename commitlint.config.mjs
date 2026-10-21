/**
 * Shared commitlint config for Husky commit-msg and CI PR-title lint.
 * Merge / revert / semver messages are ignored by commitlint defaults —
 * keep defaultIgnores: true (do not set false).
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  defaultIgnores: true,
  helpUrl: "https://www.conventionalcommits.org/en/v1.0.0/",
  rules: {
    // Header-only gate: bodies may hold long HEREDOCs.
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
    // GitHub / Cursor titles often capitalize the first subject word.
    "subject-case": [0],
  },
};

export default config;
