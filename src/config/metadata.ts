interface LocalizedMetadata {
  title: string;
  description: string;
  locale: string;
}

export const siteMetadata = {
  keywords: "Альона Літвін, духовний провідник, цвяхотерапія, матриця долі, Ліла, психологія, терапія, медитація",
  author: "Альона Літвін",
  siteUrl: "https://www.alona-litvin.com",
  siteName: "Alona Litvin",
  defaultLocale: 'uk',
  
  locales: {
    ru: {
      title: "Алёна Литвин | Духовный проводник и терапевт",
      description: "Духовный проводник, психолог, гвоздетерапевт. Помогаю людям найти путь к себе и гармонию.",
      locale: 'ru_RU'
    },
    uk: {
      title: "Альона Літвін | Духовний провідник і терапевт",
      description: "Духовний провідник, психолог, цвяхотерапевт. Допомагаю людям знайти шлях до себе та гармонію.",
      locale: 'uk_UA'
    }
  } as Record<string, LocalizedMetadata>
};

export const getLocalizedMetadata = (locale: string): LocalizedMetadata => {
  return siteMetadata.locales[locale] || siteMetadata.locales[siteMetadata.defaultLocale];
}; 