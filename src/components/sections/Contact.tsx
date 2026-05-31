"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
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
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // mailto fallback
    const subject = encodeURIComponent(form.subject || `Kontaktanfrage von ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }, 500);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm";

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Kontakt"
          subtitle="Interesse an einer Zusammenarbeit? Schreib mir!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Lass uns reden</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ob Fragen zu meinen Projekten, Kooperationsanfragen oder einfach ein kurzes
                Hallo — ich freue mich über jede Nachricht.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors">
                  <Mail size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">E-Mail</p>
                  <p className="text-sm font-medium">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-indigo-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors">
                  <GithubIcon size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                  <p className="text-sm font-medium">NooriBilal</p>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300">
              <span className="font-semibold">Antwortzeit:</span> In der Regel innerhalb von 24–48 Stunden.
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                  Betreff
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Deine Nachricht..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle size={16} />
                  E-Mail-Client wurde geöffnet. Danke für deine Nachricht!
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <AlertCircle size={16} />
                  Fehler beim Senden. Bitte schreib direkt an {personalInfo.email}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send size={16} />
                {status === "sending" ? "Wird geöffnet..." : "Nachricht senden"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
