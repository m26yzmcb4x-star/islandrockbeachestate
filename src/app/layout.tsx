import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollCTA from "@/components/ScrollCTA";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  title: {
    default: "Island Rock Beach Estate | Accessible Luxury in Mozambique",
    template: "%s | Island Rock Beach Estate",
  },
  description: "A private, reef-protected beachfront estate in Jangamo, Mozambique. 20 exclusive villas designed for quiet, timeless accessible luxury.",
  keywords: ["Mozambique real estate", "beachfront villas", "Jangamo property", "investment Mozambique", "Island Rock Beach Estate"],
  metadataBase: new URL("https://islandrockestate.com"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://islandrockestate.com",
    siteName: "Island Rock Beach Estate",
    title: "Island Rock Beach Estate | Accessible Luxury in Mozambique",
    description: "A private, reef-protected beachfront estate in Jangamo, Mozambique. 20 exclusive villas designed for quiet, timeless accessible luxury.",
    images: [
      {
        url: "/images/villa-coastline-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of Island Rock Beach Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Island Rock Beach Estate | Accessible Luxury in Mozambique",
    description: "A private, reef-protected beachfront estate in Jangamo, Mozambique.",
    images: ["/images/villa-coastline-aerial.jpg"],
  },
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
        <WhatsAppFloat />
        <ScrollCTA />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Island Rock Beach Estate",
              "url": "https://islandrockestate.com",
              "logo": "https://islandrockestate.com/images/logo.svg",
              "image": "https://islandrockestate.com/images/villa-coastline-aerial.jpg",
              "description": "A private, reef-protected beachfront estate in Jangamo, Mozambique. 20 exclusive villas designed for quiet, timeless accessible luxury.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jangamo",
                "addressRegion": "Inhambane Province",
                "addressCountry": "MZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.85,
                "longitude": 35.42
              },
              "sameAs": [
                "https://www.instagram.com/island_rock_estate/",
                "https://www.facebook.com/share/19U2vXtcWx/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "shane@islandrockestate.com",
                "telephone": "+258-85-062-7916"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Island Rock Beach Estate",
              "url": "https://islandrockestate.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://islandrockestate.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
