import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import LenisProvider from "@/providers/LenisProvider";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamma-ashy-70.vercel.app"),
  title: "Bilal Noori — Fullstack Developer",
  description:
    "Portfolio von Bilal Noori — Fullstack Developer mit Expertise in Python, TypeScript, React, FastAPI und modernen Web-Technologien.",
  keywords: ["Fullstack Developer", "Python", "TypeScript", "React", "FastAPI", "Portfolio", "Bilal Noori"],
  authors: [{ name: "Bilal Noori", url: "https://github.com/NooriBilal" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bilal Noori — Fullstack Developer",
    description:
      "Portfolio von Bilal Noori — Fullstack Developer mit Expertise in Python, TypeScript, React und FastAPI.",
    type: "website",
    url: "https://portfolio-gamma-ashy-70.vercel.app",
    siteName: "Bilal Noori Portfolio",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Noori — Fullstack Developer",
    description:
      "Portfolio von Bilal Noori — Fullstack Developer mit Expertise in Python, TypeScript, React und FastAPI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

// Setzt das Theme vor dem ersten Paint (verhindert FOUC/Flackern beim Reload).
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',t==='light'?'#f4f0ea':'#0b0b0b');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${anton.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
