"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const prefersReduced = useReducedMotion();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    background: "var(--surface-2)",
    border: "1px solid var(--border-mid)",
    color: "var(--ink)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    outline: "none",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--ink-dim)",
    marginBottom: 6,
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Kontakt" num="// 06" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 max-w-5xl">

          {/* Info col */}
          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Big editorial heading */}
            <div>
              <h3
                className="leading-[0.9] mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(42px, 5vw, 64px)",
                  color: "var(--ink)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                }}
              >
                Lass uns
                <br />
                <span style={{ color: "var(--red)" }}>reden.</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-dim)" }}>
                Offen für neue Möglichkeiten: Vollzeit oder Freelance. Wenn du ein
                interessantes Projekt oder eine offene Stelle hast, meld dich.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-0 border-t" style={{ borderColor: "var(--border)" }}>
              {[
                { label: "email",    val: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: "github",   val: "NooriBilal",       href: personalInfo.github },
                { label: "linkedin", val: "bilal-noori",      href: personalInfo.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b transition-colors duration-150 group"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--ink-dim)",
                    textDecoration: "none",
                  }}
                >
                  <span
                    className="mono-label text-xs tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--red)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-xs transition-colors duration-150 group-hover:text-[var(--ink)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.val}
                  </span>
                </a>
              ))}
            </div>

          </motion.div>

          {/* Form col */}
          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-mid)")}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-mid)")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={labelStyle}>Betreff</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  autoComplete="off"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-mid)")}
                />
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Deine Nachricht..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-mid)")}
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-center gap-2 text-xs p-3 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-dim)",
                    borderColor: "var(--border-mid)",
                    background: "var(--surface)",
                  }}
                >
                  <CheckCircle size={14} style={{ color: "var(--red)" }} aria-hidden="true" />
                  Nachricht gesendet. Ich melde mich bald!
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-center gap-2 text-xs p-3 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-dim)",
                    borderColor: "var(--red-border)",
                  }}
                >
                  <AlertCircle size={14} style={{ color: "var(--red)" }} aria-hidden="true" />
                  Fehler. Schreib direkt an {personalInfo.email}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-medium w-full transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-90"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--red)",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                <Send size={14} aria-hidden="true" />
                {status === "sending" ? "wird geöffnet..." : "Nachricht senden"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
