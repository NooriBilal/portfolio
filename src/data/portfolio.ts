// ============================================================
// PORTFOLIO DATA — Edit this file to customize your content
// ============================================================

export const personalInfo = {
  name: "Bilal Noori",
  title: "Fullstack Developer",
  tagline: "Ich baue skalierbare Webanwendungen und APIs — von der Idee bis zur Produktion.",
  email: "bilal.noori77@gmail.com",
  github: "https://github.com/NooriBilal",
  linkedin: "", // TODO: Add your LinkedIn URL
  location: "Deutschland",
  cvUrl: "/cv-bilal-noori.pdf", // TODO: Add your CV PDF to /public
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
// EXPERIENCE — TODO: Replace with your actual work history
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
    company: "TODO: Firmenname", // TODO: Add company name
    role: "TODO: Berufsbezeichnung", // TODO: Add your role
    period: "2024 – heute",
    current: true,
    description: [
      "TODO: Beschreibe deine Hauptaufgaben und Verantwortlichkeiten.",
      "TODO: Füge konkrete Erfolge und Projekte hinzu.",
      "TODO: Erwähne relevante Technologien und Methoden.",
    ],
    technologies: ["Python", "React", "PostgreSQL", "Docker"],
  },
  {
    company: "TODO: Firmenname", // TODO: Add company name
    role: "TODO: Berufsbezeichnung", // TODO: Add your role
    period: "2022 – 2024",
    description: [
      "TODO: Beschreibe deine Hauptaufgaben.",
      "TODO: Füge Projektergebnisse und Kennzahlen hinzu.",
    ],
    technologies: ["JavaScript", "Node.js", "SQL"],
  },
  {
    company: "TODO: Firmenname / Praktikum", // TODO: Add company name
    role: "TODO: Werkstudent / Praktikant", // TODO: Add your role
    period: "2021 – 2022",
    description: [
      "TODO: Beschreibe deine Aufgaben während des Praktikums.",
      "TODO: Füge Lern­erfahrungen und Projekte hinzu.",
    ],
    technologies: ["Python", "Git"],
  },
];

// ============================================================
// EDUCATION — TODO: Replace with your actual education
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
    institution: "TODO: Universität / Hochschule", // TODO: Add institution
    degree: "TODO: Bachelor of Science in Informatik o. Ä.", // TODO: Add degree
    period: "2020 – heute",
    description:
      "TODO: Kurze Beschreibung des Studiengangs, Schwerpunkte und relevante Kurse.",
    pending: true,
    pendingNote: "Abschlusszeugnis ausstehend",
  },
  {
    institution: "TODO: Schule / Ausbildungsstätte",
    degree: "Abitur / Ausbildung",
    period: "TODO: Jahr",
    description: "TODO: Beschreibung.",
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
    title: "TODO: Zertifikatname", // TODO: Add certificate
    issuer: "TODO: Anbieter (z.B. Coursera, AWS, Google)",
    date: "2024",
    credentialUrl: "#", // TODO: Add credential URL
  },
  {
    title: "TODO: Zertifikatname",
    issuer: "TODO: Anbieter",
    date: "2023",
    credentialUrl: "#",
  },
  {
    title: "TODO: Zertifikatname",
    issuer: "TODO: Anbieter",
    date: "2023",
    credentialUrl: "#",
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
  {
    name: "TODO: Projektname",
    shortDescription: "TODO: Kurze Beschreibung des Projekts.",
    longDescription:
      "TODO: Ausführliche Beschreibung, Architektur und Ziele des Projekts. Was hast du gebaut, warum und was hast du gelernt?",
    technologies: ["TODO", "React", "Node.js"],
    githubUrl: "#",
    status: "live",
    featured: false,
  },
  {
    name: "TODO: Projektname",
    shortDescription: "TODO: Kurze Beschreibung des Projekts.",
    longDescription: "TODO: Ausführliche Beschreibung des Projekts.",
    technologies: ["TODO", "Python", "Docker"],
    githubUrl: "#",
    status: "planned",
    featured: false,
  },
];
