"use client";

import { Mail } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{ background: "var(--surface)", borderColor: "var(--red)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="text-2xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--red)", letterSpacing: "0.04em" }}
            >
              BN
            </span>
            <span
              className="text-xs tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
            >
              Fullstack Developer · Deutschland
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border transition-colors duration-150 hover:border-[var(--red-border)] hover:text-[var(--ink)]"
              style={{ color: "var(--ink-dim)", borderColor: "var(--border-mid)" }}
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 border transition-colors duration-150 hover:border-[var(--red-border)] hover:text-[var(--ink)]"
              style={{ color: "var(--ink-dim)", borderColor: "var(--border-mid)" }}
              aria-label="E-Mail"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
          >
            © {year} Bilal Noori
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-mute)" }}
          >
            built with Next.js · deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
