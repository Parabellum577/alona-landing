export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Альона Літвін - Духовний провідник",
          "image": "https://www.alona-litvin.com/images/alona-litvin.jpg",
          "description": "Професійні послуги духовного провідника: цвяхотерапія, розбір матриці долі, психологічна гра Ліла",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Poland"
          },
          "url": "https://www.alona-litvin.com",
          "telephone": "+xxxxxxxxxxxx",
          "priceRange": "$$",
          "openingHours": "Mo-Su",
          "sameAs": [
            "https://www.instagram.com/aln_litvin/",
            "https://t.me/Litvin_Alona",
            "mailto:alenalementa@gmail.com"
          ]
        })
      }}
    />
  );
} 