const path = require('path')
const webpackRules = require('./webpack.rules')

const devMode = process.env.NODE_ENV === 'development'

module.exports = async function baseWebpackConfig(env) {
  return {
    target: 'es2022',
    
    entry: {
      main: path.resolve(__dirname, '../src/main.ts'),
    },
  
    output: {
      filename: 'worker.js',
      path: path.resolve(__dirname, '../dist'),
      library: {
        type: 'module'
      }
    },

    experiments: {
      outputModule: true,
    },
  
    module: {
      rules: webpackRules
    },
  
    resolve: {
      extensions: ['.ts', '.js', '.json'], // 如果引入时没带后缀名，则会依次尝试这里定义的后缀名
      alias: {
        '~': path.resolve(__dirname, '../src')
      }
    }
  }
}