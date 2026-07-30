// ============================================================
// PORTFOLIO DATA — Edit this file to customize your content
// ============================================================

export const personalInfo = {
  name: "Bilal Noori",
  title: "Fullstack Developer",
  tagline: "Ich baue Webanwendungen und APIs — vom Datenmodell bis zur Oberfläche.",
  email: "nooribi.bewerbung@gmail.com",
  github: "https://github.com/NooriBilal",
  linkedin: "https://www.linkedin.com/in/bilal-noori-742510382",
  location: "Hilden, NRW",
  // Ausgeschriebener Suchradius für den Status-Balken in der About-Section
  availability: "NRW im Umkreis von 50 km · Hamburg",
  // CV-Datei fehlt noch — der Download-Button im Hero ist bis dahin entfernt.
  cvUrl: "/cv-bilal-noori.pdf",
};

// ============================================================
// SKILLS
// ============================================================

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Sprachen",
    skills: [
      { name: "Python", level: 90 },
      { name: "PHP", level: 72 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 75 },
      { name: "HTML / CSS", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "FastAPI", level: 88 },
      { name: "Node.js", level: 78 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    category: "Datenbanken & Tools",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Git / GitHub", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Vercel", level: 80 },
    ],
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
  pending?: boolean;
  pendingNote?: string;
}

export const experiences: Experience[] = [
  {
    company: "Behrens & Schuleit GmbH",
    role: "Fachinformatiker für Anwendungsentwicklung (Ausbildung)",
    period: "07.2023 – 07.2026",
    description: [
      "Entwicklung und Anpassung von Geschäftsprozessen auf der Low-Code-Plattform JobRouter.",
      "Implementierung von Prozesslogik und Automatisierungen mit JavaScript und PHP.",
      "Datenbankabfragen und -pflege mit MSSQL sowie Gestaltung von Benutzeroberflächen mit CSS.",
    ],
    technologies: ["JavaScript", "PHP", "MSSQL", "CSS", "JobRouter"],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  pending?: boolean;
  pendingNote?: string;
}

export const education: Education[] = [
  {
    institution: "Heinrich-Hertz-Berufskolleg Düsseldorf",
    degree: "Fachinformatiker für Anwendungsentwicklung",
    period: "07.2023 – 07.2026",
    description:
      "Berufsschule im Rahmen der dualen Ausbildung. Schwerpunkte: Softwareentwicklung, Datenbanken, Netzwerktechnik und IT-Systeme.",
  },
];

// ============================================================
// CERTIFICATES
// ============================================================

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  comingSoon?: boolean;
}

export const certificates: Certificate[] = [
  {
    title: "Abschlusszeugnis – Fachinformatiker für Anwendungsentwicklung",
    issuer: "Heinrich-Hertz-Berufskolleg Düsseldorf",
    date: "07.2026",
    credentialUrl: "/abschlusszeugnis.pdf",
  },
  {
    title: "Vorläufige Bescheinigung über die bestandene Abschlussprüfung",
    issuer: "IHK Düsseldorf",
    date: "07.2026",
    credentialUrl: "/vorlaeufige-bescheinigung.pdf",
  },
  {
    title: "Arbeitszeugnis – Ausbildung Anwendungsentwicklung",
    issuer: "Behrens & Schuleit GmbH",
    date: "07.2026",
    credentialUrl: "/arbeitszeugnis-behrens-schuleit.pdf",
  },
  {
    title: "Auslandspraktikum",
    issuer: "Erasmus",
    date: "04.2025",
    credentialUrl: "/praktikumszertifikat-dublin.pdf",
  },
];

// ============================================================
// PROJECTS
// ============================================================

export interface Project {
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "in-development" | "archived" | "planned";
  featured?: boolean;
  codeExample?: string;
  // Dateiname in der Terminal-Leiste der Projektkarte (leer = wird nicht angezeigt)
  fileName?: string;
}

export const projects: Project[] = [
  {
    name: "Digitale Ausbildungsnachweise",
    shortDescription:
      "IHK-Abschlussprojekt: Erstellung der Ausbildungsnachweise über vier Systeme automatisiert — von rund 45 auf 10–15 Minuten pro Bericht. Abgenommen und im Einsatz.",
    longDescription:
      "Bis dahin lief der Ausbildungsnachweis doppelt: Zeiten wurden in Jira gebucht und der Bericht danach aus dem Gedächtnis noch einmal geschrieben — jeder in seiner eigenen Vorlage, auf Papier, ohne geregelte Freigabe zwischen Azubi und Ausbilder. Ich habe den Prozess auf JobRouter neu gebaut: das Datenmodell in MSSQL entworfen, die Zeitbuchungen über die REST-APIs von Jira und Tempo automatisch eingezogen (die unterschiedlichen Authentifizierungsverfahren waren dabei der kniffligste Teil und wollten isoliert geprüft werden), die Eingabemasken sowie die Freigabelogik zwischen Azubi und Ausbilder implementiert und Archivierung samt digitaler Signatur über DocuWare gelöst. Ergebnis: ein einheitlicher, nachvollziehbarer Ablauf statt Insellösungen — und statt 45 Minuten braucht ein Bericht nur noch 10 bis 15. Die Lösung wurde als IHK-Abschlussprojekt abgenommen und wird im Betrieb genutzt.",
    technologies: ["JobRouter", "PHP", "JavaScript", "MSSQL", "REST", "Jira", "Tempo", "DocuWare"],
    status: "live",
    featured: true,
    fileName: "ausbildungsnachweise.php",
  },
];

// Noch nicht vorzeigbar, aber die Daten bleiben erhalten: zum Aktivieren
// einfach in das projects-Array oben verschieben.
export const upcomingProjects: Project[] = [
  {
    name: "UFC Stats API",
    shortDescription:
      "REST-API für UFC-Daten: Kämpferstatistiken, Kampfbilanzen und Eventpläne, automatisch aktuell gehalten.",
    longDescription:
      "Die UFC Stats API bündelt MMA-Daten an einer Stelle: Kämpferstatistiken, vergangene Kampfergebnisse, Eventpläne und Rankings. Ein Scraper zieht die Daten automatisch ein und legt sie in einer PostgreSQL-Datenbank ab. Häufige Abfragen gehen über einen Redis-Cache. Gedacht für eigene Fan-Apps und Auswertungen, für die es sonst keine saubere Datenquelle gibt.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis", "BeautifulSoup", "Scrapy"],
    githubUrl: "#", // TODO: Add GitHub URL
    status: "in-development",
    featured: true,
    codeExample: `from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Fighter
from app.cache import cache_response

router = APIRouter(prefix="/fighters", tags=["Fighters"])

@router.get("/{fighter_id}")
@cache_response(ttl=3600)
async def get_fighter(
    fighter_id: int,
    db: Session = Depends(get_db)
):
    """Get detailed stats for a UFC fighter."""
    fighter = db.query(Fighter).filter(
        Fighter.id == fighter_id
    ).first()
    return {
        "id": fighter.id,
        "name": fighter.name,
        "record": f"{fighter.wins}-{fighter.losses}-{fighter.draws}",
        "weight_class": fighter.weight_class,
        "rankings": fighter.rankings,
        "stats": fighter.career_stats,
    }`,
  },
];
