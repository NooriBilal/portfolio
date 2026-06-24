"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { type Project } from "@/data/portfolio";

const statusConfig = {
  live:             { label: "live",          color: "var(--red)" },
  "in-development": { label: "in development", color: "var(--ink-dim)" },
  archived:         { label: "archiviert",    color: "var(--ink-mute)" },
  planned:          { label: "geplant",       color: "var(--ink-dim)" },
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];

  return (
    <motion.div
      layout
      className="group relative border overflow-hidden transition-all duration-200"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border-mid)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--red-border)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
      }}
    >
      {/* Terminal chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--red)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-mid)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-mid)" }} />
        <span
          className="ml-2 text-xs flex-1"
          style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
        >
          {project.name.toLowerCase().replace(/\s+/g, "-")}.py
        </span>
        <span
          className="text-xs px-2 py-0.5 border"
          style={{
            fontFamily: "var(--font-mono)",
            color: status.color,
            borderColor:
              project.status === "live" ? "var(--red-border)" : "var(--border-mid)",
          }}
        >
          {status.label}
        </span>
      </div>

      <div className="p-6">
        {featured && (
          <p
            className="mono-label text-xs mb-3 tracking-[0.14em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            // highlight
          </p>
        )}

        <h3
          className="text-xl mb-3 transition-colors duration-150 group-hover:text-[var(--ink)]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--ink)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {project.name}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--ink-dim)" }}
        >
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 border"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--surface-2)",
                borderColor: "var(--border)",
                color: "var(--ink-dim)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p
                className="text-sm leading-relaxed mb-4 pt-4 border-t"
                style={{ color: "var(--ink-dim)", borderColor: "var(--border)" }}
              >
                {project.longDescription}
              </p>

              {project.codeExample && (
                <div className="border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 border-b"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface-2)",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--red)" }} />
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                    >
                      main.py
                    </span>
                  </div>
                  <pre
                    className="p-4 text-xs overflow-x-auto leading-relaxed"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--ink-dim)",
                      background: "var(--surface-3)",
                    }}
                  >
                    <code>{project.codeExample}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="flex items-center justify-between mt-4 pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex gap-5">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--ink)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
              >
                <GithubIcon size={13} />
                github
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--red)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
              >
                <ExternalLink size={13} />
                live
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--ink)]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            {expanded ? (
              <>weniger <ChevronUp size={12} /></>
            ) : (
              <>mehr <ChevronDown size={12} /></>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
