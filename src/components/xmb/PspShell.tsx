import styles from "./psp.module.css";

// Rote PSP-3000 als SVG, nachgezeichnet nach Produktfoto. Koordinaten sind Foto-Pixel
// (800er Aufnahme), sichtbarer Ausschnitt 784 × 336 = 7:3. Das LCD (446 × 252,7 ab
// 177/259,6) ist ein eigenes HTML-Element darüber, damit dort das echte XMB läuft.

const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const PALE = "#f8dde1";

const BODY =
  "M92 237.5H708C730 237.5 741 250 748 262C770 300 786 345 786 400C786 455 780 495 768 520C756 543 740 558 720 558H80C60 558 44 543 32 520C20 495 14 455 14 400C14 345 30 300 52 262C59 250 70 237.5 92 237.5Z";
// Schultertaste L (R wird gespiegelt)
const SHOULDER =
  "M142 237.5H92C70 237.5 59 250 52 262L51 264.5H104C116 264.5 122 259 127 251C132 243 135 237.5 142 237.5Z";
// Transparente Ecke unten links (Trageschlaufen-Halter)
const CLEAR_FRAME =
  "M63 531H125C131 531 134 541 136 549C137.5 554 138 557 140 558H80C72 558 66 556 63 553Z";
const CLEAR_WINDOW = "M70 536.5H122C126 536.5 128 543 130 552H76C72 552 70 549 70 546Z";

const DPAD = [
  "M76 350V326Q76 320 82 320H110Q116 320 116 326V350L99 362.5Q96 364.5 93 362.5Z",
  "M76 404V428Q76 434 82 434H110Q116 434 116 428V404L99 391.5Q96 389.5 93 391.5Z",
  "M69 357H45Q39 357 39 363V391Q39 397 45 397H69L81.5 380Q83.5 377 81.5 374Z",
  "M123 357H147Q153 357 153 363V391Q153 397 147 397H123L110.5 380Q108.5 377 110.5 374Z",
];
const DPAD_ARROWS =
  "M89.5 339.5 96 334l6.5 5.5zM89.5 416l6.5 5.5 6.5-5.5zM56.5 371l-6 6 6 6zM135.5 371l6 6-6 6z";

const FACE = [
  { x: 707, y: 331.5 },
  { x: 753, y: 378 },
  { x: 707, y: 423 },
  { x: 661, y: 378 },
];

const ROUND_KEYS = [237.7, 289.3, 483.3, 519];
const PILL_KEYS = [157.3, 545, 595.7];

// PlayStation-Logo im 100 × 75-Raster (wird auf die Home-Taste skaliert)
const PS_LOGO =
  "M36 0V64L48 68V13C55 14 58 17 58 23 58 29 55 31 50 30V41C62 44 70 38 70 26 70 13 62 6 36 0Z" +
  "M50 70V62L84 51C92 48.5 92 46 86 47L56 55V48L82 40C98 35 104 44 92 50 84 54 70 59 50 70Z" +
  "M34 46V53L16 59C10 61 11 63 17 62L34 58V65L14 70C-2 74-4 64 8 59 14 56 22 50 34 46Z";

export default function PspShell() {
  return (
    <svg viewBox="8 232 784 336" className={styles.shell} aria-hidden="true">
      <defs>
        <linearGradient id="psp-body" gradientUnits="userSpaceOnUse" x1="14" y1="0" x2="786" y2="0">
          <stop offset="0" stopColor="#f6324a" />
          <stop offset="0.035" stopColor="#e81634" />
          <stop offset="0.1" stopColor="#d40624" />
          <stop offset="0.3" stopColor="#c8021e" />
          <stop offset="0.5" stopColor="#c4011b" />
          <stop offset="0.7" stopColor="#c8021e" />
          <stop offset="0.9" stopColor="#d40624" />
          <stop offset="0.965" stopColor="#e81634" />
          <stop offset="1" stopColor="#f6324a" />
        </linearGradient>
        <linearGradient id="psp-light" gradientUnits="userSpaceOnUse" x1="0" y1="237.5" x2="0" y2="558">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.012" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.035" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.2" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#000" stopOpacity="0.05" />
          <stop offset="0.86" stopColor="#000" stopOpacity="0" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="0.975" stopColor="#000" stopOpacity="0.1" />
          <stop offset="1" stopColor="#000" stopOpacity="0.38" />
        </linearGradient>
        <radialGradient id="psp-sheen" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="psp-underside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.9" stopColor="#6a2a30" />
          <stop offset="1" stopColor="#3b3434" />
        </linearGradient>
        <linearGradient id="psp-shoulder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f5f6" />
          <stop offset="0.6" stopColor="#dedcdd" />
          <stop offset="1" stopColor="#b6b2b4" />
        </linearGradient>
        <linearGradient id="psp-clear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a5a09e" />
          <stop offset="1" stopColor="#6c6866" />
        </linearGradient>
        <linearGradient id="psp-window" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbf7f6" />
          <stop offset="1" stopColor="#e4dcda" />
        </linearGradient>
        <linearGradient id="psp-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dccfd1" />
        </linearGradient>
        <linearGradient id="psp-key" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5465c" />
          <stop offset="0.45" stopColor="#e2112e" />
          <stop offset="1" stopColor="#c6061f" />
        </linearGradient>
        <radialGradient id="psp-face" cx="0.5" cy="0.32" r="0.72">
          <stop offset="0" stopColor="#f27c7b" />
          <stop offset="0.38" stopColor="#e6464f" />
          <stop offset="0.82" stopColor="#d01a31" />
          <stop offset="1" stopColor="#b70b22" />
        </radialGradient>
        <radialGradient id="psp-stick" cx="0.45" cy="0.38" r="0.65">
          <stop offset="0" stopColor="#e2625b" />
          <stop offset="0.6" stopColor="#c9423e" />
          <stop offset="1" stopColor="#a5262a" />
        </radialGradient>
        <pattern id="psp-knurl" width="2.6" height="2.6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M0 0H2.6M0 0V2.6" stroke="#7a0a14" strokeOpacity="0.45" strokeWidth="0.6" />
        </pattern>
        <clipPath id="psp-clip">
          <path d={BODY} />
        </clipPath>
      </defs>

      {/* Gehäuse: Unterseite, Lackfläche, Licht, Kante */}
      <path d={BODY} transform="translate(0 7)" fill="url(#psp-underside)" />
      <path d={BODY} fill="url(#psp-body)" />
      <path d={BODY} fill="url(#psp-light)" />
      <g clipPath="url(#psp-clip)">
        <ellipse cx="120" cy="300" rx="120" ry="70" fill="url(#psp-sheen)" />
        <ellipse cx="740" cy="470" rx="60" ry="90" fill="url(#psp-sheen)" />
        <path d={BODY} fill="none" stroke="#ffb3bc" strokeOpacity="0.45" strokeWidth="2.4" />
      </g>

      {/* Schultertasten L/R */}
      <g fill="url(#psp-shoulder)" stroke="#8d8789" strokeOpacity="0.55" strokeWidth="0.8">
        <path d={SHOULDER} />
        <path d={SHOULDER} transform="translate(800 0) scale(-1 1)" />
      </g>
      {/* Markierung auf der Oberkante */}
      <path d="M133 253.6 138.5 247H147l-5.5 6.6zM145 253.6l5.5-6.6h7l-5.5 6.6z" fill="#fff" fillOpacity="0.8" />

      {/* Transparente Ecke unten links */}
      <path d={CLEAR_FRAME} fill="url(#psp-clear)" />
      <path d={CLEAR_WINDOW} fill="url(#psp-window)" />

      {/* Display-Glas */}
      <rect x="173.5" y="256" width="453" height="260" rx="3" fill="none" stroke="#ff8f9b" strokeOpacity="0.28" />
      <rect x="174.5" y="257" width="451" height="258" rx="2.5" fill="#141213" stroke="#3a0d12" strokeWidth="1.2" />

      {/* SONY-Schriftzug */}
      <text
        x="117.6"
        y="285.2"
        textAnchor="middle"
        textLength="64.2"
        lengthAdjust="spacingAndGlyphs"
        fontSize="14.6"
        fontWeight="700"
        fill="url(#psp-silver)"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        SONY
      </text>

      {/* Lautsprecher */}
      <g fill="#170b0b" stroke="#ff8f9b" strokeOpacity="0.35" strokeWidth="0.8">
        <rect x="132" y="303.2" width="18" height="8.6" rx="4.3" />
        <rect x="650" y="303.2" width="18" height="8.6" rx="4.3" />
      </g>

      {/* Steuerkreuz */}
      <circle cx="96" cy="377" r="57" fill="#6e0010" fillOpacity="0.12" stroke="#ff9aa8" strokeOpacity="0.3" strokeWidth="1.2" />
      <g stroke="#4a0006" strokeWidth="3.4" strokeLinejoin="round">
        {DPAD.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="url(#psp-key)" stroke="#ff7d8e" strokeOpacity="0.55" strokeWidth="0.9" strokeLinejoin="round">
        {DPAD.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={DPAD_ARROWS} fill="none" stroke={PALE} strokeOpacity="0.85" strokeWidth="1" strokeLinejoin="round" />

      {/* Analog-Stick */}
      <circle cx="98" cy="481" r="27.6" fill="#6e0610" />
      <circle cx="98" cy="481" r="25.6" fill="url(#psp-stick)" />
      <circle cx="98" cy="481" r="25.6" fill="url(#psp-knurl)" />
      <circle cx="98" cy="481" r="25" fill="none" stroke="#ff9d9a" strokeOpacity="0.35" strokeWidth="0.8" />

      {/* Status-LEDs und Symbole links */}
      <g fill="#3b2427">
        <circle cx="31" cy="457" r="2.6" />
        <circle cx="44" cy="493" r="2.6" />
      </g>
      <path d="M42 456.8C45 452.6 54 452.6 57 456.8 54 461 45 461 42 456.8Z" fill={PALE} fillOpacity="0.9" />
      <path d="M47.5 456.8h4" stroke="#b5102a" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="51" y="491" width="4" height="4" fill={PALE} fillOpacity="0.9" />
      <path
        d="M54.5 486.5A5 5 0 0 1 59.5 491.5M54.5 483A8.5 8.5 0 0 1 63 491.5M54.5 479.5A12 12 0 0 1 66.5 491.5"
        fill="none"
        stroke={PALE}
        strokeOpacity="0.9"
        strokeWidth="1.3"
      />

      {/* Aktionstasten △ ○ ✕ □ */}
      <circle cx="707" cy="377.5" r="46" fill="#6e0010" fillOpacity="0.16" stroke="#ff9aa8" strokeOpacity="0.38" strokeWidth="1.4" />
      {FACE.map(({ x, y }) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="20.6" fill="#55000a" />
          <circle cx={x} cy={y} r="18.6" fill="url(#psp-face)" />
          <circle cx={x} cy={y} r="17.8" fill="none" stroke="#ff9aa3" strokeOpacity="0.45" strokeWidth="0.8" />
          <ellipse cx={x} cy={y - 10} rx="10" ry="4.5" fill="#fff" fillOpacity="0.16" />
        </g>
      ))}
      <g fill="none" stroke={PALE} strokeOpacity="0.9" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M699.8 336.8 707 326.3l7.2 10.5z" />
        <circle cx="753" cy="378" r="7" />
        <path d="m701.4 417.4 11.2 11.2m0-11.2-11.2 11.2" />
        <rect x="655.5" y="372.8" width="11" height="10.5" />
      </g>

      {/* POWER / HOLD */}
      <g fill={PALE} fontSize="11" fontWeight="500" style={{ fontFamily: SANS }}>
        <text x="724" y="461" textLength="34.3" lengthAdjust="spacingAndGlyphs">
          POWER
        </text>
        <text x="719" y="496.7" textLength="25.3" lengthAdjust="spacingAndGlyphs">
          HOLD
        </text>
      </g>
      <g fill="#4a3336">
        <circle cx="767.3" cy="457.3" r="2.4" />
        <circle cx="753.3" cy="492.3" r="2.4" />
      </g>

      {/* Untere Tastenleiste */}
      <g fill="url(#psp-key)" stroke="#6c000c" strokeWidth="1.8">
        {PILL_KEYS.map((x) => (
          <rect key={x} x={x} y="530" width="44.6" height="21.2" rx="10.6" />
        ))}
        {ROUND_KEYS.map((x) => (
          <circle key={x} cx={x} cy="540.7" r="12.6" />
        ))}
      </g>
      <g fill="none" stroke="#ff8a9a" strokeOpacity="0.5" strokeWidth="0.8">
        {PILL_KEYS.map((x) => (
          <rect key={x} x={x + 1.6} y="531.6" width="41.4" height="18" rx="9" />
        ))}
        {ROUND_KEYS.map((x) => (
          <circle key={x} cx={x} cy="540.7" r="11" />
        ))}
      </g>
      <path d={PS_LOGO} transform="translate(170.3 534.6) scale(0.175)" fill={PALE} />
      <g fill="none" stroke={PALE} strokeWidth="1.6" strokeLinecap="round">
        <path d="M233.7 540.7h8M285.3 540.7h8M289.3 536.7v8" />
      </g>
      <rect x="477.5" y="536.9" width="11.7" height="7.7" rx="2.2" fill="none" stroke={PALE} strokeWidth="1.2" />
      <g fill={PALE}>
        <path d="M520.6 534.6v10.2" stroke={PALE} strokeWidth="1.1" />
        <path d="M520.6 534.6c1.4 1.8 3.6 2.6 3.4 5.2" fill="none" stroke={PALE} strokeWidth="1.1" />
        <ellipse cx="518.6" cy="545" rx="2.5" ry="1.9" transform="rotate(-20 518.6 545)" />
      </g>
      <g fill={PALE} fontSize="10.2" fontWeight="500" style={{ fontFamily: SANS }} textAnchor="middle">
        <text x="262.5" y="544.4" textLength="17" lengthAdjust="spacingAndGlyphs">
          VOL
        </text>
        <text x="567.4" y="544.8" textLength="33.6" lengthAdjust="spacingAndGlyphs">
          SELECT
        </text>
        <text x="618.2" y="544.8" textLength="26.7" lengthAdjust="spacingAndGlyphs">
          START
        </text>
      </g>
      {/* Mikrofon */}
      <rect x="323.5" y="538.3" width="11" height="6" rx="3" fill="#1d0b0d" stroke="#ff8f9b" strokeOpacity="0.3" strokeWidth="0.7" />
      {/* PSP-Schriftzug */}
      <path
        d="M348.6 532.6h31.2v6.6H349v9.2M380.8 548.4h17.6v-15.8h15M418.6 532.6h31.2v6.6H419v9.2"
        fill="none"
        stroke="#f8f1f1"
        strokeWidth="1.2"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
