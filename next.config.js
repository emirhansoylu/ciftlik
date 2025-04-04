/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ciftlik' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ciftlik/' : '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 