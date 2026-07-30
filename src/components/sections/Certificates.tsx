"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-28" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Zertifikate" num="// 04b" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-5 border transition-all duration-150"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border-mid)",
                opacity: cert.comingSoon ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (!cert.comingSoon)
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--red-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
              }}
            >
              {cert.comingSoon && (
                <div
                  className="flex items-center gap-1.5 text-xs mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                >
                  <Clock size={10} />
                  kommt bald
                </div>
              )}

              <div
                className="w-8 h-8 border flex items-center justify-center mb-4"
                style={{
                  borderColor: cert.comingSoon ? "var(--border)" : "var(--red-border)",
                  background: cert.comingSoon ? "transparent" : "var(--red-glow)",
                }}
              >
                <Award size={15} style={{ color: cert.comingSoon ? "var(--ink-mute)" : "var(--red)" }} />
              </div>

              <h3
                className="text-sm font-medium leading-snug mb-1"
                style={{ color: cert.comingSoon ? "var(--ink-mute)" : "var(--ink)" }}
              >
                {cert.title}
              </h3>
              <p
                className="text-xs mb-3"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
              >
                {cert.issuer}{cert.date && ` · ${cert.date}`}
              </p>

              {cert.credentialUrl && cert.credentialUrl !== "#" && !cert.comingSoon && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors duration-150 hover:text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                >
                  <ExternalLink size={11} />
                  ansehen
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
