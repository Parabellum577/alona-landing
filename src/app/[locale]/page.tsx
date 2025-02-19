import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Certificates } from "@/components/certificates"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { siteMetadata, getLocalizedMetadata } from "@/config/metadata"
import type { Metadata } from "next"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const localized = getLocalizedMetadata(locale)

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
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Services />
        <Certificates />
        <Process />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
} 