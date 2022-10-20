const { defineConfig } = require('@vue/cli-service');
const { name } = require('../package.json');

module.exports = defineConfig({
  publicPath: process.env.BASE_URL,
  transpileDependencies: true,
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
    experiments: {
      topLevelAwait: true
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    host: 'localhost',
    proxy: null,
    port: 8082
  }
});
