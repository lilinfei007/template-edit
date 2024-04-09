const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api/':{
        target: "https://ysdj.zhyell.com",
        changeOrigin: true,
      }
    }
  },
  chainWebpack:(config) => {
    config.externals({
      'vue':'Vue',
      'element-ui':'ELEMENT'
    })
  }
})