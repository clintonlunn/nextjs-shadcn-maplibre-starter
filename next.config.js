/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geology.utah.gov',
        port: '',
        pathname: '/apps/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
