
import { DateTime } from 'luxon'
import { TSV } from 'tsv'

import { pushLoadStatus, ADD, DONE } from '../loadings'


export const format = async entry => {

	pushLoadStatus(ADD)

	const preview = TSV.parse(
		'filename\tstart\tend\n' +
		await entry.async('text')
	)
		.map(totime)
		.filter(hasdata)
		.reduce(fold, {})

	pushLoadStatus(DONE)

	return make(preview)

}

const make = preview => files => files.map(({name, ...file}) => ({
	name,
	preview: preview[name] || {},
	...file
}))

const hasdata = ({filename, start, end}) => (filename && start && end)
const totime = ({filename, start: _s, end: _e}) => {
	const start = strtotime(_s)
	const end = strtotime(_e)
	return {filename, start, end}
}

const strtotime = str => {
	const m = /^(\d+):(\d+)(\.\d+|)$/.exec(str)
	if (!m) return
	const [min, sec, flo] = m.slice(1).map(toNum)
	return 60 * min + sec + flo
}

const fold = (dict, {filename, start, end}) => ({
	...dict,
	[filename]: {start, end},
})

const toNum = _ => Number(_) || 0
