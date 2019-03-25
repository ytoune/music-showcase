import { loadAsync, JSZipObject } from 'jszip'

import { format, reducer, withPriority } from './format'

import { pushLoadStatus, RESET, ADD, DONE } from './loadings'

export { progress } from './loadings'

export const zipToFiles = async (zip: File) => {
	pushLoadStatus(RESET)
	pushLoadStatus(ADD)

	const ziped = await loadAsync(zip)

	pushLoadStatus(DONE)

	const list: JSZipObject[] = []
	ziped.forEach((_path, entry) => list.push(entry))

	return (await Promise.all(list.map(format)))
		.sort(withPriority)
		.reduce(reducer, [])
}
