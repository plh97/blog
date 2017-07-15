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
		]
	},
	output: {
		filename: "[name].[hash].js",
		chunkFilename:'[name].[chunkhash].js',
		path: path.join(__dirname, "dist"),
		publicPath:'/'
	},
	devServer:{
		hot:true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath:'/'
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
						title: 'react',
						favicon:'./favicon.ico',
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
			template: './src/view/index.html'
		})
	]
};