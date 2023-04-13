const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = async function prodWebpackConfig(env) {
 return merge(await baseWebpackConfig(env), {
    mode: 'production',
  
    plugins: [
      new CleanWebpackPlugin(), // 清理上一次的build文件
    ]
  })
}