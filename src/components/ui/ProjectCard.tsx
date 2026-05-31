"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Code2 } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const statusConfig = {
  live: { label: "Live", class: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" },
  "in-development": { label: "In Entwicklung", class: "bg-amber-500/15 text-amber-400 border border-amber-500/30" },
  archived: { label: "Archiviert", class: "bg-slate-500/15 text-slate-400 border border-slate-500/30" },
  planned: { label: "Geplant", class: "bg-sky-500/15 text-sky-400 border border-sky-500/30" },
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
      className={cn(
        "group relative rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm overflow-hidden",
        "hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-300",
        featured && "border-indigo-500/30 bg-gradient-to-br from-slate-800/60 to-indigo-950/20"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {featured && (
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Gradient top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {project.name}
          </h3>
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap", status.class)}>
            {status.label}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300 text-xs font-mono border border-slate-600/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-300 text-sm leading-relaxed mb-4 pt-2 border-t border-slate-700/50">
                {project.longDescription}
              </p>

              {project.codeExample && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs">
                    <Code2 size={13} />
                    <span>Code-Beispiel</span>
                  </div>
                  <div className="rounded-xl bg-slate-950/80 border border-slate-700/40 overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/60 border-b border-slate-700/40">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-2 text-slate-500 text-xs font-mono">main.py</span>
                    </div>
                    <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{project.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/40">
          <div className="flex gap-3">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
              >
                <ExternalLink size={15} />
                <span>Live</span>
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            {expanded ? (
              <>
                <span>Weniger</span>
                <ChevronUp size={15} />
              </>
            ) : (
              <>
                <span>Mehr</span>
                <ChevronDown size={15} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
