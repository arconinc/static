/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/index.html'
        },
        {
          source: '/:path*/',
          destination: '/:path*/index.html'
        }
      ]
    }
  }
}

export default nextConfig
