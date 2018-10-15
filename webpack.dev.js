
const path = require('path')

module.exports = {
	...require('./webpack.prod'),
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
	},
}
