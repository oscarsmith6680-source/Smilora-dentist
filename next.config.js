/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:path*', destination: '/', permanent: true },
      { source: '/cookie-policy', destination: '/privacy-policy', permanent: true },
    ];
  },
}

module.exports = nextConfig
