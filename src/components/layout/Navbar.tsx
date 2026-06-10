"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "about",      href: "#about" },
  { label: "skills",     href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects",   href: "#projects" },
  { label: "contact",    href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.slice().reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--background)",
        borderBottom: "2px solid var(--red)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <span
              className="text-2xl tracking-wide transition-colors duration-150 group-hover:text-[var(--red)]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ink)",
                letterSpacing: "0.06em",
              }}
            >
              BN
            </span>
            <span
              className="hidden sm:block text-xs tracking-[0.14em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-dim)" }}
            >
              Bilal Noori
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3.5 text-xs tracking-[0.12em] uppercase transition-all duration-150 relative"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isActive ? "var(--red)" : "var(--ink-dim)",
                    borderBottom: isActive ? "2px solid var(--red)" : "2px solid transparent",
                    marginBottom: "-2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "var(--ink-dim)";
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors duration-150"
            style={{ color: "var(--ink-dim)" }}
            aria-label="Menü"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="py-2.5 text-left text-xs tracking-[0.14em] uppercase transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: isActive ? "var(--red)" : "var(--ink-dim)",
                    }}
                  >
                    {isActive && (
                      <span style={{ color: "var(--red)", marginRight: 8 }}>—</span>
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
