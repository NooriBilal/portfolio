@AGENTS.md

# Projekt-Kontext

**Projekt:** Portfolio-Website für Bilal Noori  
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS  
**Alle Inhaltsdaten:** `src/data/portfolio.ts` — das ist die einzige Datei für Content-Änderungen

## Datei-Karte (für gezielte Reads)

| Was | Datei |
|---|---|
| Alle Inhalte (Name, Skills, Projekte…) | `src/data/portfolio.ts` |
| Hauptseite (Sections-Reihenfolge) | `src/app/page.tsx` |
| Styling (globale CSS-Vars) | `src/app/globals.css` |
| Hero-Section | `src/components/sections/Hero.tsx` |
| Skills mit Level-Balken | `src/components/sections/Skills.tsx` |
| Projekte mit Code-Preview | `src/components/sections/Projects.tsx` |
| Kontaktformular | `src/components/sections/Contact.tsx` |
| Navbar (sticky, mobile) | `src/components/layout/Navbar.tsx` |
| Wiederverwendbare Projektkarte | `src/components/ui/ProjectCard.tsx` |

## Arbeits-Protokoll

**Vor jeder Antwort:** `git log --oneline -5` lesen — niemals aus dem Gedächtnis behaupten was erledigt ist.  
**Nach jeder Änderung:** Commit + `WORKLOG.md` aktualisieren (`bash scripts/update-worklog.sh "Was wurde gemacht"`).  
**Bei TODOs:** `grep -n "TODO" src/data/portfolio.ts` zur Verifikation ausführen.

## Effizienz-Regeln (Token-Sparmaßnahmen)

1. **Gezielte Reads:** Nur die relevante Datei lesen, nicht das gesamte Projekt.  
   Falsch: "lies alle Dateien" — Richtig: "lies `portfolio.ts:84–117`"
2. **Kein exploratives Suchen:** Datei-Karte oben nutzen, nicht `find` / `ls` im Kreis drehen.
3. **Eine Sache pro Session:** Klare Aufgabe definieren, abschließen, committen.
4. **Keine Dopplungen:** Wenn etwas in WORKLOG.md steht, gilt es als erledigt — nicht neu implementieren.
5. **Diff statt Full-File:** Bei Änderungen nur den betroffenen Block lesen, nicht die ganze Datei.

## Häufige Aufgaben (Schnell-Referenz)

- **Content ändern:** `src/data/portfolio.ts` editieren, fertig.
- **Neue Section:** `src/components/sections/Neu.tsx` erstellen, in `src/app/page.tsx` einbinden.
- **Styling-Token:** `src/app/globals.css` (CSS-Variablen) oder Tailwind-Klassen direkt.
- **Deployment:** `vercel --prod` (Vercel CLI muss installiert sein).
