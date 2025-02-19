import createMiddleware from 'next-intl/middleware';
import { defaultLocale } from '@/config/metadata';

export default createMiddleware({
  // List of all locales that are supported
  locales: ['uk', 'ru'],

  // Used when no locale matches
  defaultLocale,

  // Only add locale prefix for non-default locale
  localePrefix: 'always',

  localeDetection: false
});

export const config = {
  // Match all paths except api, _next, _vercel, and files with extensions
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Also match the root path
    '/'
  ]
}; 