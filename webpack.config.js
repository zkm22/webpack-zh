/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    main: './src/index.js',
  },

  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].js',
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 120,
      maxInitialRequests: 5,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        common: {
          test: /common/,
        },
        module1: {
          test: /module-1/,
        },
        module2: {
          test: /module-2/,
        },
      }
    },
  },
}