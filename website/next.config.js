/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/referenzen', destination: '/use-cases', permanent: true },
    ];
  },
};

module.exports = nextConfig;
