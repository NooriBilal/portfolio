#!/bin/bash
# Desktop-Benachrichtigung wenn Claude fertig ist
# Funktioniert auf macOS (osascript) und Linux (notify-send)
if command -v osascript &>/dev/null; then
  osascript -e 'display notification "Claude Code ist fertig" with title "Portfolio"'
elif command -v notify-send &>/dev/null; then
  notify-send "Portfolio" "Claude Code ist fertig"
fi
printf '\033]777;notify;Claude fertig;Portfolio-Task abgeschlossen\007'
