const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// local
const baseWebpackConfig = require('./webpack.config.base')

module.exports = merge(baseWebpackConfig, {
	devtool: false,
	mode: 'production',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		})
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
			// {
			// 	test: /\.(sa|sc|c)ss$/,
			// 	use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			// }
		]
	}
})
