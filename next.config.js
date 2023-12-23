/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.source\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
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

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
