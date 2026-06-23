# WORKLOG — Portfolio Projekt

> **Protokoll-Regel:** Jeder Eintrag muss einen Git-Commit-Hash haben.  
> Ohne Hash = nicht verifiziert. Nie auf Spekulationen verlassen, immer `git log` nutzen.

---


---

## 2026-06-03 | Automatisch
**Commit:** `9152608` — "feat: fill in real content — experience, education, certificates, clean up TODO projects"
**Was:** Echte Inhalte eingetragen: Ausbildung Behrens & Schuleit, Berufsschule Heinrich-Hertz-Berufskolleg, Dublin-Zertifikat; TODO-Projekte und Placeholder-Erfahrungen entfernt
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts

## 2026-06-02 | Session 3

**Commit:** `ad5567c` — "Add files via upload"  
**Was:** Zertifikat PDF hochgeladen  
**Datei:** `public/Certificate ST - Bilal NOORI (1).pdf`

**Commit:** *(dieser)* — Obsidian-System + WORKLOG  
**Was:**
- `docs/obsidian/` Vault-Struktur mit Dashboard, Sessions, Tasks, Decisions
- `WORKLOG.md` (dieses Dokument) als Anti-Halluzinations-Protokoll
- `CLAUDE.md` mit Effizienz-Regeln erweitert
- `scripts/update-worklog.sh` Hook-Skript

**Offen:**
- Echte Inhalte in `src/data/portfolio.ts` (Experience, Education, Certificates)
- Vercel Deployment
- Contact Form Backend (EmailJS / Resend)

---

## 2026-05-31 | Session 2

**Commit:** `407863b` — "feat: complete portfolio website with all sections"  
**Was:** Vollständige Portfolio-Website (+1447 Zeilen, 17 neue Dateien)

**Komponenten erstellt:**
- `Hero.tsx` · `About.tsx` · `Skills.tsx` · `Experience.tsx`
- `Education.tsx` · `Certificates.tsx` · `Projects.tsx` · `Contact.tsx`
- `Navbar.tsx` · `Footer.tsx`
- UI: `ProjectCard` · `TimelineItem` · `SkillBadge` · `SectionTitle` · `GithubIcon`

**Daten-Layer:**
- `src/data/portfolio.ts` — Zentraler Daten-Store, alle Interfaces definiert

**Bug-Fix:**
- lucide-react `Github` Icon fehlte → Custom `GithubIcon.tsx` als Workaround

---

## 2026-05-31 | Session 1

**Commit:** `2f7fc4b` — "feat: initial portfolio website setup"  
**Was:** Next.js-Projekt initialisiert, Tailwind + TypeScript konfiguriert

---

## Anti-Halluzinations-Regeln

1. **Niemals behaupten, etwas sei erledigt ohne Commit-Hash**
2. **Vor jeder Session:** `git log --oneline -10` lesen
3. **TODOs verifizieren:** `grep -r "TODO" src/data/portfolio.ts` ausführen
4. **Änderungen sofort committen** — kein "das kommt noch"
5. **File:Line referenzieren** bei jedem Code-Hinweis (z.B. `portfolio.ts:84`)
