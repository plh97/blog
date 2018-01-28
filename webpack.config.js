const
	path = require("path"),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': [
			'./src/client/app'
		],
		vendor: [
			"react",
			"react-dom",
			"mobx",
			"mobx-react",
			"react-router-dom"
		]
	},
	output: {
		filename: "[name].[hash].js",
		chunkFilename:'[name].[chunkhash].js',
		path: path.join(__dirname, "dist"),
		publicPath:"/",
	},
	module:{
		rules:[{
			test: /(\.less|\.css)$/,
			use: [
				'style-loader',
				'css-loader',
				'less-loader'
		]},{
			test: /\.(js|jsx)$/,
			exclude: /node_module/,
			loader:'babel-loader'
		},{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Blog',
			favicon:'./favicon.ico',
			template: __dirname + '/assets/template/index.ejs'
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor",
		  minChunks: Infinity
		})
	]
};
