/** @type {import('next').NextConfig} */
const wpContentBucketBase =
  'https://hrjlnxoyindmmacdjbsn.supabase.co/storage/v1/object/public/public-images'

const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/wp-content/:path*',
          destination: `${wpContentBucketBase}/wp-content/:path*`
        },
        {
          source: '/',
          destination: '/index.html'
        },
        {
          source: '/:path((?!api/).*)+/',
          destination: '/:path*/index.html'
        }
      ]
    }
  }
}

export default nextConfig
