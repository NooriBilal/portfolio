"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { type Project } from "@/data/portfolio";

const statusConfig = {
  live: { label: "live", color: "#3effd0" },
  "in-development": { label: "in entwicklung", color: "#ff7ab5" },
  archived: { label: "archiviert", color: "#8a8a92" },
  planned: { label: "geplant", color: "#7c5cff" },
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
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        background: featured
          ? "linear-gradient(135deg, rgba(124,92,255,0.06), rgba(10,10,15,1))"
          : "var(--background-card)",
        borderColor: featured ? "rgba(124,92,255,0.25)" : "var(--border)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,92,255,0.35)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(124,92,255,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = featured
          ? "rgba(124,92,255,0.25)"
          : "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Gradient top bar */}
      <div
        className="h-px w-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: "linear-gradient(to right, #7c5cff, #ff7ab5, #3effd0)" }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-xl font-bold transition-colors duration-200 group-hover:text-[#7c5cff]"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </h3>
          <span
            className="px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap border"
            style={{
              color: status.color,
              background: `${status.color}18`,
              borderColor: `${status.color}30`,
              fontFamily: "var(--font-mono)",
            }}
          >
            {status.label}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-light)" }}>
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs border"
              style={{
                fontFamily: "var(--font-mono)",
                background: "rgba(255,255,255,0.03)",
                borderColor: "var(--border)",
                color: "var(--text-light)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p
                className="text-sm leading-relaxed mb-4 pt-4 border-t"
                style={{ color: "var(--text-light)", borderColor: "var(--border)" }}
              >
                {project.longDescription}
              </p>

              {project.codeExample && (
                <div className="mt-4">
                  <div
                    className="flex items-center gap-2 mb-2 text-xs"
                    style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
                  >
                    <Code2 size={12} />
                    <span>code-beispiel</span>
                  </div>
                  <div
                    className="rounded-xl border overflow-hidden"
                    style={{ background: "var(--background)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="flex items-center gap-1.5 px-4 py-2.5 border-b"
                      style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      <span
                        className="ml-2 text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-light)" }}
                      >
                        main.py
                      </span>
                    </div>
                    <pre
                      className="p-4 text-xs overflow-x-auto leading-relaxed"
                      style={{ fontFamily: "var(--font-mono)", color: "#a78bfa" }}
                    >
                      <code>{project.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div
          className="flex items-center justify-between mt-4 pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex gap-4">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
              >
                <GithubIcon size={14} />
                <span>github</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3effd0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-light)")}
              >
                <ExternalLink size={14} />
                <span>live</span>
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: "#7c5cff", fontFamily: "var(--font-mono)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a78bfa")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7c5cff")}
          >
            {expanded ? (
              <>
                <span>weniger</span>
                <ChevronUp size={14} />
              </>
            ) : (
              <>
                <span>mehr</span>
                <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
