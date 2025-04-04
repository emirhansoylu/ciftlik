import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "Kurban Bayramı İçin En İyi Besili İnekler | Çiftlik",
    template: "%s | Çiftlik"
  },
  description: "Sağlıklı ve besili hayvanlarımızla hizmetinizdeyiz. Kaliteli ve güvenilir alışveriş için hemen iletişime geçin.",
  keywords: [
    "kurban bayramı",
    "besili inek",
    "kurbanlık",
    "çiftlik",
    "hayvancılık",
    "sağlıklı hayvan",
    "kurbanlık hayvan",
    "besili hayvan",
    "kurbanlık inek",
    "çiftlik hayvanları"
  ],
  authors: [{ name: "Çiftlik" }],
  creator: "Çiftlik",
  publisher: "Çiftlik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://your-domain.com",
    siteName: "Çiftlik",
    title: "Kurban Bayramı İçin En İyi Besili İnekler | Çiftlik",
    description: "Sağlıklı ve besili hayvanlarımızla hizmetinizdeyiz. Kaliteli ve güvenilir alışveriş için hemen iletişime geçin.",
    images: [
      {
        url: "/hero-farm.jpg",
        width: 1200,
        height: 630,
        alt: "Çiftlik Manzarası - Kurban Bayramı İçin Besili İnekler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurban Bayramı İçin En İyi Besili İnekler | Çiftlik",
    description: "Sağlıklı ve besili hayvanlarımızla hizmetinizdeyiz. Kaliteli ve güvenilir alışveriş için hemen iletişime geçin.",
    images: ["/hero-farm.jpg"],
    creator: "@ciftlik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#16a34a",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
