const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv').config({
  path: resolve('.env'),
})
const devWebpackConfig = require('./webpack.config.dev')
const prodWebpackConfig = require('./webpack.config.prod')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const baseWebpackConfig = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', ],
    alias: {
      '@': resolve('src'),
      '@root': resolve(''),
      '@utils': resolve('src/utils'),
      '@reduxs': resolve('src/redux-relate'),
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: { loader: 'babel-loader', },
    }, {
      test: /\.(woff|ttf|png|jpg|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
          name: '[1]-[name].[ext]',
        },
      }, ],
    }, ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
}

module.exports = env => env.NODE_ENV === 'development' ?
  merge(baseWebpackConfig, devWebpackConfig) :
  merge(baseWebpackConfig, prodWebpackConfig)