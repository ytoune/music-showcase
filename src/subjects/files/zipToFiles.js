
import { loadAsync } from 'jszip'

import { format, reducer, withPriority } from './format'

import { pushLoadStatus, RESET, ADD, DONE } from './loadings'
import { map } from 'rxjs/operators'

export { progress } from './loadings'

export const zipToFiles = async zip => {

	pushLoadStatus(RESET)
	pushLoadStatus(ADD)

	const ziped = await loadAsync(zip)

	pushLoadStatus(DONE)

	const list = []
	ziped.forEach((path, entry) => list.push(entry))

	return (
		(await Promise.all(list.map(format)))
			.sort(withPriority)
			.reduce(reducer, [])
	)

}

