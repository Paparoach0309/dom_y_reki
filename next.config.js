/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? '/dom_y_reki' : '',
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
