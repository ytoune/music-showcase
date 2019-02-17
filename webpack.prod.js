const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['@babel/plugin-syntax-object-rest-spread'],
							presets: [
								[
									'@babel/preset-env',
									{
										targets: '> 0.25%, not dead',
										useBuiltIns: 'entry',
										modules: false,
									},
								],
								'@babel/preset-react',
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'file-loader', options: { name: '[name].[ext]' } },
					'extract-loader',
					{ loader: 'html-loader', options: { minimize: true } },
				],
			},
		],
	},
	node: {
		fs: 'empty',
		child_process: 'empty',
	},
	resolve: {
		alias: {},
	},
	plugins: [],
}
