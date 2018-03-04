const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'mobx',
      'mobx-react',
      'react-router-dom',
    ],
  },
  mode: 'development',
  // mode: 'production',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /(\.less|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      }),
      // use: ['css-loader', 'less-loader'],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      loader: 'babel-loader',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '个人博客 - 彭立衡',
      favicon: './favicon.ico',
      template: `${__dirname}/assets/template/index.ejs`,
    }),
    new ExtractTextPlugin('index.[hash].css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      access_token: 'f096866b34da0bea4eab0483465e9a9f20dfc3d5',
      DEBUG: false,
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
    },
  },
};
