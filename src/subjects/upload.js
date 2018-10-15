
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'

const _upload = new Subject()

export const pushZip = zip => _upload.next(zip)

export const upload = _upload.pipe(
	map(_ => _),
)
