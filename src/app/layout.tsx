import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${interTight.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
