const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

module.exports = merge(baseWebpackConfig, {
	mode    : 'production',
	devtool : false,
	plugins : [
		new HtmlWebpackPlugin({
			inject   : 'body',
			minify   : true,
			template : `${paths.src}/index.html`,
		}),
	],
	optimization: {
		minimize     : true,
		runtimeChunk : {
			name: 'single',
		},
	},
	performance: {
		hints             : 'error',
		maxEntrypointSize : 512000,
		maxAssetSize      : 512000,
	},
	// eslint-disable-next-line no-dupe-keys
	plugins: [
		new ImageminPlugin({
			interlaced  : true,
			progressive : true,
			svgPlugins  : [ {removeViewBox: false} ],
			plugins     : [
				mozjpeg({quality: 50}),
				pngquant(),
			],
		}),
	],
});
