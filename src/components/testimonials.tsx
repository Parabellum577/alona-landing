"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Testimonial = {
  id: number;
  name: string;
  instagramUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Іра",
    instagramUrl: "https://www.instagram.com/viedmiedieva_iryna",
  },
  {
    id: 2,
    name: "Аліна",
    instagramUrl: "https://www.instagram.com/alinakubitska",
  },
  {
    id: 3,
    name: "Ліля",
    instagramUrl: "https://www.instagram.com/liliana_smm",
  },
  {
    id: 4,
    name: "Даша",
    instagramUrl: "https://www.instagram.com/komissarova.d.a.r.i.a",
  },
  {
    id: 5,
    name: "Альона",
    instagramUrl: "https://www.instagram.com/alona_tsymbaliuk_",
  },
  {
    id: 6,
    name: "Марія",
    instagramUrl: "https://www.instagram.com/mariiasavliuk",
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
    },
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-16 scroll-mt-12">
      <div className="mx-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col min-[366px]:flex-row justify-between items-start min-[366px]:items-center mb-8 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 min-[366px]:mb-0">
              {t("title")}
            </h2>
            <div className="flex gap-4 md:gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className="rounded-full bg-primary text-white hover:bg-primary-hover hover:text-white disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className="rounded-full bg-primary text-white hover:bg-primary-hover hover:text-white disabled:opacity-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4"
                >
                  <div className="relative h-full">
                    <div className="bg-gray-50 rounded-3xl p-8 h-full flex flex-col relative">
                      <div className="text-primary text-6xl font-serif absolute left-4 top-3">
                        &ldquo;
                      </div>
                      <p className="text-gray-600 mb-auto text-lg pt-8">
                        {t(`reviews.${testimonial.id}`)}
                      </p>
                      <div className="flex items-center justify-start mt-6">
                        <span className="font-semibold text-lg">
                          {testimonial.name}
                        </span>
                        {testimonial.instagramUrl && (
                          <Link
                            href={testimonial.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-hover transition-colors ml-6"
                          >
                            <Instagram className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                      <div className="text-primary text-6xl font-serif absolute right-4 -bottom-3">
                        &rdquo;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
