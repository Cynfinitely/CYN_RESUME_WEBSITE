#!/usr/bin/env node
/**
 * Reject AI tool attribution in commit messages and PR titles/bodies.
 * Catches co-author style trailers that name an AI tool (Cursor, Claude,
 * Copilot, …) and "Generated with …" footers. Human co-authors pass.
 *
 * Usage:
 *   node scripts/check-ai-attribution.mjs <commit-msg-file>     # Husky commit-msg
 *   printf '%s' "$PR_BODY" | node scripts/check-ai-attribution.mjs --stdin --label "PR body"
 *   node scripts/check-ai-attribution.mjs --git-range <base>..<head>
 *
 * Rule: docs/agent-rules/no-ai-attribution.md
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RULE_DOC = "docs/agent-rules/no-ai-attribution.md";

const AI_TOOL_PATTERN =
  /\b(claude|anthropic|cursor|cursoragent|copilot|openai|chatgpt|codex|gemini|devin|aider|windsurf|codeium|jules)\b/i;

const ATTRIBUTION_TRAILER_PATTERN =
  /^\s*(co-authored-by|signed-off-by|assisted-by|generated-by|ai-assisted-by)\s*:\s*(.+)$/i;

const FOOTER_PATTERNS = Object.freeze([
  /^\s*🤖/u,
  /\b(generated|created|written|made)\s+(with|by|using)\s+\[?(claude|cursor|copilot|chatgpt|codex|gemini|devin|aider|windsurf)\b/i,
]);

/** Git's scissors line (`commit --verbose`): everything below is the diff. */
const SCISSORS = "# ------------------------ >8 ------------------------";

/**
 * @param {string} text
 * @param {{ skipGitComments?: boolean }} [options]
 * @returns {string[]} offending lines, trimmed
 */
export function findAiAttribution(text, options = {}) {
  const offending = [];
  for (const rawLine of text.split(/\r?\n/)) {
    if (options.skipGitComments) {
      if (rawLine.startsWith(SCISSORS)) break;
      if (rawLine.startsWith("#")) continue;
    }
    const line = rawLine.trim();
    if (!line) continue;
    const trailer = ATTRIBUTION_TRAILER_PATTERN.exec(line);
    if (trailer && AI_TOOL_PATTERN.test(trailer[2])) {
      offending.push(line);
      continue;
    }
    if (FOOTER_PATTERNS.some(pattern => pattern.test(line))) {
      offending.push(line);
    }
  }
  return offending;
}

/**
 * @param {string} range e.g. `abc123..def456`
 * @returns {{ label: string, text: string }[]}
 */
function readCommitMessages(range) {
  const output = execFileSync(
    "git",
    ["log", "--format=%h %s%x1f%B%x00", range],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  );
  return output
    .split("\0")
    .map(entry => entry.replace(/^\n/, ""))
    .filter(entry => entry.trim())
    .map(entry => {
      const [label, text = ""] = entry.split("\x1f");
      return { label: `commit ${label}`, text };
    });
}

/**
 * @param {string[]} argv
 * @returns {{ label: string, text: string, skipGitComments: boolean }[]}
 */
function collectInputs(argv) {
  const labelIndex = argv.indexOf("--label");
  const label = labelIndex >= 0 ? argv[labelIndex + 1] : undefined;
  if (argv.includes("--stdin")) {
    return [
      {
        label: label ?? "stdin",
        text: fs.readFileSync(0, "utf8"),
        skipGitComments: false,
      },
    ];
  }
  const rangeIndex = argv.indexOf("--git-range");
  if (rangeIndex >= 0) {
    const range = argv[rangeIndex + 1];
    if (!range) throw new Error("--git-range needs <base>..<head>");
    return readCommitMessages(range).map(entry => ({
      ...entry,
      skipGitComments: false,
    }));
  }
  const file = argv[0];
  if (!file) {
    throw new Error(
      "Pass a commit message file, --stdin, or --git-range <base>..<head>"
    );
  }
  return [
    {
      label: label ?? "commit message",
      text: fs.readFileSync(file, "utf8"),
      skipGitComments: true,
    },
  ];
}

function main() {
  let inputs;
  try {
    inputs = collectInputs(process.argv.slice(2));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`AI attribution check failed: ${message}`);
    process.exit(1);
  }

  let failed = false;
  for (const { label, text, skipGitComments } of inputs) {
    const offending = findAiAttribution(text, { skipGitComments });
    if (offending.length === 0) continue;
    failed = true;
    console.error(`AI attribution found in ${label}:`);
    for (const line of offending) console.error(`  ${line}`);
  }

  if (failed) {
    console.error("");
    console.error(
      'Remove AI co-author trailers and "Generated with …" footers. Human co-authors are fine.'
    );
    console.error(`See ${RULE_DOC}.`);
    process.exit(1);
  }
}

const isEntry =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isEntry) main();
