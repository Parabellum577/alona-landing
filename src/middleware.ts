import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

// Get the preferred locale, similar to the above or using a different method
export default createMiddleware({
  defaultLocale,
  locales,
  // If the default locale is matched, the URL will be rewritten to remove the locale prefix
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(uk|ru)/:path*']
}; 