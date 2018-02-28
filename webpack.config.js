const
	path = require("path"),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': [
			'./src/client/index.js'
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
			// use: [
			// 	'style-loader',
			// 	'css-loader',
			// 	'less-loader'
			// ]
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader',"postcss-loader" ,'less-loader']
			})
		},{
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
			title: '个人博客 - 彭立衡',
			favicon:'./favicon.ico',
			template: __dirname + '/assets/template/index.ejs'
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor",
		  minChunks: Infinity
		}),
		new ExtractTextPlugin({
			filename: 'index.[hash].css'
		})
	]
};
