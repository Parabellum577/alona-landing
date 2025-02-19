import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Certificates } from "@/components/certificates"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export const dynamic = 'force-static';

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