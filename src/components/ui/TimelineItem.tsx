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
  const descriptionArray = Array.isArray(description) ? description : description ? [description] : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 group"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full border-2 mt-2 flex-shrink-0 transition-all duration-300"
          style={{
            borderColor: current ? "#7c5cff" : "rgba(255,255,255,0.15)",
            background: current ? "#7c5cff" : "var(--background)",
            boxShadow: current ? "0 0 12px rgba(124,92,255,0.5)" : "none",
          }}
        />
        <div
          className="w-px flex-1 mt-2"
          style={{ background: "linear-gradient(to bottom, rgba(124,92,255,0.3), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3
            className="text-lg font-semibold transition-colors duration-200 group-hover:text-[#7c5cff]"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {current && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium border"
                style={{
                  color: "#3effd0",
                  background: "rgba(62,255,208,0.1)",
                  borderColor: "rgba(62,255,208,0.25)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                aktuell
              </span>
            )}
            {pending && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium border"
                style={{
                  color: "#ff7ab5",
                  background: "rgba(255,122,181,0.1)",
                  borderColor: "rgba(255,122,181,0.25)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {pendingNote ?? "ausstehend"}
              </span>
            )}
            <span
              className="text-sm"
              style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
            >
              {period}
            </span>
          </div>
        </div>

        <p
          className="font-medium text-sm mb-3"
          style={{ color: "#7c5cff" }}
        >
          {subtitle}
        </p>

        {descriptionArray.length > 0 && (
          <ul className="space-y-2 mb-4">
            {descriptionArray.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--text-light)" }}
              >
                <span className="mt-1 flex-shrink-0" style={{ color: "#7c5cff" }}>›</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-xs border"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "rgba(124,92,255,0.08)",
                  borderColor: "rgba(124,92,255,0.2)",
                  color: "rgba(167,139,250,0.9)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
