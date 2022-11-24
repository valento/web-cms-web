/** @type {import('next').NextConfig} */
const path =require('path')

const nextConfig = {
  reactStrictMode: true,
/** Image-component config */
  images: {
    minimumCacheTTL: 6000,
    domains: ['localhost']//, process.env.NEXT_PUBLIC_CMS_URL, 'cms.payloadcms.com'],
  },
/** Next13-app dir is still experimental */
  experimental: {
    appDir: true,
  },

  swcMinify: true,
  
  typescript: {
    ignoreBuildErrors: false
  },
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

/** Additional Webpack configs: */
  webpack: config => {
    const newConfig = {...config}
    newConfig.resolve.alias = {
      ...config.resolve.alias,
      '@scss': path.resolve(__dirname, './styles'),
      '@components': path.resolve(__dirname, './components'),
      '@forms': path.resolve(__dirname, './forms'),
      '@icons': path.resolve(__dirname, './icons')
    }
    return newConfig
  }

/** Global redirects: */
  // redirects: () => ([
  //   {},
  // ])
}

module.exports = nextConfig
