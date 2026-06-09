"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Download, ArrowDown } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Cursor follower glow */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          left: springX,
          top: springY,
          width: 500,
          height: 500,
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(124,92,255,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Kinetic background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violet orb — top left */}
        <div
          className="kinetic-orb-1 absolute rounded-full"
          style={{
            top: "5%",
            left: "5%",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(124,92,255,0.18) 0%, transparent 65%)",
            filter: "blur(1px)",
          }}
        />
        {/* Pink orb — bottom right */}
        <div
          className="kinetic-orb-2 absolute rounded-full"
          style={{
            bottom: "0%",
            right: "5%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(255,122,181,0.14) 0%, transparent 65%)",
            filter: "blur(1px)",
          }}
        />
        {/* Teal orb — center */}
        <div
          className="kinetic-orb-3 absolute rounded-full"
          style={{
            top: "35%",
            left: "55%",
            width: 450,
            height: 450,
            background: "radial-gradient(circle, rgba(62,255,208,0.09) 0%, transparent 65%)",
            filter: "blur(1px)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm mb-10"
          style={{
            borderColor: "rgba(62,255,208,0.25)",
            background: "rgba(62,255,208,0.07)",
            color: "#3effd0",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#3effd0" }}
          />
          offen für neue möglichkeiten
        </motion.div>

        {/* Name — XL Display */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black tracking-tight leading-[0.88] mb-6"
          style={{
            fontSize: "clamp(68px, 11vw, 152px)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title — gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-semibold mb-8"
          style={{
            fontSize: "clamp(22px, 3vw, 34px)",
            background: "linear-gradient(135deg, #7c5cff 0%, #ff7ab5 50%, #3effd0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {personalInfo.title}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            color: "var(--text-light)",
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          {/* Primary — violet glow button */}
          <a
            href={personalInfo.cvUrl}
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7c5cff, #a78bfa)",
              boxShadow: "0 0 28px rgba(124,92,255,0.4), 0 1px 0 rgba(255,255,255,0.1) inset",
              animation: "glow-pulse 3s ease-in-out infinite",
            }}
          >
            <Download size={17} />
            CV herunterladen
          </a>

          {/* Secondary — ghost */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(124,92,255,0.4)] hover:bg-[rgba(124,92,255,0.08)]"
            style={{
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Mail size={17} />
            Kontakt aufnehmen
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(62,255,208,0.3)] hover:text-white"
            style={{
              color: "var(--text-light)",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)",
            }}
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 mx-auto transition-colors duration-200 group"
          style={{ color: "var(--text-light)" }}
        >
          <span
            className="text-xs uppercase tracking-[0.3em] group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:text-white transition-colors"
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
