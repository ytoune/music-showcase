import { loadAsync } from 'jszip'

/** @typedef {import("./format").Task} Task */
import { format, reducer, withPriority } from './format'

import { pushLoadStatus, RESET, ADD, DONE } from './loadings'

export { progress } from './loadings'

/** @param {File} zip */
export const zipToFiles = async zip => {
	pushLoadStatus(RESET)
	pushLoadStatus(ADD)

	const ziped = await loadAsync(zip)

	pushLoadStatus(DONE)

	/** @type {import("jszip").JSZipObject[]} */
	const list = []
	ziped.forEach((path, entry) => list.push(entry))

	return (await Promise.all(list.map(format)))
		.sort(withPriority)
		.reduce(reducer, [])
}
