
import { BehaviorSubject } from 'rxjs'
import { scan, map } from 'rxjs/operators'

const loadings = new BehaviorSubject()

export const RESET = 'RESET'
export const ADD = 'ADD'
export const DONE = 'DONE'

export const pushLoadStatus = label => loadings.next(label)

export const progress = loadings.pipe(
	scan(([done, total], type) => {
		switch (type) {
			case RESET:
				return [done - total, 0]
			case ADD:
				return [done, total + 1]
			case DONE:
				return [done + 1, total]
			default:
				return [done, total]
		}
	}, [0, 0]),
	map(([done, total]) => ({
		done: Math.max(0, done),
		total,
		progress: total ? Math.max(0, done) / total : 0,
	})),
)
