/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: [
    //   "avatars.githubusercontent.com",
    //   "github.com",
    //   "api.netlify.com",
    //   "hits.seeyoufarm.com",
    //   "doubanio.com",
    //   "*.doubanio.com",
    // ]
  }
}

module.exports = nextConfig
