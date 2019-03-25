import { switchMap, shareReplay } from 'rxjs/operators'

import { upload } from '../upload'
import { zipToFiles } from './zipToFiles'

export { File } from './types'

export const files = upload.pipe(
	switchMap(zipToFiles),
	shareReplay(1),
)
