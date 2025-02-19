"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export function Services() {
  const [openService, setOpenService] = useState<string | null>(null);
  const t = useTranslations('services');

  useEffect(() => {
    const handleOpenService = (event: CustomEvent) => {
      setOpenService(event.detail)
    }

    window.addEventListener('openService', handleOpenService as EventListener)
    return () => window.removeEventListener('openService', handleOpenService as EventListener)
  }, [])

  const services = [
    {
      id: "nail-therapy",
      title: t('items.nailTherapy.title'),
      content: (
        <>
          <p className="mb-4">{t('items.nailTherapy.description1')}</p>
          <p className="mb-4">{t('items.nailTherapy.description2')}</p>
          <p className="mb-4">{t('items.nailTherapy.description3')}</p>
          <p className="mb-4">{t('items.nailTherapy.description4')}</p>
          <p className="mb-4">{t('items.nailTherapy.description5')}</p>
          <p className="font-semibold">{t('items.nailTherapy.price')}</p>
          <p className="font-semibold">{t('items.nailTherapy.duration')}</p>
        </>
      ),
    },
    {
      id: "lila",
      title: t('items.lila.title'),
      content: (
        <>
          <p className="mb-4">{t('items.lila.description')}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.lila.process.title')}</h4>
            <ol className="list-decimal pl-5 space-y-2">
              {t.raw('items.lila.process.steps').map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.lila.benefits.title')}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {t.raw('items.lila.benefits.items').map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <p className="mb-4">{t('items.lila.conclusion')}</p>
          
          <div className="mt-4">
            <p className="font-semibold">{t('items.lila.price')}</p>
            <p>{t('items.lila.duration')}</p>
          </div>
        </>
      ),
    },
    {
      id: "trust-session",
      title: t('items.trustSession.title'),
      content: (
        <>
          <p className="mb-4">{t('items.trustSession.description')}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.trustSession.expectations.title')}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {t.raw('items.trustSession.expectations.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.trustSession.formats.title')}</h4>
            <ul className="list-none pl-5 space-y-2">
              <li>{t('items.trustSession.formats.offline')}</li>
              <li>{t('items.trustSession.formats.online')}</li>
            </ul>
          </div>
          
          <p className="mb-4">{t('items.trustSession.conclusion')}</p>
          <p className="mb-4 font-semibold">{t('items.trustSession.cta')}</p>
          
          <div className="mt-4">
            <p className="font-semibold">{t('items.trustSession.price')}</p>
          </div>
        </>
      ),
    },
    {
      id: "mac-session",
      title: t('items.macSession.title'),
      content: (
        <>
          <p className="mb-4">{t('items.macSession.description')}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.macSession.process.title')}</h4>
            <div className="space-y-4">
              {t.raw('items.macSession.process.steps').map((step: { title: string; description: string }, index: number) => (
                <div key={index}>
                  <h5 className="font-semibold">{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">{t('items.macSession.benefits.title')}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {t.raw('items.macSession.benefits.items').map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <p className="mb-4">{t('items.macSession.conclusion')}</p>
          
          <div className="mt-4">
            <p className="font-semibold">{t('items.macSession.price.amount')}</p>
            <p>{t('items.macSession.price.duration')}</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <section id="services" className="py-12 scroll-mt-12" aria-labelledby="services-title">
      <div>
        <h2 id="services-title" className="text-3xl font-bold mb-8">{t('title')}</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <article key={service.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenService(openService === service.id ? null : service.id)}
                className="w-full p-6 bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-colors"
                aria-expanded={openService === service.id}
                aria-controls={`content-${service.id}`}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform ${
                    openService === service.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`content-${service.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openService === service.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-gray-600">{service.content}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
