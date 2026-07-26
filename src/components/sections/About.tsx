"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const traits = [
  {
    label: "Ganzer Stack",
    desc: "Datenmodell, API-Anbindung, Logik und Oberfläche im selben Projekt verantwortet.",
  },
  {
    label: "45 → 10–15 Minuten",
    desc: "Abschlussprojekt: Berichtserstellung über vier Systeme automatisiert. Abgenommen und im Einsatz.",
  },
  {
    label: "3 Jahre Betrieb",
    desc: "Ausgebildet im laufenden Geschäft, nicht im Bootcamp. Anforderungen, Deadlines und Fehler waren echt.",
  },
];

const facts = [
  { k: "Gesucht", v: "Fullstack-Entwicklung — NRW oder Hamburg" },
  { k: "Backend", v: "Python · FastAPI · PHP · MSSQL · REST" },
  { k: "Frontend", v: "TypeScript · React · Next.js · Tailwind" },
  { k: "Abschluss", v: "Fachinformatiker Anwendungsentwicklung (IHK), 07/2026" },
  { k: "Erfahrung", v: "3 Jahre Prozessautomatisierung (JobRouter, DocuWare)" },
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-5"
          >
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Ich baue Webanwendungen über den{" "}
              <span style={{ color: "var(--ink)" }}>ganzen Stack</span> — Datenmodell, API,
              Oberfläche. Meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung habe ich im
              Juli 2026 mit IHK-Abschluss beendet und suche jetzt{" "}
              <span style={{ color: "var(--ink)" }}>aktiv die Stelle</span>, in der ich genau das
              täglich mache.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Was ich damit meine, zeigt mein{" "}
              <span style={{ color: "var(--ink)" }}>Abschlussprojekt</span>: die Digitalisierung der
              Ausbildungsberichte im eigenen Betrieb. Vorher buchte jeder Azubi seine Zeiten in Jira
              und schrieb den Bericht danach aus dem Gedächtnis noch einmal, in einer eigenen
              Vorlage, auf Papier, ohne geregelte Freigabe. Ich habe das Datenmodell in MSSQL
              entworfen, die Zeitbuchungen über die REST-APIs von Jira und Tempo angebunden, die
              Freigabelogik implementiert und die Eingabemasken gebaut; Archivierung und Signatur
              laufen über DocuWare. Aus 45 Minuten pro Bericht wurden 10 bis 15 — abgenommen und im
              Einsatz.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Das Handwerk dazu kommt aus drei Jahren bei der Behrens &amp; Schuleit GmbH in
              Düsseldorf, einem Dienstleister für Prozess- und Dokumentendigitalisierung: rund ein
              Dutzend Workflows in JavaScript und PHP, Datenbankanbindungen über MSSQL und REST, dazu
              Fehleranalyse in laufenden Kundeninstallationen. Ich habe dort gelernt,{" "}
              <span style={{ color: "var(--ink)" }}>Software zu liefern, die im Betrieb wirklich
              läuft</span> — Anforderungen klären, sauber anbinden, testen, Fehler finden.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Heute arbeite ich mit Python und FastAPI im Backend, mit React, Next.js und TypeScript
              im Frontend — diese Seite habe ich selbst gebaut und deployed. Jetzt suche ich ein Team
              als{" "}
              <span style={{ color: "var(--ink)" }}>Fullstack-Entwickler</span>, in dem ich an
              größeren Codebasen mitarbeite und meine Prozess-Erfahrung einbringe.
              Verfügbar bin ich sofort, im Raum NRW und Hamburg; Zeugnisse und Nachweise finden Sie
              weiter unten.
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
            className="lg:col-span-2 lg:sticky lg:top-28 self-start"
          >
            {/* Fakten-Block — für den schnellen Scan */}
            <dl
              className="border divide-y"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {facts.map((f) => (
                <div key={f.k} className="px-4 py-3" style={{ borderColor: "var(--border)" }}>
                  <dt
                    className="text-[10px] tracking-[0.14em] uppercase mb-1"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {f.k}
                  </dt>
                  <dd className="text-xs leading-relaxed" style={{ color: "var(--ink)" }}>
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <div
                className="mt-6 pt-5 border-t flex items-start gap-2 text-xs leading-relaxed"
                style={{
                  borderColor: "var(--border)",
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-dim)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse flex-shrink-0 mt-1"
                  style={{ background: "var(--red)" }}
                />
                <span>
                  <span style={{ color: "var(--ink)" }}>Sofort verfügbar</span> · {personalInfo.location}
                  <br />
                  Suche in {personalInfo.availability}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
