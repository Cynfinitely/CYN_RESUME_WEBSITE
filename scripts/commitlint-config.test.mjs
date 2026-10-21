import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

/**
 * @param {string} message
 * @returns {{ status: number | null, stderr: string, stdout: string }}
 */
function lint(message) {
  const result = spawnSync("npx", ["--no", "--", "commitlint"], {
    cwd: repoRoot,
    encoding: "utf8",
    input: message.endsWith("\n") ? message : `${message}\n`,
  });
  return {
    status: result.status,
    stderr: result.stderr ?? "",
    stdout: result.stdout ?? "",
  };
}

test("feat header passes", () => {
  assert.equal(lint("feat: add commitlint hook").status, 0);
});

test("feat with scope passes", () => {
  assert.equal(lint("feat(api): add wizard step").status, 0);
});

test("fix header passes", () => {
  assert.equal(lint("fix: handle empty invoice").status, 0);
});

test("chore header passes", () => {
  assert.equal(lint("chore: bump lockfile").status, 0);
});

test("capitalized subject is allowed", () => {
  assert.equal(lint("feat: Add commitlint hook").status, 0);
});

test("merge pull request is ignored", () => {
  assert.equal(lint("Merge pull request #1493 from org/branch").status, 0);
});

test("free-form body is allowed", () => {
  assert.equal(lint("feat: rename helper\n\nnotes for reviewers\n").status, 0);
});

test("body longer than 100 chars is allowed", () => {
  const longLine = "x".repeat(140);
  assert.equal(lint(`feat: keep long bodies\n\n${longLine}\n`).status, 0);
});

test("GitHub slug title fails", () => {
  const result = lint(
    "Add commitlint so conventional commit messages are actually enforced"
  );
  assert.notEqual(result.status, 0);
});

test("empty message fails", () => {
  const result = lint("");
  assert.notEqual(result.status, 0);
});

test("missing type fails", () => {
  const result = lint("add commitlint without a type");
  assert.notEqual(result.status, 0);
});

test("WIP prefix is not a conventional type", () => {
  const result = lint("WIP: stuff");
  assert.notEqual(result.status, 0);
});

/**
 * @param {string} title
 * @returns {{ status: number | null, stderr: string, stdout: string }}
 */
function lintPrTitle(title) {
  const result = spawnSync("sh", ["scripts/lint-pr-title.sh"], {
    cwd: repoRoot,
    encoding: "utf8",
    env: { ...process.env, PR_TITLE: title },
  });
  return {
    status: result.status,
    stderr: result.stderr ?? "",
    stdout: result.stdout ?? "",
  };
}

test("lint-pr-title passes a conventional header", () => {
  assert.equal(
    lintPrTitle("feat(api): add customer export endpoint").status,
    0
  );
});

test("lint-pr-title explains GitHub branch-slug titles", () => {
  const result = lintPrTitle("1322 api add customer export");
  assert.notEqual(result.status, 0);
  const output = `${result.stdout}${result.stderr}`;
  assert.match(output, /type-empty|subject-empty/);
  assert.match(output, /branch name/i);
});

test("bare env branch names are not conventional types", () => {
  // Promotion PRs titled "dev" / "test" are skipped in CI
  // (.github/workflows/pr-checks.yml), not by allowing these as types.
  assert.notEqual(lint("dev").status, 0);
  assert.notEqual(lint("test").status, 0);
  assert.notEqual(lint("main").status, 0);
});
