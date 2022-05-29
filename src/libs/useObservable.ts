import { useEffect, useState } from 'react'
import type { Observable } from 'rxjs'

export const useObservable = <T>(observable: Observable<T>, init: T) => {
	const [current, set] = useState<T>(init)
	useEffect(() => {
		const $ = observable.subscribe(set)
		return () => {
			$.unsubscribe()
		}
	}, [])
	return current
}
