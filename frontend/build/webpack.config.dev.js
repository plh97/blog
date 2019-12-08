const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// local
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
	devServer: {
		host: '0.0.0.0',
		contentBase: './dist'
		// inline: true,
		// port: process.env.PORT,
		// hot: true,
		// historyApiFallback: true
	},
	devtool: 'source-map',
	mode: 'development',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new FriendlyErrorsWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true
						}
					}
				]
			}
		]
	}
})
