const path = require('path')

const babelLoader = () => ({
	loader: 'babel-loader',
	options: {
		plugins: ['@babel/plugin-syntax-object-rest-spread'],
		presets: [
			[
				'@babel/preset-env',
				{
					targets: '> 0.25%, not dead',
					modules: false,
				},
			],
			'@babel/preset-react',
		],
	},
})

module.exports = {
	mode: 'production',
	entry: {
		app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.tsx')],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [babelLoader()],
			},
			{
				test: /\.tsx?$/,
				use: [babelLoader(), { loader: 'ts-loader' }],
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
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	plugins: [],
}
