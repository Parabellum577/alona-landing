import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gratisography.com', 'cdn2.specialist.ru']
  }
};

export default withNextIntl(nextConfig); 