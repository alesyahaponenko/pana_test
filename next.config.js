const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.externals.push('sharp')
      config.resolve.fallback = {
        fs: false,
      }
    }

    // audio support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // DATABASE_URL: process.env.DATABASE_URL,
  },
  images: {
    // domains: [''],
  },
}

module.exports = nextConfig
