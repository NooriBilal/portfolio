import { M_PLUS_1 } from "next/font/google";

// Nahe an der PSP-Systemschrift (Rodin): breite, ruhige Grotesk.
// Geteilt zwischen /xmb und der PSP-Vorschau auf der Startseite.
export const xmbFont = M_PLUS_1({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-xmb",
});
