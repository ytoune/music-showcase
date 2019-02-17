import { Subject } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

/** @type {Subject<File>} */
const _upload = new Subject()

/** @type {(zip: File) => void} */
export const pushZip = zip => _upload.next(zip)

export const upload = _upload.pipe(shareReplay(1))
