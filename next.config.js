/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dramileidyfdzribot.com',
      },
    ],
  },
}

module.exports = nextConfig 