const legacyDirectories = [
  '2024-dpr-golf-tournament',
  'apparel',
  'arcon-customer-feedback',
  'author',
  'awards',
  'blog',
  'contact',
  'custom-apparel',
  'custom-carhartt',
  'custom-drinkware',
  'dbia-golf-tournament',
  'design',
  'dpr-golf-tournament',
  'dt_gallery',
  'dt_logos',
  'dt_slideshow',
  'e-commerce',
  'fitness',
  'hall-threads-2-0-signup',
  'holiday',
  'media',
  'package',
  'portfolio',
  'print',
  'project',
  'project-category',
  'promo',
  'rapala-logo-lure-order-form',
  'rapala-lure-order-questions',
  'test',
  'tss_data',
  'tss_slider',
  'wp-content',
  'wp-includes',
  'wpa-stats-type'
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  outputFileTracingIncludes: {
    '/*': [
      './*.html',
      './*.xml',
      './*.xsl',
      './*.txt',
      ...legacyDirectories.map((directory) => `./${directory}/**/*`)
    ]
  }
}

export default nextConfig
