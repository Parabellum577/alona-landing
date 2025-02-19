import { siteMetadata, getLocalizedMetadata, defaultLocale } from "@/config/metadata";

export function JsonLd() {
  const localized = getLocalizedMetadata(defaultLocale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": localized.title,
          "image": "https://www.alona-litvin.com/images/alona-litvin.jpg",
          "description": localized.description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Poland"
          },
          "url": siteMetadata.siteUrl,
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