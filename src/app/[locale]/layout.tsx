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
  description: "Професійні послуги духовного провідника: цвяхотерапія, розбір матриці долі, психологічна гра Ліла. Допомагаю знайти шлях до себе та внутрішньої гармонії.",
  keywords: "Альона Літвін, духовний провідник, цвяхотерапія, матриця долі, Ліла, психологія, терапія, медитація",
  authors: [{ name: "Альона Літвін" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://alona-litvin.com",
    title: "Альона Літвін | Духовний провідник і терапевт",
    description: "Професійні послуги духовного провідника: цвяхотерапія, розбір матриці долі, психологічна гра Ліла",
    siteName: "Альона Літвін",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "verification_token", // token Google Search Console
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
        <meta property="og:image" content="https://alona-litvin.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://alona-litvin.com/images/og-image.jpg" />
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
