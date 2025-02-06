"use client"

import { useLocale } from 'next-intl'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import privacyUk from '@/locales/privacy/uk.json'
import privacyRu from '@/locales/privacy/ru.json'

export default function PrivacyPolicy() {
  const locale = useLocale()
  const content = locale === 'uk' ? privacyUk : privacyRu

  return (
    <div className="min-h-screen bg-white">
      <Header policy/>
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          <p className="text-gray-600 mb-8">{content.lastUpdated}</p>
          
          <div className="prose prose-gray max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">01. {content.sections.general.title}</h2>
              <p>{content.sections.general.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">02. {content.sections.dataTypes.title}</h2>
              <p className="mb-4">{content.sections.dataTypes.intro}</p>
              <ul className="list-decimal pl-6 space-y-4">
                {content.sections.dataTypes.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">03. {content.sections.dataPurpose.title}</h2>
              <p>{content.sections.dataPurpose.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">04. {content.sections.cookies.title}</h2>
              <p>{content.sections.cookies.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">05. {content.sections.security.title}</h2>
              <p>{content.sections.security.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">06. {content.sections.contact.title}</h2>
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${content.sections.contact.email}`} className="text-primary hover:text-primary-hover">
                  {content.sections.contact.email}
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 