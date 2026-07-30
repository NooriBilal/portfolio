"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (prefersReduced || !heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(".hero-eyebrow", {
      y: 14,
      opacity: 0,
      duration: 0.55,
      ease: "power3.out",
    })
      .from(
        ".hero-name-line",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.75,
          stagger: 0.12,
          ease: "power4.inOut",
        },
        "-=0.2"
      )
      .from(
        ".hero-sub",
        { y: 18, opacity: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        ".hero-cta",
        { y: 14, opacity: 0, duration: 0.45, stagger: 0.1, ease: "power3.out" },
        "-=0.25"
      );

    return () => { tl.kill(); };
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle red atmosphere */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(ellipse, rgba(212,43,43,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Eyebrow */}
        <div
          className="hero-eyebrow flex items-center gap-3 mb-10"
          style={{ opacity: prefersReduced ? 1 : 0 }}
        >
          <span
            className="mono-label text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
          >
            {"// bilal@portfolio:~"}
          </span>
          <span
            className="mono-label hidden sm:inline text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
          >
            $ whoami
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
            style={{ background: "var(--red)" }}
            aria-hidden="true"
          />
        </div>

        {/* Name — the 120% detail */}
        <h1 className="mb-8 leading-[0.88]">
          <span
            className="hero-name-line block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(80px, 13vw, 180px)",
              color: "var(--ink)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              clipPath: "inset(0 0% 0 0)",
            }}
          >
            Bilal
          </span>
          <span
            className="hero-name-line block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(80px, 13vw, 180px)",
              color: "var(--red)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              clipPath: "inset(0 0% 0 0)",
            }}
          >
            Noori
            <span className="cursor-blink" style={{ color: "var(--ink-mute)" }} aria-hidden="true">
              _
            </span>
          </span>
        </h1>

        {/* Sub */}
        <div className="hero-sub mb-12" style={{ opacity: prefersReduced ? 1 : 0 }}>
          <p
            className="mono-label text-sm tracking-[0.12em] uppercase mb-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
          >
            Fullstack Developer · {personalInfo.location}
          </p>
          <p
            className="max-w-lg leading-relaxed"
            style={{
              fontSize: "clamp(16px, 1.4vw, 19px)",
              color: "var(--ink-dim)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {personalInfo.tagline}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              lenis?.scrollTo("#contact", { offset: -80 });
            }}
            className="hero-cta flex items-center gap-2.5 px-6 py-3 text-sm font-medium border transition duration-150 hover:border-[var(--red)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--ink-dim)",
              borderColor: "var(--border-mid)",
              letterSpacing: "0.08em",
              opacity: prefersReduced ? 1 : 0,
            }}
          >
            <Mail size={15} aria-hidden="true" />
            Kontakt
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta flex items-center gap-2.5 px-4 py-3 border transition duration-150 hover:border-[var(--red)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            style={{
              color: "var(--ink-dim)",
              borderColor: "var(--border-mid)",
              opacity: prefersReduced ? 1 : 0,
            }}
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 1.4, delay: 1.2, ease: "easeInOut" }}
            className="h-px w-full origin-left"
            style={{ background: "var(--border-mid)" }}
          />
        </div>
      </div>
    </section>
  );
}
