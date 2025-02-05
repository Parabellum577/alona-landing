"use client"

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = locale === 'uk' ? 'ru' : 'uk';
    router.push(`/${newLocale}`);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLocale}
      className="flex items-center gap-2 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {locale === 'uk' ? 'RU' : 'UK'}
      </span>
    </Button>
  );
} 