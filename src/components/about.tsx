"use client"

import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-12 bg-gray-50 rounded-3xl mt-10 lg:mt-0 scroll-mt-12">
      <div className="mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">{t('description1')}</p>
            <p className="text-gray-600">{t('description2')}</p>
            <p className="text-gray-600">{t('description3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  