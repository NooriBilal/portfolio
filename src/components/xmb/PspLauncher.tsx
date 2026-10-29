"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Xmb from "./Xmb";
import { xmbFont } from "./font";
import styles from "./psp.module.css";

interface Zoom {
  top: number;
  left: number;
  width: number;
  height: number;
  expanded: boolean;
}

const ZOOM_MS = 760;

// Rote PSP-3000 als SVG (700 × 300). Der Bildschirm (400 × 225 ab 150/28) ist ein
// eigenes HTML-Element darüber, damit dort das echte XMB laufen kann.
function PspShell() {
  const key = "url(#psp-key)";
  const keyStroke = "#6a040b";
  const glyph = "rgba(255, 222, 225, 0.78)";
  return (
    <svg viewBox="0 0 700 300" className={styles.shell} aria-hidden="true">
      <defs>
        <linearGradient id="psp-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2414a" />
          <stop offset="0.16" stopColor="#d9141f" />
          <stop offset="0.62" stopColor="#bb0c17" />
          <stop offset="1" stopColor="#7e060f" />
        </linearGradient>
        <linearGradient id="psp-gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="psp-key" cx="0.38" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ff6a70" />
          <stop offset="0.45" stopColor="#d3121d" />
          <stop offset="1" stopColor="#880811" />
        </radialGradient>
        <radialGradient id="psp-stick" cx="0.42" cy="0.38" r="0.75">
          <stop offset="0" stopColor="#d21c26" />
          <stop offset="0.7" stopColor="#9a0b14" />
          <stop offset="1" stopColor="#64040b" />
        </radialGradient>
        <linearGradient id="psp-shoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef0f2" />
          <stop offset="1" stopColor="#8b9299" />
        </linearGradient>
        <clipPath id="psp-clip">
          <rect x="2" y="6" width="696" height="290" rx="122" ry="140" />
        </clipPath>
      </defs>

      {/* Gehäuse */}
      <rect x="2" y="6" width="696" height="290" rx="122" ry="140" fill="url(#psp-body)" stroke="#62040a" strokeWidth="2" />
      {/* Schultertasten L/R */}
      <path d="M6.2 109.8A122 140 0 0 1 107 7.4l1.4 9.9A112 130 0 0 0 15.8 112.4z" fill="url(#psp-shoulder)" />
      <path
        d="M6.2 109.8A122 140 0 0 1 107 7.4l1.4 9.9A112 130 0 0 0 15.8 112.4z"
        fill="url(#psp-shoulder)"
        transform="translate(700 0) scale(-1 1)"
      />
      {/* Lack-Glanz */}
      <g clipPath="url(#psp-clip)">
        <rect x="0" y="6" width="700" height="125" fill="url(#psp-gloss)" opacity="0.42" />
      </g>
      <rect x="6" y="10" width="688" height="282" rx="118" ry="136" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />

      {/* Display-Glas */}
      <rect x="143" y="21" width="414" height="239" rx="5" fill="#0b0b0d" />

      {/* Lautsprecher */}
      <rect x="80" y="49" width="16" height="6" rx="3" fill="#5c030a" />
      <rect x="604" y="49" width="16" height="6" rx="3" fill="#5c030a" />

      {/* Steuerkreuz */}
      <g fill={key} stroke={keyStroke} strokeWidth="1.2">
        <rect x="66" y="88" width="24" height="24" rx="7" />
        <rect x="66" y="132" width="24" height="24" rx="7" />
        <rect x="44" y="110" width="24" height="24" rx="7" />
        <rect x="88" y="110" width="24" height="24" rx="7" />
      </g>
      <g fill="none" stroke={glyph} strokeWidth="1.4" strokeLinejoin="round">
        <path d="m78 95 4.5 7.5h-9z" />
        <path d="m78 149 4.5-7.5h-9z" />
        <path d="m51 122 7.5-4.5v9z" />
        <path d="m105 122-7.5-4.5v9z" />
      </g>

      {/* Analog-Stick */}
      <circle cx="78" cy="205" r="21" fill="url(#psp-stick)" stroke={keyStroke} strokeWidth="1.2" />
      <circle cx="78" cy="205" r="14" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* Aktionstasten △ ○ ✕ □ */}
      <g fill={key} stroke={keyStroke} strokeWidth="1.2">
        <circle cx="622" cy="98" r="13" />
        <circle cx="646" cy="122" r="13" />
        <circle cx="622" cy="146" r="13" />
        <circle cx="598" cy="122" r="13" />
      </g>
      <g fill="none" stroke={glyph} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <path d="m622 91.5 6 10h-12z" />
        <circle cx="646" cy="122" r="5.5" />
        <path d="m617.5 141.5 9 9m0-9-9 9" />
        <rect x="593" y="117" width="10" height="10" />
      </g>

      {/* Untere Tastenleiste */}
      <g fill={key} stroke={keyStroke} strokeWidth="1">
        <rect x="158" y="272" width="40" height="14" rx="7" />
        <circle cx="218" cy="279" r="7" />
        <circle cx="254" cy="279" r="7" />
        <circle cx="420" cy="279" r="7" />
        <circle cx="446" cy="279" r="7" />
        <rect x="466" y="272" width="38" height="14" rx="7" />
        <rect x="510" y="272" width="34" height="14" rx="7" />
      </g>
      <circle cx="278" cy="279" r="1.8" fill="#4a0207" />
      <g fill="none" stroke={glyph} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M173 283.5v-4.5l5-3.8 5 3.8v4.5z" />
        <path d="M214.5 279h7M250.5 279h7M254 275.5v7" />
        <rect x="416.5" y="276.5" width="7" height="5" rx="1" />
        <path d="M447.5 275v6.5M447.5 275l2.5 1" />
        <circle cx="445.6" cy="281.5" r="1.6" />
      </g>
      <g fill={glyph} fontSize="5.5" fontFamily="Arial, sans-serif" textAnchor="middle" letterSpacing="0.4">
        <text x="236" y="281">VOL</text>
        <text x="485" y="281">SELECT</text>
        <text x="527" y="281">START</text>
      </g>
      {/* Monogramm im Stil des Konsolen-Schriftzugs */}
      <text
        x="350"
        y="285"
        textAnchor="middle"
        fontSize="17"
        letterSpacing="9"
        fill="none"
        stroke="rgba(255, 222, 225, 0.85)"
        strokeWidth="0.9"
        style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 300 }}
      >
        BN
      </text>
    </svg>
  );
}

export default function PspLauncher() {
  const router = useRouter();
  const reduced = useReducedMotion();
  const screenRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<Zoom | null>(null);

  useEffect(() => {
    router.prefetch("/xmb");
  }, [router]);

  // Zweiter Frame: Startposition steht, jetzt auf Vollbild aufziehen
  useEffect(() => {
    if (!zoom || zoom.expanded) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setZoom((z) => z && { ...z, expanded: true }));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [zoom]);

  const launch = () => {
    if (zoom) return;
    const screen = screenRef.current;
    if (!screen || reduced) {
      router.push("/xmb");
      return;
    }
    const r = screen.getBoundingClientRect();
    setZoom({ top: r.top, left: r.left, width: r.width, height: r.height, expanded: false });
    window.setTimeout(() => router.push("/xmb"), ZOOM_MS);
    // Falls die Seite (z. B. per Zurück-Taste) erhalten bleibt, Overlay wieder abbauen
    window.setTimeout(() => setZoom(null), 3500);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      launch();
    }
  };

  return (
    <div className={styles.wrap}>
      <div
        role="button"
        tabIndex={0}
        className={styles.device}
        onClick={launch}
        onKeyDown={onKeyDown}
        aria-label="PSP-Modus starten: Portfolio im Stil des PSP-Menüs öffnen"
      >
        <PspShell />
        <div ref={screenRef} className={`${styles.screen} ${xmbFont.variable}`}>
          <Xmb embedded />
          <span className={styles.glass} aria-hidden="true" />
        </div>
      </div>

      <p className={styles.caption}>
        <span className={styles.captionKey}>▶ Press Start</span>
        <span>Portfolio im PSP-Modus</span>
      </p>

      {zoom &&
        createPortal(
          <div className={styles.zoomLayer} aria-hidden="true">
            <div className={`${styles.backdrop} ${zoom.expanded ? styles.backdropOn : ""}`} />
            <div
              className={`${styles.zoomScreen} ${xmbFont.variable}`}
              style={
                zoom.expanded
                  ? { top: 0, left: 0, width: "100vw", height: "100dvh", borderRadius: 0 }
                  : { top: zoom.top, left: zoom.left, width: zoom.width, height: zoom.height }
              }
            >
              <Xmb embedded />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
