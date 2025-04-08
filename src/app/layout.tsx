import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://emirhansoylu.github.io'),
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
    url: "https://emirhansoylu.github.io",
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
    canonical: 'https://emirhansoylu.github.io',
  },
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
      <head>
        {/* Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        {/* Inter font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased font-inter`}>
        {children}
      </body>
    </html>
  );
}
