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
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … if they contain a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within /api, except for
    // - … if they start with `/api/auth` or `/api/webhook`
    // - … if they contain a dot (e.g. `favicon.ico`)
    '/api/((?!auth|webhook|.*\\..*).*)'
  ]
}; 