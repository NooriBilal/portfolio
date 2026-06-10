import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Patterns — Bilal Noori",
  description: "3 Brutalism Design-Richtungen für das Portfolio",
  robots: { index: false, follow: false },
};

const directions = [
  {
    num: "01",
    title: "Chiang-Inspired",
    desc: "Dark Navy + Mint. Fixe linke Sidebar mit Scrollspy-Nav, Section-Numbers, dezente Hover-Underlines. Elegant, klar, Developer-typisch.",
    traits: ["Dark Navy", "Mint #64FFDA", "Sidebar-Nav", "Fira Code"],
    traitColor: "text-[#64FFDA] border-[rgba(100,255,218,0.2)] bg-[rgba(100,255,218,0.06)]",
    href: "/_design-drafts/direction-1-chiang.html",
  },
  {
    num: "02",
    title: "Terminal / Hacker",
    desc: "Dunkelgrün-schwarz, JetBrains Mono durchgängig, Terminal-Chrome, Blinking Cursor. Code-Kommentar-Stil für Section-Labels. Modern, nicht cheesy.",
    traits: ["Dark #0c0f0c", "Green #39d353", "JetBrains Mono", "Blink Cursor"],
    traitColor: "text-[#39d353] border-[rgba(57,211,83,0.2)] bg-[rgba(57,211,83,0.06)]",
    href: "/_design-drafts/direction-2-terminal.html",
  },
  {
    num: "03",
    title: "Brutalist-Modern",
    desc: "Creme-Hintergrund, Anton Display-Font, starke schwarze Borders, Rot-Akzente, Tech-Laufband, Grid-Layout. Editorial, mutig, unerwartet.",
    traits: ["Cream #f4f0e8", "Red #d42b2b", "Anton Font", "Bold Borders"],
    traitColor: "text-[#d42b2b] border-[rgba(212,43,43,0.2)] bg-[rgba(212,43,43,0.06)]",
    href: "/_design-drafts/direction-3-brutalist.html",
  },
];

export default function DesignPatternsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--ink)] p-10 pb-20">
      <header className="mb-12">
        <Link
          href="/"
          className="font-[var(--font-mono)] text-[11px] tracking-[0.15em] uppercase text-[var(--ink-dim)] hover:text-[var(--red)] transition-colors"
        >
          ← Zurück
        </Link>
        <div className="mt-6 font-[var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--ink-mute)]">
          Portfolio · Design-Entwürfe · 2026
        </div>
        <h1 className="mt-2 font-[var(--font-display)] text-5xl tracking-tight text-[var(--ink)]">
          3 Richtungen
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-dim)]">
          Brutalism Design Patterns — wähle eine Richtung oder mix &amp; match Details.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {directions.map((d) => (
          <div
            key={d.num}
            className="bg-[var(--surface)] border border-[var(--border)] overflow-hidden group hover:border-[var(--border-mid)] transition-colors"
          >
            {/* iframe preview */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--background)]">
              <iframe
                src={d.href}
                scrolling="no"
                tabIndex={-1}
                className="w-[200%] h-[200%] border-0 pointer-events-none"
                style={{ transform: "scale(0.5)", transformOrigin: "top left" }}
                title={`Design Direction ${d.num}`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/20 transition-colors">
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] uppercase text-white border border-white/40 px-4 py-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  Vollbild öffnen
                </a>
              </div>
            </div>

            {/* card body */}
            <div className="p-5 border-t border-[var(--border)]">
              <div className="font-[var(--font-mono)] text-[10px] tracking-[0.15em] text-[var(--ink-mute)] mb-2">
                RICHTUNG {d.num}
              </div>
              <div className="text-lg font-semibold text-[var(--ink)] mb-2">{d.title}</div>
              <p className="text-[13px] text-[var(--ink-dim)] leading-relaxed mb-4">{d.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {d.traits.map((t) => (
                  <span
                    key={t}
                    className={`font-[var(--font-mono)] text-[10px] tracking-[0.06em] px-2.5 py-0.5 border rounded-sm ${d.traitColor}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] uppercase text-[var(--ink-dim)] border-b border-[var(--border-mid)] pb-0.5 hover:text-[var(--ink)] hover:border-[var(--ink-dim)] transition-colors"
              >
                → Im Tab öffnen
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 border border-[var(--border)] font-[var(--font-mono)] text-[12px] text-[var(--ink-mute)] leading-relaxed">
        <span className="text-[var(--ink-dim)]">Nächster Schritt:</span> Wähle eine Richtung — dann
        implementieren wir sie vollständig in Next.js.
        <br />
        <br />
        Alle Drafts: <span className="text-[var(--ink-dim)]">portfolio/_design-drafts/</span> — kein
        Einfluss auf main.
      </div>
    </div>
  );
}
