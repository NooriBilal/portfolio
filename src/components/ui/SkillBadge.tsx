"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: number;
  index?: number;
}

export default function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="inline-block px-3 py-1.5 rounded-lg bg-slate-700/60 border border-slate-600/40 text-slate-300 text-sm font-medium hover:border-indigo-500/40 hover:text-white transition-colors cursor-default"
    >
      {name}
    </motion.span>
  );
}
