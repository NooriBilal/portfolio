import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bilal Noori — Fullstack Developer",
  description:
    "Portfolio von Bilal Noori — Fullstack Developer mit Expertise in Python, TypeScript, React, FastAPI und modernen Web-Technologien.",
  keywords: ["Fullstack Developer", "Python", "TypeScript", "React", "FastAPI", "Portfolio"],
  authors: [{ name: "Bilal Noori" }],
  openGraph: {
    title: "Bilal Noori — Fullstack Developer",
    description: "Portfolio von Bilal Noori — Fullstack Developer",
    type: "website",
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
