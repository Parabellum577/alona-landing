"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { MacSession } from "@/components/services/mac-session";
import { TrustSession } from "@/components/services/trust-session";
import { LilaSession } from "@/components/services/lila-session";
import { NailTherapy } from "@/components/services/nail-therapy";

export function Services() {
  const [openService, setOpenService] = useState<string | null>(null);
  const t = useTranslations("services");

  useEffect(() => {
    const handleOpenService = (event: CustomEvent) => {
      setOpenService(event.detail);
    };

    window.addEventListener("openService", handleOpenService as EventListener);
    return () =>
      window.removeEventListener(
        "openService",
        handleOpenService as EventListener
      );
  }, []);

  const services = [
    {
      id: "nail-therapy",
      title: t("items.nailTherapy.title"),
      content: <NailTherapy />,
    },
    {
      id: "lila",
      title: t("items.lila.title"),
      content: <LilaSession />,
    },
    {
      id: "trust-session",
      title: t("items.trustSession.title"),
      content: <TrustSession />,
    },
    {
      id: "mac-session",
      title: t("items.macSession.title"),
      content: <MacSession />,
    },
  ];

  return (
    <section
      id="services"
      className="py-12 scroll-mt-12"
      aria-labelledby="services-title"
    >
      <div>
        <h2 id="services-title" className="text-3xl font-bold mb-8">
          {t("title")}
        </h2>
        <div className="space-y-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenService(openService === service.id ? null : service.id)
                }
                className="w-full p-6 bg-gray-50 flex justify-between items-center hover:bg-gray-100 transition-colors"
                aria-expanded={openService === service.id}
                aria-controls={`content-${service.id}`}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform ${
                    openService === service.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`content-${service.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openService === service.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-gray-600">{service.content}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
