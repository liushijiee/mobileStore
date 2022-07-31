let path = require('path')
module.exports = {
  publicPath:'/',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
    }

  },
  devServer:{
    proxy:{
      'api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^api':'/api'
        }
      }
    }
  },
  lintOnSave: false,//关闭语法检查
  // devServer: {
  //   proxy: 'http://localhost:5000'//这种方法会优先本地文件
  // }
  configureWebpack:(config)=>{
    config.resolve = {
      extensions:['.js','.json','.vue'],
      alias:{
        '@':path.resolve(__dirname,'./src')
      }
    }
  }
}