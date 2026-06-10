import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${anton.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
