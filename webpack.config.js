var path =require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={

    entry: './src/index.js',
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
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.ejs'
		})
    ],

    devServer: {
		port: 8080,
		disableHostCheck: true
	}
}