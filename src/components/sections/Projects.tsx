"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, personalInfo } from "@/data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const hasProjects = projects.length > 0;

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Projekte" num="// 05" />

        {!hasProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border p-8 sm:p-12 max-w-2xl"
            style={{
              background: "var(--background)",
              borderColor: "var(--border-mid)",
            }}
          >
            <div
              className="flex items-center gap-1.5 text-xs mb-5 tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
            >
              <Clock size={11} aria-hidden="true" />
              in arbeit
            </div>

            <h3
              className="text-2xl sm:text-3xl mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              Hier entsteht gerade etwas.
            </h3>

            <p className="mb-6" style={{ color: "var(--ink-dim)", fontSize: 16, lineHeight: 1.7 }}>
              Ich baue aktuell an eigenen Projekten, die ich hier zeigen möchte — veröffentlicht
              wird aber erst, was ich auch wirklich vertreten kann. Bis dahin findest du meinen
              Code auf GitHub.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-5 py-2.5 border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--red)",
                borderColor: "var(--red-border)",
                background: "var(--red-glow)",
                outlineColor: "var(--red)",
              }}
            >
              github.com/NooriBilal
            </a>
          </motion.div>
        )}

        {featuredProjects.length > 0 && (
          <div className="mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mono-label text-xs tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
            >
              // highlight-projekt
            </motion.p>
            <div className="grid grid-cols-1 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mono-label text-xs tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
            >
              // weitere projekte
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {otherProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
