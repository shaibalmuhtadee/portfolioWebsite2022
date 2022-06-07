/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "https://shaibalmuhtadee.com" : "",
  basePath: isProd ? "/" : '',
}

module.exports = nextConfig
