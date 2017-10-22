const
	path = require("path"),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	ManifestPlugin = require('webpack-manifest-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': [
			'./src/app'
		],
		vendor: [
			"react",
			"react-dom",
			"react-router-dom",
			"react-syntax-highlighter"
		]
	},
	devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
	output: {
		filename: "[name].[hash].js",
		chunkFilename:'[name].[chunkhash].js',
		path: path.join(__dirname, "dist"),
	},
	// "resolve": {
	//   "alias": {
	//     "react": "preact-compat",
	//     "react-dom": "preact-compat"
	//   }
	// },
	module:{
		rules:[
			{
        test: /(\.less|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
			},{
				test: /\.(js|jsx)$/,
				exclude: /(node_module|bower_components)/,
				loader:'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ManifestPlugin(path.join('dist', 'manifest.json')),
		new HtmlWebpackPlugin({
			title: 'Blog',
			favicon:'./favicon.ico',
			template: __dirname + '/src/jsx/views/index.ejs'
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor",
		  minChunks: Infinity
		}),
    new ExtractTextPlugin({
      filename:'index.[hash].css'
    })
	]
};
