"use client";

import { useEffect, useRef } from "react";

// Die PSP-Welle: mehrere halbtransparente Bänder mit heller Oberkante,
// die sich langsam gegeneinander verschieben.
interface Sheet {
  /** Oberkante am linken Rand, Anteil der Höhe */
  base: number;
  /** Anstieg bis zum rechten Rand */
  slope: number;
  /** [Amplitude, Frequenz, Geschwindigkeit, Phase] */
  waves: [number, number, number, number][];
  thick: number;
  fill: number;
  line: number;
}

const SHEETS: Sheet[] = [
  { base: 0.66, slope: -0.07, waves: [[0.03, 2.0, 0.14, 4.0], [0.02, 4.2, -0.23, 2.2]], thick: 0.36, fill: 0.08, line: 0.22 },
  { base: 0.54, slope: -0.1, waves: [[0.042, 1.15, -0.17, 2.1], [0.014, 2.8, 0.27, 0.4]], thick: 0.16, fill: 0.09, line: 0.36 },
  { base: 0.47, slope: -0.13, waves: [[0.035, 1.5, 0.22, 0], [0.016, 3.6, -0.34, 1.3]], thick: 0.21, fill: 0.14, line: 0.62 },
];

function edgeY(s: Sheet, nx: number, t: number) {
  let y = s.base + s.slope * nx;
  for (const [amp, freq, speed, phase] of s.waves) {
    y += amp * Math.sin(freq * Math.PI * 2 * nx + speed * t + phase);
  }
  return y;
}

export default function XmbWave({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sheen = (alpha: number) => {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, `rgba(255,255,255,${alpha * 0.35})`);
      g.addColorStop(0.28, `rgba(255,255,255,${alpha})`);
      g.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.5})`);
      g.addColorStop(0.82, `rgba(255,255,255,${alpha * 0.95})`);
      g.addColorStop(1, `rgba(255,255,255,${alpha * 0.45})`);
      return g;
    };

    const draw = (ms: number) => {
      // Vor dem ersten Layout ist die Fläche 0 × 0 — dann nichts zeichnen
      if (!w || !h) return;
      const t = ms / 1000;
      ctx.clearRect(0, 0, w, h);
      const step = Math.max(6, w / 120);
      const count = Math.ceil(w / step) + 1;

      for (const s of SHEETS) {
        const top: number[] = [];
        const bottom: number[] = [];
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < count; i++) {
          const nx = (i * step) / w;
          const y = edgeY(s, nx, t) * h;
          const b = y + s.thick * h * (0.75 + 0.25 * Math.sin(nx * 5.2 + t * 0.3 + s.base * 10));
          top.push(y);
          bottom.push(b);
          min = Math.min(min, y);
          max = Math.max(max, b);
        }

        // Fläche
        ctx.beginPath();
        ctx.moveTo(0, top[0]);
        for (let i = 1; i < count; i++) ctx.lineTo(i * step, top[i]);
        for (let i = count - 1; i >= 0; i--) ctx.lineTo(i * step, bottom[i]);
        ctx.closePath();
        const fill = ctx.createLinearGradient(0, min, 0, max);
        fill.addColorStop(0, `rgba(255,255,255,${s.fill})`);
        fill.addColorStop(0.45, `rgba(255,255,255,${s.fill * 0.45})`);
        fill.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = fill;
        ctx.fill();

        // Leuchtende Oberkante: breiter Schein + feine Linie
        ctx.beginPath();
        ctx.moveTo(0, top[0]);
        for (let i = 1; i < count; i++) ctx.lineTo(i * step, top[i]);
        ctx.lineJoin = "round";
        ctx.strokeStyle = sheen(s.line * 0.16);
        ctx.lineWidth = Math.max(4, h * 0.014);
        ctx.stroke();
        ctx.strokeStyle = sheen(s.line);
        ctx.lineWidth = Math.max(1, h * 0.0026);
        ctx.stroke();

        // Feine Falte im Band
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
          const nx = (i * step) / w;
          const y = top[i] + s.thick * h * (0.36 + 0.12 * Math.sin(nx * 7.4 - t * 0.42 + s.base * 6));
          if (i === 0) ctx.moveTo(0, y);
          else ctx.lineTo(i * step, y);
        }
        ctx.strokeStyle = sheen(s.line * 0.28);
        ctx.lineWidth = Math.max(1, h * 0.002);
        ctx.stroke();
      }
    };

    // Außerhalb des Viewports (z. B. Startseite weitergescrollt) pausiert die Animation
    let visible = true;
    const loop = (ms: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
      draw(ms);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
