const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlPlugin({
      title: 'proxy-webpack'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: 'dist',
    proxy: {
      '/withdraw': {
        target: 'http://127.0.0.1:3000',  // 被代理的服务器地址
      }
    }
  }
}