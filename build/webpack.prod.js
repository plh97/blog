const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new UglifyJSPlugin(),
  ],
};
