"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/portfolio";

const categoryAccent: Record<string, string> = {
  Sprachen: "#7c5cff",
  "Frameworks & Libraries": "#ff7ab5",
  "Datenbanken & Tools": "#3effd0",
  "DevOps & Cloud": "#a78bfa",
};

const extraTools = [
  "Swagger / OpenAPI", "SQLAlchemy", "Pydantic", "pytest",
  "GitHub Actions", "Nginx", "Celery", "WebSockets",
  "JWT / OAuth", "Prisma", "Figma", "VS Code",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "var(--background-soft)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="Technologien und Tools mit denen ich täglich arbeite"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, catIndex) => {
            const accent = categoryAccent[category.category] ?? "#7c5cff";
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl border transition-colors duration-300"
                style={{
                  background: "var(--background-card)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accent}33`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${accent}0d`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-1.5 h-6 rounded-full"
                    style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}80)` }}
                  />
                  <h3
                    className="font-semibold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.08 + i * 0.04 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border cursor-default transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        background: `${accent}12`,
                        borderColor: `${accent}25`,
                        color: `${accent}dd`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${accent}22`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${accent}55`;
                        (e.currentTarget as HTMLElement).style.color = accent;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${accent}30`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${accent}12`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${accent}25`;
                        (e.currentTarget as HTMLElement).style.color = `${accent}dd`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl border"
          style={{
            background: "var(--background-card)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] text-center mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-light)" }}
          >
            weitere tools & ökosystem
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {extraTools.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm border cursor-default transition-all duration-200 hover:border-[rgba(124,92,255,0.35)] hover:text-white"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "var(--border)",
                  color: "var(--text-light)",
                }}
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
