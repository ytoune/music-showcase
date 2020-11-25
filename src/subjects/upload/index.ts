import { Subject } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

const _upload = new Subject<File>()

export const pushZip = (zip: File) => {
	_upload.next(zip)
}

export const upload = _upload.pipe(shareReplay(1))
