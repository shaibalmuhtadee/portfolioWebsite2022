/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? "/portfolioWebsite2022/" : "",
  basePath: isProd ? "/portfolioWebsite2022" : '',
}

module.exports = nextConfig
