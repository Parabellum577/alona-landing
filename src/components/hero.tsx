"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToService = (serviceId: string) => {
    const servicesSection = document.querySelector('#services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
    window.dispatchEvent(new CustomEvent('openService', { detail: serviceId }))
  }

  return (
    <section className="pt-24 pb-12">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-8 items-start">
          <div className="relative h-full">
            <div className="aspect-square w-full h-full rounded-3xl bg-gray-100 overflow-hidden">
              <Image
                src="/images/hero_image.png"
                alt="Profile"
                width={800}
                height={800}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{t('title')}</h1>
              <h2 className="text-4xl font-bold text-primary">{t('name')}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[calc(100%-12rem)]">
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToService('nail-therapy')
                }}
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">{t('services.nailTherapy')}</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToService('trust-session')
                }}
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">{t('services.trustSession')}</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToService('lila')
                }}
                className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">{t('services.lila')}</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
                </div>
              </Link>
              <Link
                href="#contact"
                className="block p-6 bg-primary hover:bg-primary-hover text-white rounded-xl transition-colors group relative min-h-[160px]"
              >
                <span className="font-medium">{t('services.consultation')}</span>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

