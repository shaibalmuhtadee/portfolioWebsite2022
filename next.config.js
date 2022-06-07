/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/portfolioWebsite2022/",
  basePath: '/portfolioWebsite2022',
}

module.exports = nextConfig
