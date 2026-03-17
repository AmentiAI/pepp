/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products/tirzepatide-10mg',
        destination: '/products/glp-2t-15m',
        permanent: true,
      },
      {
        source: '/products/semaglutide-5mg',
        destination: '/products/glp-1s-5mg',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apollopeptidesciences.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
