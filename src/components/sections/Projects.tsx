"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Projekte" num="// 05" />

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
