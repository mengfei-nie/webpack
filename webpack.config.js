var path = require('path'); // path路径
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 打开浏览器

module.exports = {
  // 入口文件，可配置多入口和单入口
  entry: {
    index: './app/index.js',
    test: './app/test.js'
  },
  // 输出文件
  output: {
    // filename: "bundle.js", // 文件名
    filename: "[name].bundle.js", // 多入口时文件名[name]=>enrty[name],[id]=>entry[index],[hash]=>md5
    path: path.resolve(__dirname, 'dist'), //文件目录
    publicPath: '' // 文件路径
    // chunkFilename: '[id].chunk.js'
  },
  // 不同类型怎么处理
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [
    //       { loader: "style-loader" },
    //       { loader: "css-loader" }
    //     ]
    //   }
    // ]
  },
  // import时怎么解析
  resolve: {
    // 设置别名
    alias:{
      'common': "./js" 
    },
    extensions: [".js",".css"], //自动添加后缀
    modules: ["node_modules"] // 模块解析范围
  },
  plugins: [
      // new webpack.HotModuleReplacementPlugin(), // Enable HMR
      new OpenBrowserPlugin({ 
        url: 'http://localhost:8888',
        browser: 'chrome'
      }) // 自动打开浏览器
  ],
  // 本地服务
  devServer: {
    port: 8888,
    hot: true
  }
}