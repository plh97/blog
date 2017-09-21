const 
	path = require("path"),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	webpack = require('webpack'),
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
	"resolve": {
	  "alias": {
	    "react": "preact-compat",
	    "react-dom": "preact-compat"
	  }
	},
	devServer: {
		host: "localhost",
		port: 3009,
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
					loader: "less-loader"
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
			,{
				test: /\.json$/,
				use: 'json-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'],{
			"exclude": [ "images"]
		}),
		new HtmlWebpackPlugin({
			title: 'React',
			favicon:'./favicon.ico',
			template: __dirname + '/src/view/index.ejs'
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "vendor",
		  minChunks: Infinity
		})
	]
};