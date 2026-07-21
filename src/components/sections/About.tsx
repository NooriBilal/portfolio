"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

const traits = [
  {
    label: "IHK-Abschluss 2026",
    desc: "Fachinformatiker für Anwendungsentwicklung, ausgebildet bei einem Dienstleister für Prozess- und Dokumentendigitalisierung.",
  },
  {
    label: "45 → 10–15 Minuten",
    desc: "Abschlussprojekt: Berichtserstellung über vier Systeme automatisiert. Abgenommen und im Einsatz.",
  },
  {
    label: "Prozess und Web",
    desc: "JobRouter, DocuWare, PHP und MSSQL im Beruf. React, Next.js und FastAPI daneben aufgebaut.",
  },
];

const facts = [
  { k: "Abschluss", v: "Fachinformatiker Anwendungsentwicklung (IHK), 07/2026" },
  { k: "Schwerpunkt", v: "Prozessautomatisierung & ECM — JobRouter, DocuWare" },
  { k: "Sprachen", v: "JavaScript · TypeScript · PHP · Python · SQL" },
  { k: "Web", v: "React · Next.js · FastAPI · Tailwind" },
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
              Ich bin{" "}
              <span style={{ color: "var(--ink)" }}>Fachinformatiker für Anwendungsentwicklung</span>{" "}
              mit IHK-Abschluss, ausgebildet bei der Behrens &amp; Schuleit GmbH in Düsseldorf. Das
              Unternehmen digitalisiert Dokumenten- und Arbeitsprozesse für andere Firmen,
              überwiegend mit JobRouter und DocuWare.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Dort habe ich drei Jahre lang{" "}
              <span style={{ color: "var(--ink)" }}>Workflows, Web-Formulare und Schnittstellen</span>{" "}
              entwickelt: rund ein Dutzend Prozesse in JavaScript und PHP, angebunden an MSSQL und
              REST-Schnittstellen. Dazu kam laufende Fehleranalyse in bestehenden
              Kundeninstallationen.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Mein Abschlussprojekt zeigt am besten, wie ich arbeite: die{" "}
              <span style={{ color: "var(--ink)" }}>Digitalisierung der Ausbildungsberichte</span>{" "}
              im eigenen Betrieb. Vorher buchte jeder Azubi seine Zeiten in Jira und schrieb den
              Bericht danach aus dem Gedächtnis noch einmal, in einer eigenen Vorlage, auf Papier,
              ohne geregelte Freigabe. Ich habe den Ablauf auf JobRouter gebaut, die Daten direkt aus
              Jira und Tempo gezogen, MSSQL als Basis genutzt und Archivierung samt Signatur über
              DocuWare gelöst. Aus 45 Minuten pro Bericht wurden 10 bis 15. Die Lösung wurde
              abgenommen und ist im Einsatz.
            </p>
            <p style={{ color: "var(--ink-dim)", fontSize: 17, lineHeight: 1.75 }}>
              Parallel arbeite ich mich in den aktuellen Web-Stack ein: REST-APIs mit Python und
              FastAPI, Oberflächen mit React, Next.js und TypeScript. Diese Seite habe ich selbst
              gebaut und deployed. Ich suche eine Stelle als{" "}
              <span style={{ color: "var(--ink)" }}>Entwickler in NRW oder Hamburg</span> — gern
              dort, wo Prozessautomatisierung und Web-Entwicklung zusammenkommen. Zeugnisse und
              Nachweise finden Sie weiter unten.
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
