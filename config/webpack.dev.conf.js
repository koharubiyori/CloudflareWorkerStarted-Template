const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = async function devWebpackConfig(env) {
  return merge(await baseWebpackConfig(env), {
    mode: 'development',
    devtool: 'source-map',
  })
}