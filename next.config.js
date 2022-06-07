/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/portfolioWebsite2022/",
  BACKEND_URL: '/wallisconsultancy',
}

module.exports = nextConfig
