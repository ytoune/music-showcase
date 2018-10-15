
import { loadAsync } from 'jszip'
import { parseBlob } from 'music-metadata-browser'

import { BehaviorSubject } from 'rxjs'
import { scan, map } from 'rxjs/operators'

export const zipToFiles = async zip => {

	_loading.next(RESET)
	_loading.next(ADD)

	const ziped = await loadAsync(zip)

	_loading.next(DONE)

	const list = []
	ziped.forEach((path, entry) => list.push(entry))

	return await Promise.all(list.map(format))

}

const format = async entry => {

	_loading.next(ADD)
	_loading.next(ADD)

	const blob = await entry.async('blob')

	_loading.next(DONE)

	const metadata = await parseBlob(blob)
	const url = URL.createObjectURL(blob)

	_loading.next(DONE)

	return {
		...metadata,
		url,
	}

}


const _loading = new BehaviorSubject()
const RESET = 'RESET'
const ADD = 'ADD'
const DONE = 'DONE'
export const progress = _loading.pipe(
	scan(([done, total], type) => {
		switch (type) {
			case RESET:
				return [done - total, 0]
			case ADD:
				return [done, total + 1]
			case DONE:
				return [done + 1, total]
			default:
				return [done, total]
		}
	}, [0, 0]),
	map(([done, total]) => ({
		done: Math.max(0, done),
		total,
		progress: total ? Math.max(0, done) / total : 0,
	})),
)
