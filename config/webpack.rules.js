const path = require('path')

module.exports = [
  {
    test: /\.(js|ts)$/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, '../src')
  },

  {
    test: /\.(jpe?g|png|gif|svg|webp)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 4 * 1024
      }
    }
  }
]