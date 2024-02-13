import { Subject } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

const upload$ = new Subject<File>()

export const pushZip = (zip: File) => {
  upload$.next(zip)
}

export const upload = upload$.pipe(shareReplay(1))
