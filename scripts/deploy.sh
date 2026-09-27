#!/usr/bin/env bash
set -euo pipefail

# Builds the site and publishes dist/ to the gh-pages branch,
# which is the branch GitHub Pages serves the site from.

BRANCH=gh-pages
npm run build
cp dist/index.html dist/404.html

WORKTREE="$(mktemp -d)"
cleanup() {
  git worktree remove --force "$WORKTREE" 2>/dev/null || true
}
trap cleanup EXIT

git fetch origin "$BRANCH"
git worktree prune
git worktree add --force "$WORKTREE" "$BRANCH"

find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$WORKTREE"/

git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "Nothing new to publish."
  exit 0
fi

git -C "$WORKTREE" commit -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -C "$WORKTREE" push origin "$BRANCH"
echo "Published to the $BRANCH branch."
