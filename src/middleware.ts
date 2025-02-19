import createMiddleware from 'next-intl/middleware';
import { defaultLocale } from '@/config/metadata';

// Get the preferred locale, similar to the above or using a different method
export default createMiddleware({
  // List of all locales that are supported
  locales: ['uk', 'ru'],

  // Used when no locale matches
  defaultLocale,

  // Only add locale prefix for non-default locale
  localePrefix: 'as-needed',

  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 