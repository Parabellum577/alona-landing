"use client"

import { useTranslations } from 'next-intl'

export function Process() {
  const t = useTranslations('process')
  
  const steps = [
    {
      number: "1",
      title: t('steps.1.title'),
      description: t('steps.1.description'),
    },
    {
      number: "2",
      title: t('steps.2.title'),
      description: t('steps.2.description'),
    },
    {
      number: "3",
      title: t('steps.3.title'),
      description: t('steps.3.description'),
    },
    {
      number: "4",
      title: t('steps.4.title'),
      description: t('steps.4.description'),
    },
    {
      number: "5",
      title: t('steps.5.title'),
      description: t('steps.5.description'),
    },
  ]

  return (
    <section id="process" className="py-12">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-8">{t('title')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="p-6 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  
  