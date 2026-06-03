import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
