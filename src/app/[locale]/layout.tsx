import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";
import { siteMetadata, getLocalizedMetadata, defaultLocale } from "@/config/metadata";
import { CookieBanner } from "@/components/cookie-banner";
import { ScrollToTop } from "@/components/scroll-to-top";
import { JsonLd } from "@/components/json-ld";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localized = getLocalizedMetadata(locale);

  return {
    title: {
      default: localized.title,
      template: "%s | Alona Litvin"
    },
    description: localized.description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.author }],
    metadataBase: new URL(siteMetadata.siteUrl),
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
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.title,
      description: localized.description,
      images: ['/images/preview_image_hero.png'],
    },
    verification: {
      google: "verification_token",
    }
  };
}

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "uk" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div id="root">{children}</div>
          <CookieBanner />
          <Toaster position="top-center" richColors />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
