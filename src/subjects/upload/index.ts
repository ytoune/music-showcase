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
	store.write(zip).catch(handleError)
}

export const upload = _upload.pipe(shareReplay(1))

const store = openStore()

'undefined' === typeof window ||
	store.read().then(zip => {
		if (inited || !zip) return
		inited = true
		_upload.next(zip)
		const { body } = document
		const wrap = document.createElement('div')
		wrap.style.position = 'fixed'
		wrap.style.top = '0'
		wrap.style.bottom = '0'
		wrap.style.right = '0'
		wrap.style.left = '0'
		wrap.style.zIndex = '99999999'
		wrap.addEventListener('click', () => {
			body.removeChild(wrap)
			body.querySelector('audio')?.play()
		})
		body.appendChild(wrap)
	}, handleError)
