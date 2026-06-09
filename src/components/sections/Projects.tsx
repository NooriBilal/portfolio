"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24" style={{ background: "var(--background-soft)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projekte"
          subtitle="Ausgewählte Projekte — von der Idee bis zur Umsetzung"
        />

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm uppercase tracking-widest mb-5"
            >
              — Highlight-Projekt
            </motion.p>
            <div className="grid grid-cols-1 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm uppercase tracking-widest mb-5"
            >
              — Weitere Projekte
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
