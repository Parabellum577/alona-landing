import { defaultLocale } from '@/config/metadata';
import { getLocalizedMetadata, siteMetadata } from '@/config/metadata';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const localized = getLocalizedMetadata(defaultLocale);

  return {
    title: localized.title,
    description: localized.description,
    openGraph: {
      title: localized.title,
      description: localized.description,
      images: [
        {
          url: '/images/preview_image_hero.png',
          width: 1200,
          height: 630,
          alt: 'Alona Litvin',
        },
      ],
      locale: localized.locale,
      type: 'website',
      siteName: siteMetadata.siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.title,
      description: localized.description,
      images: ['/images/preview_image_hero.png'],
    },
  };
}

export default function RootPage() {
  return null;
} 