import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ça graille | Ça graille Ozoir-la-Ferrière",
    template: "%s | SAGRAI",
  },
  description:
    "Ça graille à Ozoir-la-Ferrière : burgers généreux, kebabs savoureux et sandwiches briochés. Commande Deliveroo, horaires, adresse et contact.",
   // ⚠️ change ça quand tu as ton domaine
  openGraph: {
    title: "Ça graille | Ça graille Ozoir-la-Ferrière",
    description:
      "Burgers, kebabs et sandwiches briochés à Ozoir-la-Ferrière. Commande Deliveroo, horaires, adresse et contact.",
    url: "https://TON-DOMAINE.fr",
    siteName: "Ça graille",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://TON-DOMAINE.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
