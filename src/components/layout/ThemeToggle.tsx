"use client";

import { useSyncExternalStore } from "react";
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

// Das Theme lebt als data-theme am <html> (vom Inline-Script vor dem ersten
// Paint gesetzt). Wir lesen es via useSyncExternalStore statt Effect+setState:
// getServerSnapshot -> null rendert serverseitig und bei der Hydration einen
// neutralen Platzhalter (kein Mismatch); danach liefert getTheme das echte
// Theme. Der MutationObserver treibt das Re-Render beim Umschalten.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => null);
  const isLight = theme === "light";

  const toggle = () => applyTheme(theme === "light" ? "dark" : "light");

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
