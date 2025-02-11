import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";
import { CookieBanner } from "@/components/cookie-banner";
import { ScrollToTop } from "@/components/scroll-to-top";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alona Litvin - Spiritual Guide & Therapist",
  description: "Professional therapy services",
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
