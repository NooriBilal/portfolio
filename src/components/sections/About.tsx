"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Zap, Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const traits = [
  {
    icon: Code2,
    label: "Clean Code",
    color: "#7c5cff",
    description: "Ich schreibe lesbaren, wartbaren Code — kein Wegwerfcode.",
  },
  {
    icon: Zap,
    label: "Performance",
    color: "#ff7ab5",
    description: "Schnelle APIs, optimierte Abfragen, minimale Latenz.",
  },
  {
    icon: Coffee,
    label: "Lernbereitschaft",
    color: "#3effd0",
    description: "Immer auf der Suche nach neuen Technologien und Ansätzen.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Über mich"
          subtitle="Ein bisschen mehr über mich und was mich antreibt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-4">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Glow ring */}
              <div
                className="absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(124,92,255,0.4), rgba(255,122,181,0.2), rgba(62,255,208,0.15))",
                  filter: "blur(2px)",
                }}
              />
              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center border"
                style={{
                  background: "var(--background-soft)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black text-white mx-auto mb-4"
                    style={{
                      background: "linear-gradient(135deg, #7c5cff, #ff7ab5)",
                      boxShadow: "0 0 40px rgba(124,92,255,0.5)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    BN
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
                  >
                    foto kommt bald
                  </p>
                </div>
                {/* Corner accents */}
                <div
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl"
                  style={{ borderColor: "rgba(124,92,255,0.4)" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br"
                  style={{ borderColor: "rgba(62,255,208,0.3)" }}
                />
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-4 right-0 lg:right-8 flex items-center gap-2 px-4 py-2 rounded-xl border text-sm"
              style={{
                background: "var(--background-card)",
                borderColor: "var(--border)",
                color: "var(--text-light)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <MapPin size={13} style={{ color: "#7c5cff" }} />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-light)" }}>
              <p className="text-lg" style={{ color: "var(--text-primary)" }}>
                Hallo! Ich bin{" "}
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  Bilal Noori
                </span>
                , ein leidenschaftlicher Fullstack Developer aus Deutschland mit einem besonderen
                Fokus auf Backend-Systeme und moderne Web-Anwendungen.
              </p>
              <p>
                Ich baue skalierbare APIs mit{" "}
                <span style={{ color: "#7c5cff" }}>FastAPI</span> und{" "}
                <span style={{ color: "#7c5cff" }}>Python</span>, entwickle reaktive Frontends
                mit <span style={{ color: "#ff7ab5" }}>React</span> und{" "}
                <span style={{ color: "#ff7ab5" }}>Next.js</span>, und setze auf{" "}
                <span style={{ color: "#3effd0" }}>Docker</span> für zuverlässige Deployments.
              </p>
              <p>
                Mein aktuelles Herzensprojekt ist die{" "}
                <span className="font-medium" style={{ color: "#7c5cff" }}>
                  UFC Stats API
                </span>{" "}
                — eine umfassende REST-API für MMA-Daten, die ich von Grund auf entworfen habe.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl border transition-all duration-300 group"
                  style={{
                    background: "var(--background-soft)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${trait.color}33`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${trait.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <trait.icon
                    size={18}
                    className="mb-2"
                    style={{ color: trait.color }}
                  />
                  <h4
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                  >
                    {trait.label}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-light)" }}
                  >
                    {trait.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
