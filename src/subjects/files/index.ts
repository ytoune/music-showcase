import { map, switchMap, shareReplay } from 'rxjs/operators'

import { upload } from '../upload'
import { zipToFiles } from './zipToFiles'

import type { File } from './types'
export type { File } from './types'

const sortByName = (files: File[]) =>
	files
		.slice()
		.sort((q, w) => q.name.localeCompare(w.name, [], { numeric: true }))

export const files = upload.pipe(
	switchMap(zipToFiles),
	map(sortByName),
	shareReplay(1),
)
