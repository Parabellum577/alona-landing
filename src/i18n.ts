import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  try {
    const locale = await requestLocale;
    const messages = (await import(`./messages/${locale}.json`)).default;
    
    return {
      messages,
      locale,
      timeZone: 'Europe/Kiev',
      now: new Date()
    };
  } catch {
    const messages = (await import('./messages/uk.json')).default;
    return {
      messages,
      locale: 'uk',
      timeZone: 'Europe/Kiev',
      now: new Date()
    };
  }
}); 

