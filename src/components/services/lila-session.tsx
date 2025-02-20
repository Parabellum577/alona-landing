"use client";

import { useTranslations } from "next-intl";
import { CheckCircleIcon } from "lucide-react";
import { BookButton } from "./book-button";

export const LilaSession = () => {
  const t = useTranslations("services.items.lila");

  return (
    <div className="space-y-8">
      <div className="p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent border-l-4 border-primary rounded-r-xl mb-10">
        <p className="text-gray-600">{t("description")}</p>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl" />
          <div className="relative p-8">
            <h4 className="text-xl font-semibold mb-6">{t("process.title")}</h4>
            <div className="space-y-4">
              {t.raw("process.steps").map((step: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
          <h4 className="text-xl font-semibold mb-6">{t("benefits.title")}</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {t.raw("benefits.items").map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-primary mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-6 bg-white/5 rounded-xl border border-white/10">
        <p className="text-gray-600 mb-4">{t("conclusion")}</p>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xl font-semibold">{t("price")}</p>
            <p className="text-sm text-gray-400">{t("duration")}</p>
          </div>
          <BookButton />
        </div>
      </div>
    </div>
  );
}; 