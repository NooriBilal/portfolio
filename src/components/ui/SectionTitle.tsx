"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className="font-black tracking-tight mb-3"
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
        <span style={{ color: "var(--brand-primary)" }}>.</span>
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-light)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px w-20 rounded-full ${centered ? "mx-auto" : ""}`}
        style={{
          background: "linear-gradient(to right, #7c5cff, #ff7ab5, transparent)",
        }}
      />
    </motion.div>
  );
}
