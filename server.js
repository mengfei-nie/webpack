var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');
config.entry.unshift("webpack-dev-server/client?http://localhost:8080/","webpack/hot/dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,config.devServer);
server.listen(8080);
