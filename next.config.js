/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.innoloft.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
