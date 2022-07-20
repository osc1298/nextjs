/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: ['placeimg.com'],
  },
}

module.exports = nextConfig
