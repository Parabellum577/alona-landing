import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import { ScrollToTop } from "@/components/scroll-to-top";
import "../globals.css";
import { JsonLd } from "@/components/json-ld";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alona Litvin - Spiritual Guide & Therapist",
  description: "Духовний провідник, психолог, цвяхотерапевт. Допомагаю людям знайти шлях до себе та гармонію.",
  keywords: "Альона Літвін, духовний провідник, цвяхотерапія, матриця долі, Ліла, психологія, терапія, медитація",
  authors: [{ name: "Альона Літвін" }],
  metadataBase: new URL('https://alona-litvin.com'),
  openGraph: {
    title: 'Alona Litvin - Spiritual Guide & Therapist',
    description: 'Духовний провідник, психолог, цвяхотерапевт. Допомагаю людям знайти шлях до себе та гармонію.',
    images: [
      {
        url: '/images/preview_image_hero.png',
        width: 1200,
        height: 630,
        alt: 'Alona Litvin',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alona Litvin - Spiritual Guide & Therapist',
    description: 'Духовний провідник, психолог, цвяхотерапевт. Допомагаю людям знайти шлях до себе та гармонію.',
    images: ['/images/preview_image_hero.png'],
  },
  verification: {
    google: "verification_token",
  }
};

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
        <title>Alona Litvin - Spiritual Guide & Therapist</title>
        <JsonLd />
      </head>
      <body className={montserrat.className}>
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
