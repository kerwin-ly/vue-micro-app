const { defineConfig } = require('@vue/cli-service');
const { name } = require('../main/package.json');
const path = require('path');

module.exports = defineConfig({
  // publicPath: process.env.BASE_URL,
  publicPath: process.env.NODE_ENV === 'production' ? '/micro' : '/',
  // transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {}
        },
        additionalData: `
          @import "~@/styles/variables.less";
        `
      }
    }
  },
  chainWebpack: (config) => config.resolve.symlinks(false),
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    experiments: {
      topLevelAwait: true
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: name,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  },
  devServer: {
    host: 'localhost',
    proxy: null,
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  }
});
