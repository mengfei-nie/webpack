var webpack = require('webpack')
var WebpackMd5Hash = require('webpack-md5-hash');
var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var rootPath = './js'

module.exports = {
  entry: ['./js/entry.js'],
  output: {
    path: path.resolve(__dirname, "build/assets"),//打包路径
    publicPath: "/",//文件输出路径
    filename: 'bundle.[hash:6].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      // es6语法配置$ npm install babel-loader babel-core
      // $ npm install babel-preset-es2015
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by nmf'),
    new webpack.HotModuleReplacementPlugin(),
    // 代码压缩插件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new WebpackMd5Hash(),//md5时间戳
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}