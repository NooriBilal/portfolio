"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/portfolio";

const extraTools = [
  "Swagger / OpenAPI", "SQLAlchemy", "Pydantic", "pytest",
  "GitHub Actions", "Nginx", "Celery", "WebSockets",
  "JWT / OAuth", "Prisma", "Figma", "VS Code",
];

export default function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Skills" num="// 02" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: catIndex * 0.07 }}
              className="border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border-mid)",
              }}
            >
              {/* Category header */}
              <div
                className="px-5 py-3 border-b flex items-center gap-3"
                style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--red)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
                  //
                </span>
                <span
                  className="text-xs tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                >
                  {category.category}
                </span>
              </div>

              {/* Skill rows */}
              <div className="divide-y" style={{ borderColor: "var(--border)" }}>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.07 + i * 0.04 }}
                    className="flex items-center gap-4 px-5 py-3 group"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="text-sm w-32 flex-shrink-0"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tools */}
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-6 border p-6"
          style={{
            background: "var(--background)",
            borderColor: "var(--border-mid)",
          }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-5 text-center"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            // weitere tools &amp; ökosystem
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {extraTools.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 border transition-colors duration-150 hover:border-[var(--red-border)] hover:text-[var(--ink)]"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--ink-dim)",
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
