"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export const BookButton = () => {
  const t = useTranslations("services");

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Button onClick={scrollToBottom}>
      {t("bookNow", { defaultValue: "Записатися" })}
    </Button>
  );
}; 