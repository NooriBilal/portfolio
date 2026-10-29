import type { ReactNode } from "react";

// PSP-Icons: weiß mit leichtem Glanzverlauf, alle auf einem 48×48-Raster.
const G = "url(#xmb-gloss)";
const SHADE = "rgba(0,0,0,0.24)";

const ICONS = {
  // ── Kategorien ──
  toolbox: (
    <>
      <path fill={G} d="M17 15v-4.5A3.5 3.5 0 0 1 20.5 7h7a3.5 3.5 0 0 1 3.5 3.5V15h-3.6v-4.4h-6.8V15z" />
      <path fill={G} d="M4 19.5A4.5 4.5 0 0 1 8.5 15h31a4.5 4.5 0 0 1 4.5 4.5V25H4z" />
      <path fill={G} d="M4 27h40v11.5a4.5 4.5 0 0 1-4.5 4.5h-31A4.5 4.5 0 0 1 4 38.5z" />
      <rect x="20.5" y="22" width="7" height="8" rx="1.6" fill={G} stroke={SHADE} strokeWidth="1" />
    </>
  ),
  person: (
    <>
      <circle cx="24" cy="15.5" r="8.5" fill={G} />
      <path fill={G} d="M7 42c0-9.5 7.6-16 17-16s17 6.5 17 16z" />
    </>
  ),
  bars: (
    <g fill={G}>
      <rect x="5" y="26" width="6" height="16" rx="1.5" />
      <rect x="13.5" y="16" width="6" height="26" rx="1.5" />
      <rect x="22" y="21" width="6" height="21" rx="1.5" />
      <rect x="30.5" y="9" width="6" height="33" rx="1.5" />
      <rect x="39" y="18" width="6" height="24" rx="1.5" />
    </g>
  ),
  mortarboard: (
    <>
      <path fill={G} d="M24 7 46 17.5 24 28 2 17.5z" />
      <path fill={G} d="M11.5 23.5V33c0 4.4 5.6 7.5 12.5 7.5S36.5 37.4 36.5 33v-9.5L24 29.5z" />
      <path fill="none" stroke={G} strokeWidth="1.8" d="M24 17.5 40 21v11" />
      <rect x="38.5" y="31" width="3" height="6.5" rx="1" fill={G} />
    </>
  ),
  gamepad: (
    <>
      <path
        fill={G}
        d="M15 12.5h18c5.2 0 8.6 3 10.1 8.2l3.2 11.6c1.4 5.2-1.6 9.2-5.6 9.2-2.9 0-4.9-1.7-6.4-4.4l-1.6-2.9H15.3l-1.6 2.9c-1.5 2.7-3.5 4.4-6.4 4.4-4 0-7-4-5.6-9.2l3.2-11.6c1.5-5.2 4.9-8.2 10.1-8.2z"
      />
      <path fill={SHADE} d="M11.6 18.6h3v3.2h3.2v3h-3.2V28h-3v-3.2H8.4v-3h3.2z" />
      <g fill={SHADE}>
        <circle cx="35" cy="18.8" r="1.7" />
        <circle cx="38.8" cy="22.5" r="1.7" />
        <circle cx="35" cy="26.2" r="1.7" />
        <circle cx="31.2" cy="22.5" r="1.7" />
        <circle cx="19" cy="30.5" r="2.7" />
        <circle cx="29" cy="30.5" r="2.7" />
      </g>
    </>
  ),
  globe: (
    <g fill="none" stroke={G} strokeWidth="2.6">
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <path d="M6 24h36M8.6 15h30.8M8.6 33h30.8M24 6v36" />
    </g>
  ),
  orb: (
    <>
      <circle cx="24" cy="24" r="19.5" fill="url(#xmb-orb)" />
      <ellipse cx="21" cy="13.5" rx="11.5" ry="6.5" fill="rgba(255,255,255,0.42)" />
      <path fill="#fff" d="M17.5 13h9.5l5.5 5.5V36h-15z" />
      <path fill="rgba(20,50,140,0.35)" d="M27 13v5.5h5.5z" />
      <path stroke="rgba(20,50,140,0.55)" strokeWidth="1.5" d="M20.5 23h9M20.5 27h9M20.5 31h6" />
    </>
  ),

  // ── Einträge ──
  theme: (
    <>
      <rect x="6" y="9" width="36" height="29" rx="3" fill={G} />
      <rect x="10" y="13" width="28" height="21" rx="1" fill={SHADE} />
      <path fill={G} d="m10 34 8.5-9.5 6 6 4.5-4.5 9 8z" />
      <circle cx="31" cy="19" r="2.8" fill={G} />
    </>
  ),
  speaker: (
    <>
      <path fill={G} d="M6 18h7.5L24 9.5v29L13.5 30H6z" />
      <path
        fill="none"
        stroke={G}
        strokeWidth="2.8"
        strokeLinecap="round"
        d="M29.5 17.5c1.9 1.8 2.9 4 2.9 6.5s-1 4.7-2.9 6.5M34 12.5c3.3 3.2 5 7 5 11.5s-1.7 8.3-5 11.5"
      />
    </>
  ),
  speakerOff: (
    <>
      <path fill={G} d="M6 18h7.5L24 9.5v29L13.5 30H6z" />
      <path fill="none" stroke={G} strokeWidth="2.8" strokeLinecap="round" d="m30 19 10 10M40 19 30 29" />
    </>
  ),
  info: (
    <>
      <circle cx="24" cy="24" r="18" fill={G} />
      <circle cx="24" cy="15" r="2.7" fill={SHADE} />
      <rect x="21.6" y="20" width="4.8" height="15" rx="1.6" fill={SHADE} />
    </>
  ),
  monitor: (
    <>
      <rect x="5" y="8" width="38" height="26" rx="3" fill={G} />
      <rect x="9" y="12" width="30" height="18" rx="1" fill={SHADE} />
      <path fill={G} d="M19 34h10l1.5 5h-13z" />
      <rect x="13" y="38.5" width="22" height="3" rx="1.5" fill={G} />
    </>
  ),
  pin: (
    <>
      <path fill={G} d="M24 5c-7.7 0-14 6-14 13.6C10 28.8 24 43 24 43s14-14.2 14-24.4C38 11 31.7 5 24 5z" />
      <circle cx="24" cy="18.5" r="5.2" fill={SHADE} />
    </>
  ),
  radar: (
    <>
      <g fill="none" stroke={G} strokeWidth="2.6">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="10.5" />
      </g>
      <circle cx="24" cy="24" r="4" fill={G} />
    </>
  ),
  braces: (
    <path
      fill="none"
      stroke={G}
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 9c-4 0-5.5 1.6-5.5 5v5.5c0 2.5-1.5 4.5-4.5 4.5 3 0 4.5 2 4.5 4.5V34c0 3.4 1.5 5 5.5 5M31 9c4 0 5.5 1.6 5.5 5v5.5c0 2.5 1.5 4.5 4.5 4.5-3 0-4.5 2-4.5 4.5V34c0 3.4-1.5 5-5.5 5"
    />
  ),
  layers: (
    <>
      <path fill={G} d="M24 6 44 16 24 26 4 16z" />
      <path fill={G} opacity="0.85" d="M8.5 21.8 24 29.5l15.5-7.7L44 24 24 34 4 24z" />
      <path fill={G} opacity="0.7" d="M8.5 29.8 24 37.5l15.5-7.7L44 32 24 42 4 32z" />
    </>
  ),
  database: (
    <g fill={G}>
      <ellipse cx="24" cy="11" rx="15" ry="5.5" />
      <path d="M9 15c0 3 6.7 5.5 15 5.5S39 18 39 15v7c0 3-6.7 5.5-15 5.5S9 25 9 22z" />
      <path d="M9 26c0 3 6.7 5.5 15 5.5S39 29 39 26v7c0 3-6.7 5.5-15 5.5S9 36 9 33z" />
    </g>
  ),
  cloud: <path fill={G} d="M14 38h21.5a8.5 8.5 0 0 0 1.4-16.9A11.5 11.5 0 0 0 14.9 18 10 10 0 0 0 14 38z" />,
  briefcase: (
    <>
      <path fill={G} d="M18 13v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3h-3.2v-2.8h-5.6V13z" />
      <rect x="5" y="13" width="38" height="27" rx="4" fill={G} />
      <rect x="5" y="23" width="38" height="2" fill={SHADE} />
      <rect x="21" y="21" width="6" height="6" rx="1.2" fill={G} stroke={SHADE} strokeWidth="1" />
    </>
  ),
  school: (
    <g fill={G}>
      <path d="M24 6 44 16H4z" />
      <rect x="6" y="18" width="36" height="3" />
      <path d="M9 22.5h4V36H9zm8 0h4V36h-4zm10 0h4V36h-4zm8 0h4V36h-4z" />
      <rect x="5" y="37" width="38" height="4" rx="1" />
    </g>
  ),
  memorystick: (
    <>
      <path fill={G} d="M7 15h29l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V17a2 2 0 0 1 2-2z" />
      <rect x="9" y="19" width="16" height="6" rx="1" fill="rgba(0,0,0,0.14)" />
      <path fill={SHADE} d="M9 29h3v3H9zm5 0h3v3h-3zm5 0h3v3h-3z" />
    </>
  ),
  branch: (
    <g fill="none" stroke={G} strokeWidth="3">
      <circle cx="14" cy="10" r="4" />
      <circle cx="14" cy="38" r="4" />
      <circle cx="34" cy="16" r="4" />
      <path d="M14 14v20M34 20c0 8-8 8-16 12" />
    </g>
  ),
  mail: (
    <>
      <rect x="5" y="11" width="38" height="26" rx="3" fill={G} />
      <path fill="none" stroke={SHADE} strokeWidth="2" d="m7 14 17 13 17-13" />
    </>
  ),
  people: (
    <>
      <circle cx="33" cy="16.5" r="5" fill={G} opacity="0.8" />
      <path fill={G} opacity="0.8" d="M30.5 27.4c.8-.3 1.6-.4 2.5-.4 5.6 0 10 4.3 10 10H32c0-3.8-.5-7-1.5-9.6z" />
      <circle cx="17" cy="15" r="6.2" fill={G} />
      <path fill={G} d="M5 37c0-7 5.4-12 12-12s12 5 12 12z" />
    </>
  ),
  document: (
    <>
      <path fill={G} d="M11 5h18l10 10v28H11z" />
      <path fill={SHADE} d="M29 5v10h10z" />
      <path stroke={SHADE} strokeWidth="2" d="M16 22h16M16 27h16M16 32h11" />
    </>
  ),
  certificate: (
    <>
      <rect x="6" y="8" width="36" height="26" rx="2" fill={G} />
      <path stroke={SHADE} strokeWidth="2" d="M11 15h20M11 20h14" />
      <path fill={G} d="m29.5 34-2.3 8.5 4.3-2.2 2.2 3.2 1.4-8.3zm7 0 2.3 8.5-4.3-2.2-2.2 3.2-1.4-8.3z" />
      <circle cx="33" cy="30" r="6.5" fill={G} stroke={SHADE} strokeWidth="1.5" />
    </>
  ),
  folder: (
    <>
      <path fill={G} d="M5 13a3 3 0 0 1 3-3h10l4 4h18a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
      <path fill="rgba(0,0,0,0.14)" d="M5 18h38v2H5z" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

// Einmalig eingebundene Verläufe, auf die alle Icons per url(#…) zeigen.
// userSpaceOnUse, damit auch waagerechte Linien (Höhe 0) den Verlauf bekommen.
export function XmbDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="xmb-gloss" gradientUnits="userSpaceOnUse" x1="0" y1="4" x2="0" y2="44">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f3f3f3" />
          <stop offset="1" stopColor="#cdcdcd" />
        </linearGradient>
        <radialGradient id="xmb-orb" cx="0.38" cy="0.3" r="0.78">
          <stop offset="0" stopColor="#bfe0ff" />
          <stop offset="0.35" stopColor="#5390ea" />
          <stop offset="0.8" stopColor="#2141ab" />
          <stop offset="1" stopColor="#152772" />
        </radialGradient>
      </defs>
    </svg>
  );
}
