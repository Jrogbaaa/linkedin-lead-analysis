/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/linkedin-lead-analysis' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/linkedin-lead-analysis/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig; 