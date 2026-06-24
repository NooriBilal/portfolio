"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/portfolio";

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
                  className="mono-label text-xs tracking-[0.14em] uppercase"
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
      </div>
    </section>
  );
}
