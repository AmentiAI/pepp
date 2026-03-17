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
      {
        source: '/stacks/body-recomposition',
        destination: '/stacks/body-recomp',
        permanent: true,
      },
      {
        source: '/stacks/metabolic-shred',
        destination: '/stacks/fat-loss',
        permanent: true,
      },
      {
        source: '/stacks/recovery-repair',
        destination: '/stacks/recovery',
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
