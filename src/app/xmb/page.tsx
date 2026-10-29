import type { Metadata, Viewport } from "next";
import { M_PLUS_1 } from "next/font/google";
import Xmb from "@/components/xmb/Xmb";

// Nahe an der PSP-Systemschrift (Rodin): breite, ruhige Grotesk.
const xmbFont = M_PLUS_1({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-xmb",
});

export const metadata: Metadata = {
  title: "Bilal Noori — XMB",
  description: "Portfolio von Bilal Noori im Stil des PSP-Home-Menüs.",
  // Design-Entwurf: noch nicht indexieren
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ff053c",
};

export default function XmbPage() {
  return (
    <div className={xmbFont.variable}>
      <Xmb />
    </div>
  );
}
