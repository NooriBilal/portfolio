"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="Technologien und Tools mit denen ich täglich arbeite"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full bg-gradient-to-b from-indigo-500 to-sky-500" />
                <h3 className="text-white font-semibold text-lg">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={catIndex * 5 + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30"
        >
          <p className="text-slate-500 text-sm text-center mb-4">Weitere Tools & Technologien</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Swagger / OpenAPI",
              "SQLAlchemy",
              "Pydantic",
              "pytest",
              "GitHub Actions",
              "Nginx",
              "Celery",
              "WebSockets",
              "JWT / OAuth",
              "Prisma",
              "Figma",
              "VS Code",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-400 text-sm border border-slate-700/40 hover:border-indigo-500/30 hover:text-slate-200 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
