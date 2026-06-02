#!/bin/bash
# Automatisches WORKLOG-Update nach jedem git commit.
# Einrichten als Claude Code Hook (PostToolUse auf Bash git commit).
# Oder manuell ausführen: bash scripts/update-worklog.sh "Was wurde gemacht"

set -euo pipefail

HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "kein-commit")
DATE=$(date +%Y-%m-%d)
SUBJECT=$(git log -1 --format="%s" 2>/dev/null || echo "kein commit")
MSG="${1:-Manuelles Update}"

ENTRY="
---

## ${DATE} | Automatisch
**Commit:** \`${HASH}\` — \"${SUBJECT}\"
**Was:** ${MSG}
**TODOs noch offen:**
$(grep -c "TODO:" src/data/portfolio.ts 2>/dev/null || echo "0") TODO-Marker in portfolio.ts
"

# Eintrag am Anfang von WORKLOG.md einfügen (nach der Kopfzeile)
TMPFILE=$(mktemp)
head -7 WORKLOG.md > "$TMPFILE"
echo "$ENTRY" >> "$TMPFILE"
tail -n +8 WORKLOG.md >> "$TMPFILE"
mv "$TMPFILE" WORKLOG.md

echo "✓ WORKLOG.md aktualisiert (Commit: ${HASH})"
