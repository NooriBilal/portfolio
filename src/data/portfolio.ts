// ============================================================
// PORTFOLIO DATA — Edit this file to customize your content
// ============================================================

export const personalInfo = {
  name: "Bilal Noori",
  title: "Fullstack Developer",
  tagline: "Ich baue skalierbare Webanwendungen und APIs — von der Idee bis zur Produktion.",
  email: "nooribi.bewerbung@gmail.com",
  github: "https://github.com/NooriBilal",
  linkedin: "https://www.linkedin.com/in/bilal-noori-742510382",
  location: "Deutschland",
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
      { name: "Redis", level: 70 },
      { name: "Git / GitHub", level: 88 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Linux", level: 75 },
      { name: "Vercel", level: 80 },
      { name: "CI/CD", level: 68 },
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
}

export const experiences: Experience[] = [
  {
    company: "Behrens & Schuleit GmbH",
    role: "Auszubildender Fachinformatiker für Anwendungsentwicklung",
    period: "07.2023 – 09.2026",
    current: true,
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
    period: "2023 – 2026",
    description:
      "Berufsschule im Rahmen der dualen Ausbildung. Schwerpunkte: Softwareentwicklung, Datenbanken, Netzwerktechnik und IT-Systeme.",
    pending: true,
    pendingNote: "Abschluss voraussichtlich 09.2026",
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
    title: "Praktikumszertifikat – Dublin",
    issuer: "Dublin",
    date: "2024",
    credentialUrl: "/Certificate ST - Bilal NOORI (1).pdf",
  },
  {
    title: "Weiteres Zertifikat",
    issuer: "Kommt bald",
    date: "",
    comingSoon: true,
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

export const projects: Project[] = [
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
