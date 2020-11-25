import { Subject } from 'rxjs'
import { shareReplay } from 'rxjs/operators'
import { openStore } from './cache'

const _upload = new Subject<File>()

let inited = false

const handleError = (x: unknown) => {
	console.error(x)
}

export const pushZip = (zip: File) => {
	inited = true
	_upload.next(zip)
}

export const upload = _upload.pipe(shareReplay(1))

const store = openStore()

'undefined' === typeof window ||
	store.read().then(zip => {
		if (inited) return
		inited = true
		_upload.next(zip)
		store.write(zip).catch(handleError)
	}, handleError)
