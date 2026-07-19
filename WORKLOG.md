# WORKLOG — Portfolio Projekt

> **Protokoll-Regel:** Jeder Eintrag muss einen Git-Commit-Hash haben.  
> Ohne Hash = nicht verifiziert. Nie auf Spekulationen verlassen, immer `git log` nutzen.

---


---

## 2026-07-19 | Automatisch
**Commit:** `190fc75` — "feat(about): profil mit belegbarer substanz statt floskeln"
**Was:** About-Section: belegbare Substanz statt Floskeln, Standort konkretisiert
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-07-18 | Automatisch
**Commit:** `5b99b89` — "fix(content): ausbildung als abgeschlossen — pending- und current-flag entfernt"
**Was:** pending/current-Flags bei Behrens & Schuleit entfernt — Ausbildung abgeschlossen
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-07-18 | Automatisch
**Commit:** `747d709` — "feat(zertifikate): abschlusszeugnis, ihk-bescheinigung und arbeitszeugnis ergänzt"
**Was:** Zertifikate: Abschlusszeugnis, IHK-Bescheinigung, Arbeitszeugnis ergänzt + PDF-Dateinamen URL-sicher gemacht
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `2e21126` — "feat(timeline): dot füllt sich bei hover rot"
**Was:** Timeline: Dot nicht mehr dauerhaft rot bei current — nur noch Hover (wie Bildung)
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `29a3c8d` — "fix(timeline): hover-fill statt dauerpuls — linie füllt sich von oben nach unten"
**Was:** Timeline: Dot (Quadrat) füllt sich bei Hover rot — Bildung & Berufserfahrung
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `baabfdb` — "feat(timeline): fließende linie — roter puls läuft sanft runter und hoch"
**Was:** Timeline: Hover-Fill — Linie füllt sich bei Hover von oben nach unten rot, läuft beim Verlassen zurück
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `835163b` — "feat(timeline): ghost-jahr rechts + skills-block entfernt"
**Was:** Timeline: fließende rote Linie (Puls läuft ease-in-out runter/hoch) statt hartem Hover-Umschalter
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `c3d2618` — "chore: WORKLOG — timeline-layout vereinheitlicht"
**Was:** skills: block 'weitere tools & ökosystem' entfernt; timeline: ghost-jahr rechts (outline-numeral, füllt freiraum bis rote linie), datum-ausrichtung gelöst
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `7afbaf2` — "style(timeline): datum einheitlich oben rechts, status-badge in eigene zeile"
**Was:** Timeline-Kopfzeile vereinheitlicht: Datum immer oben rechts (nowrap), Status-Badge in eigener Zeile darunter
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `926c759` — "fix(content): bildung/berufserfahrung — abschluss-hinweis & datumskorrektur"
**Was:** Bildung: Abschluss-Hinweis raus + Datum 07.2023-07.2026; Berufserfahrung: aktuell-Badge -> Abschluss voraussichtlich 09.07.2026, Datum 07.2026, Punkt bleibt rot
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `4666f90` — "feat(ui): mono-label lesbarkeit + content-politur"
**Was:** Mono-Label-Lesbarkeit (.mono-label: Gewicht 500 + Tracking 0.1em), Banner heller; Werkstudent raus, em-dashes entfernt, Dublin-Zertifikat 2025
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `532313b` — "fix(a11y): ink-dim body-kontrast in dark auf AA (2.67:1 -> 7.11:1)"
**Was:** ink-dim Body-Kontrast in Dark von 2.67:1 auf 7.11:1 (AA) angehoben
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-24 | Automatisch
**Commit:** `42a2c3a` — "feat(theme): dark/light-umschaltung mit warm-paper light-theme"
**Was:** Dark/Light-Theme: Warm-Paper-Palette (AA), ThemeToggle in Navbar, FOUC-Schutz, ink-mute-Kontrast in beiden Themes auf ~5:1 angehoben
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-23 | Automatisch
**Commit:** `c04dad5` — "fix(a11y): aria-hidden auf deko-icons, divider auf transform, reduced-motion in skills"
**Was:** fix(a11y): Contact-Formular — label/input via htmlFor/id verknüpft, Statusmeldungen mit role/aria-live, autocomplete + spellCheck auf Feldern, Deko-Icons aria-hidden, whileInView reduced-motion, transition-all -> transition (Funde A+B der web-design-guidelines Skill, C übersprungen)
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-23 | Automatisch
**Commit:** `ee14ed3` — "chore: claude code skills aus git ausschließen"
**Was:** fix(a11y): Deko-Icons aria-hidden, Hero-Divider auf scaleX-Transform + reduced-motion, Skills.tsx whileInView respektiert prefers-reduced-motion, transition-all -> transition auf CTAs — restliche Befunde der web-design-guidelines Skill
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


---

## 2026-06-23 | Automatisch
**Commit:** `80d5016` — "chore: merge conflict in Skills.tsx gelöst, remote Design beibehalten"
**Was:** fix(hero): Reduced-Motion-Sichtbarkeit (Buttons/Eyebrow/Sub bei prefers-reduced-motion sichtbar) + focus-visible Ringe auf CTAs — gefunden via vercel web-design-guidelines Skill
**TODOs noch offen:**
1 TODO-Marker in portfolio.ts


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
