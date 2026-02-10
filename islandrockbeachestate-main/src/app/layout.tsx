import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Island Rock Beach Estate | Accessible Luxury in Mozambique",
  description: "A private, reef-protected beachfront estate in Jangamo, Mozambique. 20 exclusive villas designed for quiet, timeless accessible luxury.",
  keywords: ["Mozambique real estate", "beachfront villas", "Jangamo property", "investment Mozambique", "Island Rock Beach Estate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable}`}>
        <Navigation />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
