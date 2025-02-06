"use client"

import { useLocale } from 'next-intl'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import cookiePolicyUk from '@/locales/cookie-policy/uk.json'
import cookiePolicyRu from '@/locales/cookie-policy/ru.json'

export default function CookiePolicy() {
  const locale = useLocale()
  const content = locale === 'uk' ? cookiePolicyUk : cookiePolicyRu

  return (
    <div className="min-h-screen bg-white">
      <Header policy />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
          
          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{content.sections.whatAreCookies.title}</h2>
              <p>{content.sections.whatAreCookies.content}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{content.sections.howWeUse.title}</h2>
              <p>{content.sections.howWeUse.content}</p>
              <ul className="list-disc pl-6 mt-4">
                {content.sections.howWeUse.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{content.sections.types.title}</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{content.sections.types.necessary.title}</h3>
                  <p>{content.sections.types.necessary.content}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{content.sections.types.analytics.title}</h3>
                  <p>{content.sections.types.analytics.content}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{content.sections.types.marketing.title}</h3>
                  <p>{content.sections.types.marketing.content}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{content.sections.control.title}</h2>
              <p>{content.sections.control.content}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 