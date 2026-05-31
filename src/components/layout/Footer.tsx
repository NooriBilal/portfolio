"use client";

import { Mail, Heart } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-bold text-white text-xs">
                BN
              </div>
              <span className="font-semibold text-white">Bilal Noori</span>
            </div>
            <p className="text-slate-500 text-sm">Fullstack Developer · Deutschland</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="E-Mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {year} Bilal Noori. Alle Rechte vorbehalten.</p>
          <p className="flex items-center gap-1.5">
            Gebaut mit <Heart size={13} className="text-indigo-500 fill-indigo-500" /> und Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
