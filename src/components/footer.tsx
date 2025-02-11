import Link from "next/link";
import { Instagram, Send, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center min-[580px]:justify-between justify-center">
          <div className="relative w-20 h-20 hidden min-[580px]:block">
            <Image
              src="/images/elephant.avif"
              alt="image"
              sizes="100%"
              fill
              className="object-contain invert user-select-none"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/aln_litvin/"
                target="_blank"
                className="hover:text-primary-light"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://t.me/Litvin_Alona"
                target="_blank"
                className="hover:text-primary-light"
              >
                <Send className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:alenalementa@gmail.com"
                className="hover:text-primary-light"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} - {t("copyright")}
            </div>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link
                href={
                  locale === "uk" ? "/uk/privacy-policy" : "/ru/privacy-policy"
                }
                className="hover:text-primary-light"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href={
                  locale === "uk" ? "/uk/cookie-policy" : "/ru/cookie-policy"
                }
                className="hover:text-primary-light"
              >
                {t("cookiePolicy")}
              </Link>
            </div>
          </div>
          <div className="relative w-20 h-20 hidden min-[580px]:block">
            <Image
              src="/images/yoga.avif"
              alt="image"
              sizes="100%"
              fill
              className="object-contain invert user-select-none"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
