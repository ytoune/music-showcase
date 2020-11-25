import { JSZipObject } from 'jszip'
import { parseBlob } from 'music-metadata-browser'

import { pushLoadStatus, ADD, DONE } from '../loadings'

export const format = async (entry: JSZipObject) => {
	pushLoadStatus(ADD)
	pushLoadStatus(ADD)

	const { name } = entry

	const blob = await entry.async('blob')

	pushLoadStatus(DONE)

	const metadata = await parseBlob(blob)

	pushLoadStatus(DONE)

	return {
		name,
		...metadata,
		blob,
	}
}
