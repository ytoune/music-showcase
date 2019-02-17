import { lookup } from 'mime-types'

/**
 * @typedef {ReturnType<typeof import("./music").format> extends Promise<infer U>
 *   ? U: never} MusicMetas */
import { format as formatMusic } from './music'
import { format as formatTsv } from './tsv'

/** @typedef {[number, function?]} Task */

/** @type {(entry: import("jszip").JSZipObject) => Promise<Task>} */
export const format = async entry => {
	if (entry.dir) return [0, null]

	const type = lookup(entry.name)

	if (type && 'audio/' === type.slice(0, 6)) {
		return [1, push(await formatMusic(entry))]
	}

	if ('text/tab-separated-values' === type) {
		return [9, await formatTsv(entry)]
	}

	return [0, null]
}

// const returnNull = () => null

/** @type {<T>(item: T) => (list: T[]) => T[]} */
const push = item => list => [...list, item]

/** @type {(list: MusicMetas[], t: Task) => (MusicMetas & { preview?: import('./tsv').Preview })[]} */
export const reducer = (list, [_, f]) => {
	if ('function' === typeof f) return f(list)
	return list
}

/** @type {(q: Task, w: Task) => number} */
export const withPriority = ([p], [q]) => p - q
