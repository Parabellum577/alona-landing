"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const certificates = [
  "/images/certificates/astro_numerology_cert.jpg",
  "/images/certificates/coaching_sert.png",
  "/images/certificates/metaphorical_cards_sert.jpg",
  "/images/certificates/nail_therapy_sert.png",
  "/images/certificates/psychotraum_sert.png",
  "/images/certificates/PTSD_sert.jpg",
] as const;

export function Certificates() {
  const t = useTranslations("certificates");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-12 bg-gray-50 rounded-3xl scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/3] cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto aspect-[4/3]">
            <Image
              src={certificates[selectedImage]}
              alt={`Certificate ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
