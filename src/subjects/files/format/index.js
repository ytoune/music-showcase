
import { lookup } from 'mime-types'

import { format as formatMusic } from './music'
import { format as formatTsv } from './tsv'

export const format = async entry => {

	if (entry.dir) return [0]

	const type = lookup(entry.name)

	if ('audio/' === type.slice(0, 6)) {
		return [1, push(await formatMusic(entry))]
	}

	if ('text/tab-separated-values' === type) {
		return [9, await formatTsv(entry)]
	}

	return [0]

}

const returnNull = () => null
const push = item => list => [...list, item]

export const reducer = (list, [_priority, f]) => {
	if ('function' === typeof f) return f(list)
	return list
}

export const withPriority = ([p], [q]) => p - q
