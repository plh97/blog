const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	devServer: {
		contentBase: './dist',
		inline: true,
		port: 3000,
		hot: true,
		historyApiFallback: true
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
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	}
}
