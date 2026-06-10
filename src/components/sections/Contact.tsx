"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(form.subject || `Kontaktanfrage von ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`);
    try {
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }, 500);
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
            initial={{ opacity: 0, y: 20 }}
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
                Offen für neue Möglichkeiten — Vollzeit, Werkstudent oder Freelance. Wenn du ein
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
                    className="text-xs tracking-[0.12em] uppercase"
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

            <div
              className="p-4 border text-xs leading-relaxed"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--ink-dim)",
                borderColor: "var(--border-mid)",
                background: "var(--surface)",
              }}
            >
              <span style={{ color: "var(--red)" }}>// </span>
              Antwortzeit: in der Regel innerhalb von 24–48 Stunden.
            </div>
          </motion.div>

          {/* Form col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    name="name"
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
                  <label style={labelStyle}>E-Mail *</label>
                  <input
                    type="email"
                    name="email"
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
                <label style={labelStyle}>Betreff</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--red)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-mid)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Nachricht *</label>
                <textarea
                  name="message"
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
                  className="flex items-center gap-2 text-xs p-3 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-dim)",
                    borderColor: "var(--border-mid)",
                    background: "var(--surface)",
                  }}
                >
                  <CheckCircle size={14} style={{ color: "var(--red)" }} />
                  E-Mail-Client geöffnet. Danke für deine Nachricht!
                </div>
              )}
              {status === "error" && (
                <div
                  className="flex items-center gap-2 text-xs p-3 border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink-dim)",
                    borderColor: "var(--red-border)",
                  }}
                >
                  <AlertCircle size={14} style={{ color: "var(--red)" }} />
                  Fehler. Schreib direkt an {personalInfo.email}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-medium w-full transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-90"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--red)",
                  color: "#fff",
                  letterSpacing: "0.08em",
                }}
              >
                <Send size={14} />
                {status === "sending" ? "wird geöffnet..." : "Nachricht senden"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
