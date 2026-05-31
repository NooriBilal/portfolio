"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Zertifikate"
          subtitle="Weiterbildungen, Online-Kurse und Zertifizierungen"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "group relative p-5 rounded-2xl border transition-all duration-300",
                cert.comingSoon
                  ? "border-slate-700/30 bg-slate-800/20 opacity-60"
                  : "border-slate-700/50 bg-slate-800/40 hover:border-indigo-500/40 hover:bg-slate-800/60 hover:-translate-y-1"
              )}
            >
              {cert.comingSoon && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-medium">
                  <Clock size={10} />
                  Kommt bald
                </div>
              )}

              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                  cert.comingSoon
                    ? "bg-slate-700/50"
                    : "bg-gradient-to-br from-indigo-500/20 to-sky-500/20 border border-indigo-500/20 group-hover:from-indigo-500/30 group-hover:to-sky-500/30 transition-colors"
                )}
              >
                <Award
                  size={20}
                  className={cert.comingSoon ? "text-slate-600" : "text-indigo-400"}
                />
              </div>

              <h3
                className={cn(
                  "font-semibold text-sm leading-snug mb-1",
                  cert.comingSoon ? "text-slate-600" : "text-white group-hover:text-indigo-200 transition-colors"
                )}
              >
                {cert.title}
              </h3>

              <p className={cn("text-xs mb-3", cert.comingSoon ? "text-slate-700" : "text-slate-500")}>
                {cert.issuer}
                {cert.date && ` · ${cert.date}`}
              </p>

              {cert.credentialUrl && cert.credentialUrl !== "#" && !cert.comingSoon && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-xs transition-colors"
                >
                  <ExternalLink size={11} />
                  Zertifikat ansehen
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
