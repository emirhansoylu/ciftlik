export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Çiftlik",
  "image": "https://your-domain.com/images/hero.jpg",
  "description": "Kurban Bayramı için en iyi besili inekler. Sağlıklı ve besili hayvanlar, uygun fiyatlar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Çiftlik Adresi",
    "addressLocality": "Şehir",
    "addressRegion": "Bölge",
    "postalCode": "Posta Kodu",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "LATITUDE",
    "longitude": "LONGITUDE"
  },
  "url": "https://your-domain.com",
  "telephone": "+90XXXXXXXXXX",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/your-page",
    "https://instagram.com/your-profile",
    "https://twitter.com/your-handle"
  ]
}; 