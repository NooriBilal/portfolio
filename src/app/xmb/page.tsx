import type { Metadata, Viewport } from "next";
import Xmb from "@/components/xmb/Xmb";
import { xmbFont } from "@/components/xmb/font";

export const metadata: Metadata = {
  title: "Bilal Noori — PSP-Modus",
  description: "Portfolio von Bilal Noori im Stil des PSP-Home-Menüs.",
  // Gleiche Inhalte wie die Startseite — nicht doppelt indexieren
  robots: { index: false, follow: true },
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
