"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Zap, Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const traits = [
  {
    icon: Code2,
    label: "Clean Code",
    description: "Ich schreibe lesbaren, wartbaren Code — kein Wegwerfcode.",
  },
  {
    icon: Zap,
    label: "Performance",
    description: "Schnelle APIs, optimierte Abfragen, minimale Latenz.",
  },
  {
    icon: Coffee,
    label: "Lernbereitschaft",
    description: "Immer auf der Suche nach neuen Technologien und Ansätzen.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Über mich"
          subtitle="Ein bisschen mehr über mich und was mich antreibt"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-sky-500/20 blur-sm" />
              {/* Photo placeholder */}
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700/50 overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-4xl font-bold text-white mx-auto mb-4 shadow-xl shadow-indigo-500/30">
                    BN
                  </div>
                  <p className="text-slate-500 text-sm">Foto kommt bald</p>
                </div>
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-sky-500/50 rounded-br-lg" />
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-4 right-0 lg:right-8 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700/50 shadow-lg text-sm text-slate-300"
            >
              <MapPin size={14} className="text-indigo-400" />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Hallo! Ich bin <span className="text-white font-semibold">Bilal Noori</span>, ein
                leidenschaftlicher Fullstack Developer aus Deutschland mit einem besonderen Fokus
                auf Backend-Systeme und moderne Web-Anwendungen.
              </p>
              <p>
                Ich baue skalierbare APIs mit <span className="text-indigo-400">FastAPI</span> und{" "}
                <span className="text-indigo-400">Python</span>, entwickle reaktive Frontends mit{" "}
                <span className="text-sky-400">React</span> und{" "}
                <span className="text-sky-400">Next.js</span>, und setze auf{" "}
                <span className="text-slate-200">Docker</span> für zuverlässige Deployments.
              </p>
              <p>
                Mein aktuelles Herzensprojekt ist die{" "}
                <span className="text-indigo-400 font-medium">UFC Stats API</span> — eine
                umfassende REST-API für MMA-Daten, die ich von Grund auf entworfen habe.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-indigo-500/30 transition-colors group"
                >
                  <trait.icon
                    size={20}
                    className="text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors"
                  />
                  <h4 className="text-white font-semibold text-sm mb-1">{trait.label}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
