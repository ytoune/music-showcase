const path = require('path')
const basePath = '/music-showcase/'
module.exports = {
	env: { SITE_NAME: 'Music Showcase' },
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath,
	},
	webpack(config, _options) {
		config.resolve.alias = {
			...config.resolve.alias,
			'~': path.resolve(__dirname),
		}
		config.node = {
			...config.node,
			fs: 'empty',
			// eslint-disable-next-line @typescript-eslint/camelcase
			child_process: 'empty',
		}
		return config
	},
}
