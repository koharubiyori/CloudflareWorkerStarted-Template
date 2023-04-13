const childProcess = require('child_process')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const express = require('express')
const devConfig = require('./webpack.dev.conf')

async function startWebpackServer() {
  const config = await devConfig()
  const compiler = webpack(config)
  const app = express()
  const devMiddleware = webpackDevMiddleware(compiler, {
    writeToDisk: true,
  })

  app.use(devMiddleware)
  await new Promise(resolve => devMiddleware.waitUntilValid(resolve))
}

function startMiniflareServer(target = './dist/worker.js') {
  const cpSpawn = childProcess.spawn('miniflare', [target, '--watch', '--debug', '--modules'], { shell: true })
  cpSpawn.stdout.on('data', data => process.stdout.write(data))
  cpSpawn.stderr.on('data', data => process.stdout.write(data))
}

;(async function main() {
  await startWebpackServer()
  startMiniflareServer()
})()