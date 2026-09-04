import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ChunkErrorReload from "@/components/ChunkErrorReload";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lote 25 — Private Presentation",
  description: "Private property presentation.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-charcoal text-offwhite font-sans antialiased">
        <ChunkErrorReload />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
