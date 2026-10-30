"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PspShell from "./PspShell";
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
