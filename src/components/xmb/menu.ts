import {
  personalInfo,
  skills,
  experiences,
  education,
  certificates,
  projects,
  upcomingProjects,
  type Project,
} from "@/data/portfolio";
import type { IconName } from "./icons";

// ============================================================
// XMB-Menümodell — alle Inhalte kommen aus src/data/portfolio.ts
// ============================================================

export interface XmbTheme {
  id: string;
  label: string;
  top: string;
  mid: string;
  bottom: string;
}

// Monatsfarben des PSP-Themes „Original" (Januar → Dezember).
export const THEMES: XmbTheme[] = [
  { id: "silber", label: "Silber", top: "#8b8d97", mid: "#a6a8b1", bottom: "#d4d5db" },
  { id: "gold", label: "Gold", top: "#a68200", mid: "#cda50f", bottom: "#ebce64" },
  { id: "limette", label: "Limette", top: "#4a8811", mid: "#6dae26", bottom: "#b0d868" },
  { id: "rosa", label: "Rosa", top: "#bb4e7c", mid: "#df759b", bottom: "#f4adc4" },
  { id: "gruen", label: "Grün", top: "#0c6325", mid: "#1b8d3c", bottom: "#60be77" },
  { id: "violett", label: "Violett", top: "#6533a1", mid: "#8b53c9", bottom: "#c097ed" },
  { id: "tuerkis", label: "Türkis", top: "#07817d", mid: "#0faba7",bottom: "#6adad1" },
  { id: "blau", label: "Blau", top: "#09489e", mid: "#186bcf", bottom: "#6babee" },
  { id: "indigo", label: "Indigo", top: "#362580", mid: "#5440b0", bottom: "#9b88e2" },
  { id: "orange", label: "Orange", top: "#b95600", mid: "#e3820b", bottom: "#ffbd60" },
  { id: "braun", label: "Braun", top: "#573413", mid: "#7e5125", bottom: "#bf905e" },
  { id: "rot", label: "Rot", top: "#e3164a", mid: "#ff053c", bottom: "#ff5c40" },
];

export const DEFAULT_THEME = "rot";

export function resolveTheme(id: string, month: number): XmbTheme {
  if (id === "standard") return THEMES[month];
  return THEMES.find((t) => t.id === id) ?? THEMES[THEMES.length - 1];
}

export interface InfoRow {
  label: string;
  value: string;
  href?: string;
}

export interface TileData {
  title: string;
  caption: string;
  hue: number;
  badge?: string;
}

export interface InfoData {
  title: string;
  subtitle?: string;
  icon?: IconName;
  tile?: TileData;
  rows: InfoRow[];
  body?: string[];
}

export type XmbLayout = "list" | "tracks" | "games";

export interface XmbEntry {
  id: string;
  label: string;
  icon?: IconName;
  /** Zeile unter der Trennlinie, sobald der Eintrag fokussiert ist */
  subtitle?: string;
  /** Kleines Kästchen rechts unter der Linie (wie „PNG", „MPEG-4") */
  tag?: string;
  /** Track-Kästchen statt Icon (Musik-Liste) */
  number?: string;
  /** 0–100, wird als Balken unter der Linie gezeigt */
  level?: number;
  /** Farbfeld statt Icon (Themenfarbe) */
  swatch?: XmbTheme;
  /** Spielkachel (ICON0) statt Icon */
  tile?: TileData;
  /** Kurztext für das Hintergrundbild (PIC1) einer Spielkachel */
  summary?: string;
  href?: string;
  download?: boolean;
  info?: InfoData;
  setting?: { key: "theme" | "sound"; value: string };
  children?: XmbEntry[];
  layout?: XmbLayout;
}

export interface XmbCategory {
  id: string;
  label: string;
  icon: IconName;
  items: XmbEntry[];
  /** Nur in „Einstellungen" zeigt die PSP die Namen aller Einträge, sonst nur den fokussierten. */
  showAllLabels?: boolean;
}

const STATUS_LABEL: Record<Project["status"], string> = {
  live: "Abgeschlossen · im Einsatz",
  "in-development": "In Entwicklung",
  archived: "Archiviert",
  planned: "Geplant",
};

const PROJECT_HUES = [196, 352, 150, 38, 272];
const SKILL_ICONS: IconName[] = ["braces", "layers", "database", "cloud"];

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const validUrl = (url?: string) => (url && url !== "#" ? url : undefined);

function projectEntry(p: Project, i: number): XmbEntry {
  const github = validUrl(p.githubUrl);
  const live = validUrl(p.liveUrl);
  const tile: TileData = {
    title: p.name,
    caption: p.technologies.slice(0, 3).join(" · "),
    hue: PROJECT_HUES[i % PROJECT_HUES.length],
    badge: p.status === "live" ? undefined : "DEMO",
  };
  const rows: InfoRow[] = [
    { label: "Status", value: STATUS_LABEL[p.status] },
    { label: "Technologien", value: p.technologies.join(", ") },
  ];
  if (live) rows.push({ label: "Live", value: stripProtocol(live), href: live });
  if (github) rows.push({ label: "GitHub", value: stripProtocol(github), href: github });

  return {
    id: `project-${i}`,
    label: p.name,
    subtitle: STATUS_LABEL[p.status],
    tag: p.technologies[0],
    tile,
    summary: p.shortDescription,
    href: live ?? github,
    info: { title: p.name, subtitle: p.shortDescription, tile, rows, body: [p.longDescription] },
  };
}

export function buildMenu(state: { theme: string; sound: string; month: number }): XmbCategory[] {
  const currentTheme = state.theme === "standard" ? "Standard" : resolveTheme(state.theme, state.month).label;
  const allProjects = [...projects, ...upcomingProjects];

  return [
    {
      id: "settings",
      label: "Einstellungen",
      icon: "toolbox",
      showAllLabels: true,
      items: [
        {
          id: "theme",
          label: "Design-Einstellungen",
          icon: "theme",
          subtitle: `Themenfarbe: ${currentTheme}`,
          children: [
            {
              id: "standard",
              label: "Standard (Farbe des Monats)",
              swatch: resolveTheme("standard", state.month),
              setting: { key: "theme", value: "standard" },
            },
            ...THEMES.map((t) => ({
              id: t.id,
              label: t.label,
              swatch: t,
              setting: { key: "theme" as const, value: t.id },
            })),
          ],
        },
        {
          id: "sound",
          label: "Ton-Einstellungen",
          icon: "speaker",
          subtitle: `Navigationstöne: ${state.sound === "on" ? "An" : "Aus"}`,
          children: [
            { id: "on", label: "An", icon: "speaker", setting: { key: "sound", value: "on" } },
            { id: "off", label: "Aus", icon: "speakerOff", setting: { key: "sound", value: "off" } },
          ],
        },
        {
          id: "system",
          label: "Systeminformationen",
          icon: "info",
          subtitle: "Portfolio Ver. 2.00",
          info: {
            title: "Systeminformationen",
            icon: "info",
            rows: [
              { label: "Name", value: personalInfo.name },
              { label: "Systemsoftware", value: "Portfolio Ver. 2.00 (XMB)" },
              { label: "Plattform", value: "Next.js · React · TypeScript" },
              { label: "Standort", value: personalInfo.location },
              { label: "Steuerung", value: "Pfeiltasten · Enter (✕) · Esc (○) · T (△)" },
            ],
          },
        },
        {
          id: "classic",
          label: "Klassische Ansicht",
          icon: "monitor",
          subtitle: "Zum bisherigen Portfolio-Design wechseln",
          href: "/",
        },
      ],
    },
    {
      id: "profile",
      label: "Profil",
      icon: "person",
      items: [
        {
          id: "about",
          label: personalInfo.name,
          icon: "person",
          subtitle: personalInfo.title,
          info: {
            title: personalInfo.name,
            subtitle: personalInfo.title,
            icon: "person",
            rows: [
              { label: "Rolle", value: personalInfo.title },
              { label: "Standort", value: personalInfo.location },
              { label: "Suchradius", value: personalInfo.availability },
              { label: "E-Mail", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            ],
            body: [personalInfo.tagline],
          },
        },
        { id: "location", label: "Standort", icon: "pin", subtitle: personalInfo.location },
        { id: "radius", label: "Suchradius", icon: "radar", subtitle: personalInfo.availability },
      ],
    },
    {
      id: "skills",
      label: "Skills",
      icon: "bars",
      items: skills.map((group, gi) => ({
        id: `skills-${gi}`,
        label: group.category,
        icon: SKILL_ICONS[gi % SKILL_ICONS.length],
        subtitle: `${group.skills.length} Einträge`,
        layout: "tracks" as const,
        children: group.skills.map((s, si) => ({
          id: `skill-${gi}-${si}`,
          label: s.name,
          number: String(si + 1).padStart(2, "0"),
          level: s.level,
          tag: `${s.level} %`,
        })),
      })),
    },
    {
      id: "career",
      label: "Werdegang",
      icon: "mortarboard",
      items: [
        ...experiences.map((e, i) => ({
          id: `exp-${i}`,
          label: e.company,
          icon: "briefcase" as const,
          subtitle: `${e.role} · ${e.period}`,
          info: {
            title: e.company,
            subtitle: e.role,
            icon: "briefcase" as const,
            rows: [
              { label: "Rolle", value: e.role },
              { label: "Zeitraum", value: e.period },
              { label: "Technologien", value: e.technologies.join(", ") },
            ],
            body: e.description,
          },
        })),
        ...education.map((e, i) => ({
          id: `edu-${i}`,
          label: e.institution,
          icon: "school" as const,
          subtitle: `${e.degree} · ${e.period}`,
          info: {
            title: e.institution,
            subtitle: e.degree,
            icon: "school" as const,
            rows: [
              { label: "Abschluss", value: e.degree },
              { label: "Zeitraum", value: e.period },
            ],
            body: [e.description],
          },
        })),
      ],
    },
    {
      id: "projects",
      label: "Projekte",
      icon: "gamepad",
      items: [
        {
          id: "all",
          label: "Alle Projekte",
          icon: "memorystick",
          layout: "games",
          children: allProjects.map(projectEntry),
        },
        {
          id: "github",
          label: "GitHub-Repositories",
          icon: "branch",
          href: personalInfo.github,
        },
      ],
    },
    {
      id: "contact",
      label: "Kontakt",
      icon: "globe",
      items: [
        { id: "mail", label: "E-Mail", icon: "mail", subtitle: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { id: "linkedin", label: "LinkedIn", icon: "people", subtitle: stripProtocol(personalInfo.linkedin), href: personalInfo.linkedin },
        { id: "github", label: "GitHub", icon: "branch", subtitle: stripProtocol(personalInfo.github), href: personalInfo.github },
      ],
    },
    {
      id: "documents",
      label: "Dokumente",
      icon: "orb",
      items: [
        {
          id: "cv",
          label: "Lebenslauf",
          icon: "document",
          subtitle: "PDF · Herunterladen",
          href: personalInfo.cvUrl,
          download: true,
        },
        {
          id: "certificates",
          label: "Zeugnisse & Nachweise",
          icon: "folder",
          subtitle: `${certificates.length} Dokumente`,
          children: certificates.map((c, i) => ({
            id: `cert-${i}`,
            label: c.title,
            icon: "certificate" as const,
            subtitle: `${c.issuer} · ${c.date}`,
            tag: "PDF",
            href: c.credentialUrl,
          })),
        },
      ],
    },
  ];
}
