import Image from "next/image";
import { useTranslations } from "next-intl";

export function ContactFormSuccess({ message }: { message: string }) {
  const t = useTranslations('contact.form');

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-6">
        {t('thankYou')}
      </h2>
      <p className="text-xl text-gray-600 mb-12">
        {message}
      </p>
      <div className="max-w-md mx-auto relative aspect-square">
        <Image 
         src="/images/buda-lotos.png"
          alt="Buddha" 
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 
