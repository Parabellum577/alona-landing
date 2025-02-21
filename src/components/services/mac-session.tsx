"use client";

import { useTranslations } from "next-intl";
import {
  HandshakeIcon,
  CheckCircleIcon,
  BookOpen,
  Brain,
  Download,
} from "lucide-react";
import { BookButton } from "./book-button";

export const MacSession = () => {
  const t = useTranslations("services.items.macSession");
  const stepIcons = [HandshakeIcon, BookOpen, Brain, Download];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent border-l-4 border-primary rounded-r-xl mb-6 sm:mb-10">
        <p className="text-sm sm:text-base text-gray-600">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {t.raw("process.steps").map((step: { title: string; description: string }, index: number) => {
          const Icon = stepIcons[index];
          return (
            <div className="relative p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10" key={index}>
              <div className="absolute -top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <h4 className="mt-4 text-sm sm:text-base font-semibold">{step.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-gray-400">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl" />
        <div className="relative p-8">
          <h4 className="text-xl font-semibold mb-6">{t("benefits.title")}</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {t.raw("benefits.items").map((benefit: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 min-w-3 min-h-3 text-primary mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
          <div>
            <p className="text-lg font-semibold">{t("price.amount")}</p>
            <p className="text-sm text-gray-400">{t("price.duration")}</p>
          </div>
          <BookButton />
        </div>
      </div>
    </div>
  );
}; 