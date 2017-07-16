const 
	path = require("path"),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'app': [
			'babel-polyfill',
			'react-hot-loader/patch',
			'./src/app'
		],
		vendor: [
			"react",
			"react-dom",
			"react-router-dom",
			"react-router-bootstrap",
			"react-bootstrap",
			"react-syntax-highlighter"
		]
	},
	output: {
		filename: "[name].[hash].js",
		chunkFilename:'[name].[chunkhash].js',
		path: path.join(__dirname, "dist"),
		publicPath:'/dist'
	},
	devServer: {
		host: "localhost",
		publicPath:'/dist',
		port: 3004,
		hot: true,
		overlay: {
			warnings: true,
			errors: true
		},
		compress: true,
		allowedHosts: [
		    'pengliheng.github.io'
		]
	},
	module:{
		rules:[
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}
				, {
					loader: "css-loader"
				}
				, {
					loader: "less-loader", options: {
						strictMath: true,
						noIeCompat: true
					}
            	}]
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use:[{
					loader:'url-loader',
					options:{
						mimetype:''
					}
				}]
			}
			,{
				test: /\.(js|jsx)$/,
				exclude: /(node_module|bower_components)/,
				loader:'babel-loader'
			}
			,{
				test: /\.html$/,
				use:[{
					loader:'html-loader',
					options: {
						minimize: true,
						removeComments: true,
						collapseWhitespace: true
					}
				}]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'],{
			"exclude": [ "images"]
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'react',
			favicon:'./favicon.ico',
			template: __dirname + '/src/view/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor",
		  minChunks: Infinity
		})
	]
};