"use client";

import Script from 'next/script';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { galleryImages } from './data/gallery';
import { contactInfo } from './data/contact';
import { structuredData } from './data/seo';

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-background">
        <Hero
          title="Kurban Bayramı İçin"
          subtitle="En İyi Besili İnekler"
          description="Sağlıklı ve besili hayvanlarımızla, kurbanlık ihtiyacınız için en iyi seçenekleri sunuyoruz"
          ctaText="Hemen İletişime Geçin"
          galleryText="Galeriyi Görüntüle"
        />

        <Gallery
          images={galleryImages}
          title="Çiftliğimizden Kareler"
          description="Sağlıklı ve besili hayvanlarımızın fotoğrafları"
        />

        <Contact
          title={contactInfo.title}
          contactInfo={contactInfo}
        />
      </main>
    </>
  );
}
