import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
