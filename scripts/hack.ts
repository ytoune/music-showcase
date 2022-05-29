import { join } from 'path'
import { writeFile } from 'fs/promises'
;(async () => {
	await writeFile(
		join(__dirname, '../node_modules/react-dom/server.browser.js'),
		[
			"exports.renderToStaticMarkup = exports.renderToString = require('preact-render-to-string').renderToString;",
		]
			.map(t => t + '\n')
			.join(''),
	)
})().catch(x => {
	console.error(x)
	process.exit(1)
})
