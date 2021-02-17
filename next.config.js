// const path = require('path')

const withPreact = require('next-plugin-preact')
const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader')
const tsconfigRaw = require('./tsconfig.json')

const basePath =
	'development' === process.env.NODE_ENV ? '' : '/music-showcase/'
module.exports = withPreact({
	env: { SITE_NAME: 'Music Showcase' },
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath,
	},
	webpack(config, { webpack, dev }) {
		config.node = {
			...config.node,
			fs: 'empty',
			child_process: 'empty',
		}
		if (!dev) {
			config.plugins.push(new webpack.ProvidePlugin({ React: 'react' }))
			config.plugins.push(new ESBuildPlugin())
			const convertToESBuild = obj =>
				'next-babel-loader' === obj.loader
					? {
							loader: 'esbuild-loader',
							options: { loader: 'tsx', target: 'es2017', tsconfigRaw },
					  }
					: obj
			const rule = config.module.rules[0]
			if (rule)
				rule.use = Array.isArray(rule.use)
					? rule.use.map(e => ('object' === typeof e ? convertToESBuild(e) : e))
					: convertToESBuild(rule.use)
			config.optimization.minimizer.shift()
			config.optimization.minimizer.unshift(
				new ESBuildMinifyPlugin({ target: 'es2017', minify: true }),
			)
		}
		return config
	},
})
