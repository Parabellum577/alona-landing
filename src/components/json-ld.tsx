export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Альона Літвін - Духовний провідник",
          "image": "https://alona-litvin.com/images/alona-litvin.jpg",
          "description": "Професійні послуги духовного провідника: цвяхотерапія, розбір матриці долі, психологічна гра Ліла",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Poland"
          },
          "url": "https://alona-litvin.com",
          "telephone": "+xxxxxxxxxxxx",
          "priceRange": "$$",
          "openingHours": "Mo-Su",
          "sameAs": [
            "https://instagram.com/alona_litvin",
            // другие соц. сети
          ]
        })
      }}
    />
  );
} 