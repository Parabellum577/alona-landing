"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export function Services() {
  const [openService, setOpenService] = useState<string | null>(null);
  const t = useTranslations("services");

  const services = [
    {
      id: "nail-therapy",
      title: t("nailTherapy.title"),
      content: (
        <>
          <p className="mb-4">{t("nailTherapy.description1")}</p>
          <p className="mb-4">{t("nailTherapy.description2")}</p>
          <p className="mb-4">{t("nailTherapy.description3")}</p>
          <p className="mb-4">{t("nailTherapy.description4")}</p>
          <div className="mt-4">
            <p className="font-semibold">{t("nailTherapy.price")}</p>
            <p>{t("nailTherapy.duration")}</p>
          </div>
        </>
      ),
    },
    {
      id: "lila",
      title: t("lila.title"),
      content: t("lila.description"),
    },
    {
      id: "matrix",
      title: t("matrix.title"),
      content: t("matrix.description"),
    },
  ];

  return (
    <section id="services" className="py-12">
      <div>
        <h2 className="text-3xl font-bold mb-8 ">{t("title")}</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenService(openService === service.id ? null : service.id)
                }
                className="w-full p-6 bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform ${
                    openService === service.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openService === service.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-gray-600">{service.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
