let path = require('path')
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
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