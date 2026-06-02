---
date: 2026-05-31
status: akzeptiert
---

# ADR-001 — Next.js als Framework

**Status:** Akzeptiert  
**Datum:** 2026-05-31

## Kontext

Portfolio-Website benötigt SSR/SSG für gute SEO-Werte und einfaches Vercel-Deployment.

## Entscheidung

Next.js mit App Router (nicht Pages Router).

## Konsequenzen

- `+` Sehr einfaches Deployment auf Vercel
- `+` Server Components für bessere Performance
- `+` Integriertes Routing ohne react-router
- `-` Größeres Bundle als Vite + React SPA
- `-` Breaking Changes in App Router vs. Pages Router (→ `AGENTS.md` Hinweis beachten)
