"use client";

import { useTranslations } from "next-intl";
import { BookButton } from "./book-button";

export const TrustSession = () => {
  const t = useTranslations("services.items.trustSession");

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent border-l-4 border-primary rounded-r-xl mb-6 sm:mb-10">
        <p className="text-sm sm:text-base text-gray-600">{t("description")}</p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl" />
          <div className="relative p-4 sm:p-8">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              {t("expectations.title")}
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              {t
                .raw("expectations.items")
                .map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2  min-w-2 min-h-2 rounded-full bg-primary" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
          <h4 className="text-xl font-semibold mb-6">{t("formats.title")}</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 min-w-2 min-h-2 rounded-full bg-primary" />
              <span>{t("formats.offline")}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 min-w-2 min-h-2 rounded-full bg-primary" />
              <span>{t("formats.online")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-6 bg-white/5 rounded-xl border border-white/10">
        <p className="text-gray-600 mb-4">{t("conclusion")}</p>
        <p className="text-lg font-semibold text-primary">{t("cta")}</p>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{t("price")}</p>
          </div>
          <BookButton />
        </div>
      </div>
    </div>
  );
};
