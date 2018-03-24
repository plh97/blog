const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

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
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /(\.less|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader'],
      }),
      // use: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      loader: 'babel-loader',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new CleanWebpackPlugin({
      root: '/dist',
    }),
    new HtmlWebpackPlugin({
      title: '个人博客 - 彭立衡',
      favicon: './favicon.ico',
      template: './assets/template/index.ejs',
    }),
    new ExtractTextPlugin('index.[hash].css'),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
    },
  },
};
