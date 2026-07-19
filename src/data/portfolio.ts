// ============================================================
// PORTFOLIO DATA — Edit this file to customize your content
// ============================================================

export const personalInfo = {
  name: "Bilal Noori",
  title: "Fullstack Developer",
  tagline: "Ich baue skalierbare Webanwendungen und APIs, von der Idee bis zur Produktion.",
  email: "nooribi.bewerbung@gmail.com",
  github: "https://github.com/NooriBilal",
  linkedin: "https://www.linkedin.com/in/bilal-noori-742510382",
  location: "Hilden, NRW",
  // Ausgeschriebener Suchradius für den Status-Balken in der About-Section
  availability: "NRW im Umkreis von 50 km · Hamburg",
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
    role: "Auszubildender Fachinformatiker für Anwendungsentwicklung",
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
    title: "Praktikumszertifikat – Dublin",
    issuer: "Dublin",
    date: "2025",
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
}

// Aktuell bewusst leer — die Projekte-Section rendert dann einen
// "in Arbeit"-Zustand. Sobald ein Projekt vorzeigbar ist, hier eintragen.
export const projects: Project[] = [];

// Noch nicht vorzeigbar, aber die Daten bleiben erhalten: zum Aktivieren
// einfach in das projects-Array oben verschieben.
export const upcomingProjects: Project[] = [
  {
    name: "UFC Stats API",
    shortDescription:
      "Eine umfassende REST-API mit Echtzeit-UFC-Kämpferstatistiken, Kampfbilanzen und Veranstaltungsplänen.",
    longDescription:
      "Die UFC Stats API liefert strukturierte MMA-Daten für Entwickler, Fan-Apps und Analyse-Plattformen. Die API aggregiert Kämpfer­statistiken, historische Kampf­ergebnisse, Event-Pläne und aktuelle Rankings über automatisierte Web-Scraping-Pipelines und speichert die Daten in einer optimierten PostgreSQL-Datenbank mit Redis-Caching für minimale Latenz.",
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
