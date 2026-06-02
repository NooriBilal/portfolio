---
status: active
---

# Offene TODOs

Alle Aufgaben sind in `src/data/portfolio.ts` mit `// TODO:` markiert.

## Inhalt (Priorität: Hoch)

- [ ] **LinkedIn URL** eintragen → `personalInfo.linkedin` in `portfolio.ts:12`
- [ ] **CV PDF** hochladen → `/public/cv-bilal-noori.pdf` + `personalInfo.cvUrl` in `portfolio.ts:13`
- [ ] **Berufserfahrung** eintragen → `experiences[]` in `portfolio.ts:84–117`
  - Firma 1 (aktuell, 2024–heute)
  - Firma 2 (2022–2024)
  - Firma 3 (Praktikum, 2021–2022)
- [ ] **Ausbildung** eintragen → `education[]` in `portfolio.ts:132–148`
  - Hochschule / Studiengang
  - Schule / Abitur
- [ ] **Zertifikate** eintragen → `certificates[]` in `portfolio.ts:162–187`
  - 3 echte Zertifikate mit Credential-URLs
  - Zertifikat PDF ist vorhanden: `public/Certificate ST - Bilal NOORI (1).pdf`
- [ ] **Weitere Projekte** ergänzen → `projects[1]` und `projects[2]` in `portfolio.ts:244–262`
  - GitHub URLs
  - Echte Beschreibungen

## Technisch (Priorität: Mittel)

- [ ] **Deployment** → Vercel-Projekt anlegen, `vercel.json` konfigurieren
- [ ] **Contact Form Backend** → Derzeit kein API-Endpoint; EmailJS oder Resend einbinden
- [ ] **SEO** → `metadata` in `layout.tsx` anpassen (Titel, Description, OG-Tags)
- [ ] **Favicon** → Eigenes Favicon in `/public/` ersetzen

## Nice-to-Have (Priorität: Niedrig)

- [ ] Dark/Light Mode Toggle
- [ ] Animationen verfeinern (Framer Motion)
- [ ] Blog-Section
- [ ] i18n (DE/EN)
