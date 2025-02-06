"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from 'next-intl'

type Testimonial = {
  id: number
  name: string
  instagramUrl?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Матриця Долі",
    instagramUrl: "https://instagram.com/example1",
  },
  {
    id: 2,
    name: "Консультація по матриці",
    instagramUrl: "https://instagram.com/example2",
  },
  {
    id: 3,
    name: "Матриця Долі",
    instagramUrl: "https://instagram.com/example1",
  },
  {
    id: 4,
    name: "Консультація по матриці",
    instagramUrl: "https://instagram.com/example2",
  },
]

export function Testimonials() {
  const t = useTranslations('testimonials')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center mb-8 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">{t('title')}</h2>
            <div className="flex gap-4 md:gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="rounded-full bg-[#9399FA] text-white hover:bg-[#7A81F7] hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="rounded-full bg-[#9399FA] text-white hover:bg-[#7A81F7] hover:text-white disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <div className="relative h-full">
                    <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col relative">
                      <div className="text-[#9399FA] text-6xl font-serif absolute left-4 top-3">&ldquo;</div>
                      <p className="text-gray-600 mb-auto text-lg pt-8">{t(`reviews.${testimonial.id}`)}</p>
                      <div className="flex items-center justify-start mt-6">
                        <span className="font-semibold text-lg">{testimonial.name}</span>
                        {testimonial.instagramUrl && (
                          <Link
                            href={testimonial.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9399FA] hover:text-[#7A81F7] transition-colors ml-6"
                          >
                            <Instagram className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                      <div className="text-[#9399FA] text-6xl font-serif absolute right-4 -bottom-3">&rdquo;</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

