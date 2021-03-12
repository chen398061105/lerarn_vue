const path = require('path')//动态获取路径

module.exports = {
  entry: './src/main.js',//入口
  output: {//出口
    path: path.resolve(__dirname,'dist'),//动态获取路径
    filename: 'bundle.js'
  }
};