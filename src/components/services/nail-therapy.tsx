"use client";

import { useTranslations } from "next-intl";
import { BookButton } from "./book-button";

export const NailTherapy = () => {
  const t = useTranslations("services.items.nailTherapy");

  return (
    <div className="space-y-8">
      <div className="p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent border-l-4 border-primary rounded-r-xl mb-10">
        <p className="text-gray-600">{t("description1")}</p>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="space-y-6">
              <p className="text-gray-600">{t("description2")}</p>
              <p className="text-gray-600">{t("description3")}</p>
              <p className="text-gray-600">{t("description4")}</p>
              <p className="text-gray-600">{t("description5")}</p>
            </div>
          </div>
        </div>
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