import type { Metadata } from "next";
import { Sora, Manrope, IBM_Plex_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Agnieszka Bola — Tech Lead & Engineering Manager",
  description:
    "Agnieszka Bola — Tech Lead / Engineering Manager / Senior Software Engineer with 8 years in pharma and FMCG. UI applications, automation scripts, and Figma product design for small businesses that need to move faster and spend less.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <div className="grain" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
