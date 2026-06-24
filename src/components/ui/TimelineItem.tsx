"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
  technologies?: string[];
  current?: boolean;
  pending?: boolean;
  pendingNote?: string;
  index?: number;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  technologies,
  current,
  pending,
  pendingNote,
  index = 0,
}: TimelineItemProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : description
    ? [description]
    : [];

  // Datum aufteilen: großes Ghost-Jahr (Start) + kleiner Bereich darunter
  const [startRaw, endRaw] = period.split(/\s*[–—-]\s*/).map((s) => s.trim());
  const startYear = startRaw?.match(/\d{4}/)?.[0] ?? startRaw ?? period;
  const endLabel = current ? "→ heute" : endRaw ? `→ ${endRaw}` : "";

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group border-l-2 pl-8 pb-10 relative"
      style={{ borderColor: "var(--border-mid)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--red)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
      }}
    >
      {/* Dot */}
      <div
        className="absolute -left-[7px] top-[5px] w-3 h-3 border-2 transition-all duration-200"
        style={{
          background: current ? "var(--red)" : "var(--background)",
          borderColor: current ? "var(--red)" : "var(--border-mid)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,44rem)_1fr] md:gap-x-10">
        {/* Inhalts-Spalte */}
        <div>
          <div className="mb-2">
            <h3
              className="text-base font-semibold mb-0.5 transition-colors duration-200 group-hover:text-[var(--ink)]"
              style={{ color: "var(--ink)", fontFamily: "var(--font-sans)" }}
            >
              {title}
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--red)", fontFamily: "var(--font-mono)" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Datum — nur mobil (Desktop übernimmt das Ghost-Jahr) */}
          <span
            className="md:hidden inline-block text-xs mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
          >
            {period}
          </span>

          {(current || pending) && (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {current && !pending && (
                <span
                  className="text-xs px-2 py-0.5 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--red)",
                    borderColor: "var(--red-border)",
                    background: "var(--red-glow)",
                  }}
                >
                  aktuell
                </span>
              )}
              {pending && (
                <span
                  className="text-xs px-2 py-0.5 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-dim)",
                    borderColor: "var(--border-mid)",
                  }}
                >
                  {pendingNote ?? "ausstehend"}
                </span>
              )}
            </div>
          )}

          {descriptionArray.length > 0 && (
            <ul className="space-y-2 mb-4 mt-3">
              {descriptionArray.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--ink-dim)" }}
                >
                  <span className="mt-1 flex-shrink-0 text-xs" style={{ color: "var(--red)" }}>
                    —
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: "var(--surface)",
                    borderColor: "var(--border-mid)",
                    color: "var(--ink-dim)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Ghost-Jahr — Desktop, füllt den rechten Freiraum bis zur roten Linie */}
        <div className="hidden md:flex flex-col items-end justify-start pt-0.5 select-none">
          <span className="ghost-year" aria-hidden="true">
            {startYear}
          </span>
          {endLabel && (
            <span
              className="text-xs mt-1.5 tracking-[0.08em]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
            >
              {endLabel}
            </span>
          )}
          {/* vollständiges Datum für Screenreader */}
          <span className="sr-only">{period}</span>
        </div>
      </div>
    </motion.div>
  );
}
