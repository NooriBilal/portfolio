"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  num?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, num, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`section-header-chrome mb-12 ${centered ? "justify-center" : ""}`}
    >
      {num && (
        <span
          className="text-xs tracking-[0.18em] uppercase select-none"
          style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
        >
          {num}
        </span>
      )}
      <h2
        className="tracking-tight"
        style={{
          fontSize: "clamp(26px, 3.2vw, 38px)",
          fontFamily: "var(--font-display)",
          color: "var(--ink)",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
