const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}


module.exports = {
  devtool: 'source-map',
  resolve: {

    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      "@root": resolve(''),
      "@utils": resolve('src/utils'),
      "@reduxs": resolve('src/redux-relate'),
    },
  },
  devServer: {
    contentBase:'./dist',
    port: 3000
  },
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.(scss|css)$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.(woff|ttf|png|jpg|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
          name: '[1]-[name].[ext]',
        },
      }, ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
    })
  ]
}