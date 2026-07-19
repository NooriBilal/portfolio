"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const traits = [
  { label: "Clean Code",      desc: "Lesbarer, wartbarer Code statt Wegwerfcode." },
  { label: "Performance",     desc: "Schnelle APIs, optimierte Abfragen, minimale Latenz." },
  { label: "Lernbereitschaft",desc: "Immer auf der Suche nach neuen Technologien." },
];


export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Über mich" num="// 01" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-5"
          >
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Ich bin ausgebildeter{" "}
              <span style={{ color: "var(--ink)" }}>Fachinformatiker für Anwendungsentwicklung</span>{" "}
              und habe meine Ausbildung im Juli 2026 bei der Behrens &amp; Schuleit GmbH in
              Düsseldorf abgeschlossen.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Mein Fokus liegt auf der Schnittstelle zwischen solidem{" "}
              <span style={{ color: "var(--ink)" }}>Backend-Engineering</span> und moderner
              Frontend-Entwicklung. Aktuell vertiefe ich das in eigenen Projekten — und suche
              die Stelle, an der ich es täglich anwenden kann.
            </p>

            {/* Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="p-4 border transition-all duration-150 group"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--red-border)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <p
                    className="text-xs mb-1 tracking-[0.1em] uppercase transition-colors duration-150 group-hover:text-[var(--red)]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--ink-dim)",
                    }}
                  >
                    {t.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--ink-mute)" }}>
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            {/* Avatar placeholder */}
            <div
              className="border mb-8 flex items-center justify-center aspect-square max-w-xs mx-auto lg:mx-0"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border-mid)",
              }}
            >
              <div className="text-center py-12">
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--red)" }}
                >
                  BN
                </div>
                <span
                  className="mono-label text-xs tracking-[0.12em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
                >
                  foto kommt bald
                </span>
              </div>
            </div>

            <div>
              <div
                className="mt-6 pt-5 border-t flex items-center gap-2 text-xs"
                style={{
                  borderColor: "var(--border)",
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-dim)",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "var(--red)" }} />
                {personalInfo.location} · offen für neue Möglichkeiten
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
