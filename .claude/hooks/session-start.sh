#!/bin/bash
BRANCH=$(git branch --show-current 2>/dev/null || echo "unbekannt")
LAST3=$(git log --oneline -3 2>/dev/null || echo "kein git log")
TODOS=$(grep -c "TODO:" src/data/portfolio.ts 2>/dev/null || echo "0")
LAST_SESSION=$(grep -m1 "^## " docs/obsidian/🔄\ Session-Tracker.md 2>/dev/null | head -1 || echo "kein Tracker")

jq -nc \
  --arg b "$BRANCH" \
  --arg l "$LAST3" \
  --arg t "$TODOS" \
  --arg s "$LAST_SESSION" '{
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: "=== SESSION KONTEXT ===\nBranch: \($b)\nOffene TODOs in portfolio.ts: \($t)\nLetzter Stand: \($s)\nLetzte Commits:\n\($l)\n====================="
  }
}'
