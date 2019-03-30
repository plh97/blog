const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv').config({
	path: resolve('.env')
})

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		main: path.resolve('./src/index.js')
	},
	output: {
		path: path.resolve('./dist'),
		filename: 'main.[hash:8].js',
		chunkFilename: 'bundle.[name].js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vender',
					chunks: 'async'
				}
			}
		}
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@': resolve('src'),
			'@root': resolve(''),
			'@utils': resolve('src/utils'),
			'@reduxs': resolve('src/redux-relate')
		}
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(woff|ttf|png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/,
							name: '[1]-[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: path.resolve('public/favicon.ico'),
			template: path.resolve('public/index.html')
		}),
		new webpack.DefinePlugin({
			'process.env': dotenv.parsed
		})
	]
}
