# Portfolio Project — Dashboard

> **Repo:** `NooriBilal/portfolio` | **Branch:** `main`  
> **Stack:** Next.js · TypeScript · Tailwind CSS  
> **Letztes Update:** 2026-06-02

---

## Projekt-Status

| Bereich | Status |
|---|---|
| Grundstruktur & Routing | ✅ Fertig |
| Hero-Section | ✅ Fertig |
| About-Section | ✅ Fertig |
| Skills-Section | ✅ Fertig |
| Experience-Section | ⚠️ Platzhalter |
| Education-Section | ⚠️ Platzhalter |
| Certificates-Section | ⚠️ Platzhalter |
| Projects-Section (UFC API) | ✅ Fertig |
| Contact-Form | ✅ Fertig |
| Navbar & Footer | ✅ Fertig |
| Echte Inhaltsdaten | 🔴 TODO |
| CV PDF | 🔴 TODO |
| LinkedIn URL | 🔴 TODO |
| Deployment (Vercel) | 🔴 TODO |

---

## Offene TODOs (aus `portfolio.ts`)

```dataview
TABLE file.mtime AS "Geändert"
FROM "tasks"
WHERE status != "done"
SORT file.mtime DESC
```

---

## Sessions

```dataview
TABLE ohne-id file.link AS "Session", summary AS "Zusammenfassung"
FROM "sessions"
SORT file.name DESC
```

---

## Entscheidungen (ADRs)

```dataview
LIST
FROM "decisions"
SORT file.name ASC
```
