---
date: 2026-05-31
status: akzeptiert
---

# ADR-002 — Zentraler Daten-Store in `portfolio.ts`

**Status:** Akzeptiert  
**Datum:** 2026-05-31

## Kontext

Portfolio-Daten (Name, Skills, Projekte etc.) werden in mehreren Komponenten gebraucht.

## Entscheidung

Alle Daten in `src/data/portfolio.ts` mit TypeScript-Interfaces. Kein CMS, kein API-Call.

## Konsequenzen

- `+` Eine Datei zum Bearbeiten für Content-Updates
- `+` Vollständig typsicher
- `+` Kein Backend nötig
- `-` Rebuild nötig bei Content-Änderungen (kein Hot-CMS)
- `-` Nicht geeignet wenn viele Autoren oder häufige Updates
