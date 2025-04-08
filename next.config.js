/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ciftlik' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ciftlik/' : '',
  trailingSlash: true
}

module.exports = nextConfig 