import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mhmautos.fr'),
  title: "MHM Autos – Garage & Réparation Automobile à Bagnolet",
  description: "Atelier expert MHM Autos à Bagnolet (93170). Réparation, entretien, carrosserie, pneus. +4450 avis clients. Service premium.",
  keywords: ["garage bagnolet", "réparation auto", "mécanique", "carrosserie", "MHM Autos", "93170"],
  authors: [{ name: "MHM Autos" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mhmautos.fr",
    title: "MHM Autos – Garage Premium à Bagnolet",
    description: "Expertise automobile, réparation et entretien haut de gamme.",
    siteName: "MHM Autos",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1652890196230-4fd9acadd0e5?q=80&w=3087',
        width: 1200,
        height: 630,
        alt: 'Atelier MHM Autos',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-blue-100 selection:text-blue-900",
          inter.variable,
          outfit.variable
        )}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
