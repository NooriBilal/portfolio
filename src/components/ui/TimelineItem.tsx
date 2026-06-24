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

      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
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
        <div className="flex items-center gap-2 flex-shrink-0">
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
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
          >
            {period}
          </span>
        </div>
      </div>

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
    </motion.div>
  );
}
