/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/referenzen', destination: '/use-cases', permanent: true },
      { source: '/erstgespraech', destination: '/kurz-check', permanent: true },
    ];
  },
};

module.exports = nextConfig;
