"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function Certificates() {
  const t = useTranslations("certificates");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-12 bg-gray-50 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 ">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src="https://cdn2.specialist.ru/content/image/simplepage/sert-2019-newyear.jpg"
                alt={`Certificate ${index}`}
                fill
                sizes="100%"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-auto aspect-[4/3]">
            <Image
              src="https://cdn2.specialist.ru/content/image/simplepage/sert-2019-newyear.jpg"
              alt={`Certificate ${selectedImage}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
