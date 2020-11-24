const path = require('path')
const basePath =
	'development' === process.env.NODE_ENV ? '' : '/music-showcase/'
module.exports = {
	env: { SITE_NAME: 'Music Showcase' },
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath,
	},
	webpack(config, _options) {
		config.resolve.alias = {
			...config.resolve.alias,
			'~': path.resolve(__dirname, 'src'),
		}
		config.node = {
			...config.node,
			fs: 'empty',
			child_process: 'empty',
		}
		return config
	},
}
