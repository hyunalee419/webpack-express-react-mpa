const path = require('path');
require('webpack');


module.exports = [];

const modules = ['index', 'about'];
for (let key of modules) {
	module.exports.push(
		{
			entry: [
				'@babel/polyfill',
				'whatwg-fetch',
				path.join(__dirname, '/src/') + `${key}/index.js`,
			],
			output: {
				path: path.resolve(__dirname, 'dist'),
				filename: `${key}/bundle.js`,
			},
			module: {
				rules: [{
					test: /\.js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				}, {
					test: /\.tsx?$/,
					exclude: /(node_modules)/,
					loader: 'ts-loader'
				}, {
					test: /\.scss$/,
					exclude: /(node_modules)/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}]
			},
			resolve: {
				modules: [path.join(__dirname, 'src'), 'node_modules'],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
			},
		}
	)
}
