"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string | string[];
  technologies?: string[];
  current?: boolean;
  pending?: boolean;
  pendingNote?: string;
  index?: number;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  technologies,
  current,
  pending,
  pendingNote,
  index = 0,
}: TimelineItemProps) {
  const descriptionArray = Array.isArray(description) ? description : description ? [description] : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-3.5 h-3.5 rounded-full border-2 mt-1.5 flex-shrink-0 transition-all duration-300",
            current
              ? "border-indigo-400 bg-indigo-500 shadow-lg shadow-indigo-500/40"
              : "border-slate-600 bg-slate-800 group-hover:border-indigo-400"
          )}
        />
        <div className="w-px flex-1 bg-gradient-to-b from-slate-700 to-transparent mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {current && (
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 text-xs font-medium">
                Aktuell
              </span>
            )}
            {pending && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-medium">
                {pendingNote ?? "Ausstehend"}
              </span>
            )}
            <span className="text-slate-500 text-sm font-mono">{period}</span>
          </div>
        </div>

        <p className="text-indigo-400 font-medium text-sm mb-3">{subtitle}</p>

        {descriptionArray.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {descriptionArray.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span className="text-indigo-500 mt-1 flex-shrink-0">›</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 text-xs font-mono border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
