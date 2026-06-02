# Portfolio — Dashboard

> **Stack:** Next.js 16 · TypeScript · Tailwind v4  
> **Branch:** `claude/serene-archimedes-6HdsP` | **Letzter Commit:** `e7878d4`  
> **Schnellzugriff:** [[🔄 Session-Tracker]] ← hier immer starten

---

## Projekt-Status (2026-06-02)

| Bereich | Status | Datei |
|---|---|---|
| Grundstruktur & Routing | ✅ Fertig | `src/app/page.tsx` |
| Hero, About, Skills, Contact | ✅ Fertig | `src/components/sections/` |
| Experience / Education | ⚠️ Platzhalter | `portfolio.ts:84–148` |
| Certificates | ⚠️ Platzhalter | `portfolio.ts:162–187` |
| Projects (UFC API) | ✅ Fertig | `portfolio.ts:205–262` |
| LinkedIn URL | 🔴 TODO | `portfolio.ts:11` |
| CV PDF | 🔴 TODO | `/public/cv-bilal-noori.pdf` |
| Contact Form Backend | 🔴 TODO | EmailJS / Resend |
| SEO Metadata | 🔴 TODO | `src/app/layout.tsx` |
| Deployment (Vercel) | 🔴 TODO | — |

---

## System-Setup (Claude Code)

| Feature | Status |
|---|---|
| `.claude/settings.json` (Hooks) | ✅ Eingerichtet |
| Session-Start-Hook (Auto-Kontext) | ✅ Aktiv |
| Stop-Hook (Notification) | ✅ Aktiv |
| Path-scoped Rules (Token-Sparen) | ✅ Aktiv |
| Obsidian MCP-Server | 🔴 Manuell einrichten (Anleitung unten) |
| `/run-skill-generator` | 🔴 Einmalig ausführen |

---

## Obsidian MCP einrichten (3 Schritte)

**Schritt 1** — In Obsidian:
> Einstellungen → Community Plugins → `Local REST API` installieren & aktivieren  
> API-Key kopieren (steht im Plugin-Fenster)

**Schritt 2** — Terminal (einmalig):
```bash
# uvx muss installiert sein (pip install uv)
claude mcp add --transport stdio obsidian -- uvx mcp-obsidian
# Dann API-Key als Env-Var setzen wenn gefragt
```

**Schritt 3** — Testen:
> In Claude Code: `/mcp` eintippen → `obsidian` sollte grün erscheinen

---

## Vault-Struktur

```
docs/obsidian/
├── 🏠 Dashboard.md          ← diese Datei
├── 🔄 Session-Tracker.md    ← immer zuerst lesen!
├── sessions/                ← abgeschlossene Sessions
├── tasks/
│   ├── ✅ Erledigte Aufgaben.md
│   └── ⚠️ Offene TODOs.md
└── decisions/               ← ADRs
    ├── ADR-001 — Next.js.md
    └── ADR-002 — Daten-Store.md
```

---

## Dataview-Queries (Plugin nötig)

```dataview
TABLE file.mtime AS "Geändert"
FROM "sessions"
SORT file.name DESC
LIMIT 5
```
