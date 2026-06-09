"use client";

import { Mail } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs"
                style={{
                  background: "linear-gradient(135deg, #7c5cff, #ff7ab5)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                BN
              </div>
              <span
                className="font-semibold"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                Bilal Noori
              </span>
            </div>
            <p style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)", fontSize: 13 }}>
              Fullstack Developer · Deutschland
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--text-light)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(62,255,208,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-light)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--text-light)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,92,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-light)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
              aria-label="E-Mail"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
          >
            © {year} Bilal Noori
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--text-light)", fontFamily: "var(--font-mono)" }}
          >
            built with Next.js · deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
