// @ts-check

const withPreact = require('next-plugin-preact')
const basePath =
	'development' === process.env.NODE_ENV ? '' : '/music-showcase/'

module.exports = withPreact({
	env: { SITE_NAME: 'Music Showcase' },
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath,
	},
})
