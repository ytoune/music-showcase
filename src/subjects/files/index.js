import { switchMap, shareReplay } from 'rxjs/operators'

import { upload } from '../upload'
import { zipToFiles } from './zipToFiles'

export const files = upload.pipe(
	switchMap(zipToFiles),
	shareReplay(1),
)
