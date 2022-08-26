const fs = require('fs')
const path = require('path')
const proEnv = require('./build/prod.env')
const { defineConfig } = require('@vue/cli-service')

const publicPath =
  process.env.NODE_ENV === 'production' ? `//static.yuanzidai.com/tfstatic-${proEnv.BUSINESS_TYPE}/${proEnv.PROJECT_NAME}` : '/'

module.exports = defineConfig({
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: proEnv.OUT_PATH,
  publicPath: publicPath,
  filenameHashing: true,
  productionSourceMap: false,
  projectName: proEnv.PROJECT_NAME,
  syncHost: ['10.12.17.48', '10.12.17.75'],
  businessType: proEnv.BUSINESS_TYPE,
  skipCodeReview: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: '时光金科H5模版',
      chunks: ['index']
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    allowedHosts: 'all',
    // proxy: {
    //     '/api': {
    //         target: "http://localhost:8081/",
    //         ws: true,
    //         changeOrigin: true
    //     }
    // }
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      devServer.app.all(/^\/api/, (_, response) => {
        const apiFile = path.join(__dirname, _.path + '.json')
        return response.sendFile(apiFile)
      })
      return middlewares
    }
  },
  chainWebpack: (config) => {
    // 复制flexible.js到dist/
    const flexibleFilePath = path.join(__dirname, 'public/flexible.js')
    const toFilePath = path.join(__dirname, 'dist/' + proEnv.OUT_PATH + '/js')
    config.plugin('copy').use(require('copy-webpack-plugin'), [
      [
        {
          from: flexibleFilePath,
          to: toFilePath,
          ignore: []
        }
      ]
    ])
  },
  hooks: {
    after: function (webpackConfig) {
      const configFile = path.join(__dirname, 'dist/' + proEnv.OUT_PATH + '/config.json')
      fs.readFile(configFile, 'utf8', function (err, data) {
        if (err) {
          console.error('err ====== ', err)
        } else {
          let configInfo = JSON.parse(data)
          // 添加 flexible.js
          configInfo['javascript'].unshift(publicPath + '/' + proEnv.OUT_PATH + '/js/flexible.js')
          fs.writeFileSync(configFile, JSON.stringify(configInfo))
        }
      })
    }
  }
})
