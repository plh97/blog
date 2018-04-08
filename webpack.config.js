const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');

const devWebpackConfig = require('./build/webpack.dev.js');
const prodWebpackConfig = require('./build/webpack.prod.js');


module.exports = env => merge(env.NODE_ENV === 'dev' ? devWebpackConfig : prodWebpackConfig, {
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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'blog - pengliheng',
      favicon: './favicon.ico',
      template: `${__dirname}/assets/template/index.ejs`,
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
});

