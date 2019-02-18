var path =require('path');
require("babel-polyfill");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={

    entry: ["babel-polyfill",'./src/index.js'],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle-[name].bundle.js'
    },

    module:{
        rules: [
            { test: /\.js/, exclude: /node_modules/, loader: "babel-loader?cacheDirectory=true" },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
			{ test: /\.less$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }) },
          ]
    },

    resolve: {
		modules: [path.resolve(__dirname, "src/web_modules"), "node_modules"],
		extensions: ['.js', '.json', '.ts', '.tsx'],
	},

    plugins:[
        new ExtractTextPlugin({
			filename: 'bundle-[name].css', disable: false, allChunks: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.ejs'
		})
    ],

    devServer: {
		port: 3000,
        disableHostCheck: true,
        historyApiFallback: true
	}
}