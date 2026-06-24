"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* localStorage kann blockiert sein – Theme greift trotzdem für die Session */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f4f0ea" : "#0b0b0b");
}

export default function ThemeToggle() {
  // null bis mounted -> verhindert Hydration-Mismatch (Server kennt das Theme nicht)
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Zu Dark Mode wechseln" : "Zu Light Mode wechseln"}
      className="p-2 rounded-sm text-[var(--ink-dim)] hover:text-[var(--red)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--red)]"
    >
      {theme === null ? (
        <span style={{ display: "block", width: 18, height: 18 }} aria-hidden />
      ) : isLight ? (
        <Moon size={18} aria-hidden />
      ) : (
        <Sun size={18} aria-hidden />
      )}
    </button>
  );
}
