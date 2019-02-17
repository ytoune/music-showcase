import { BehaviorSubject } from 'rxjs'
import { scan, map, shareReplay } from 'rxjs/operators'

export const RESET = 'RESET'
export const ADD = 'ADD'
export const DONE = 'DONE'

/** @typedef {typeof RESET | typeof ADD | typeof DONE} Type */

/** @type {(start: Type) => BehaviorSubject<Type>} */
const create = start => new BehaviorSubject(start)

const loadings = create(RESET)

/** @type {(start: Type) => void} */
export const pushLoadStatus = label => loadings.next(label)

/** @typedef {[number, number]} Pair */

/** @typedef {{ done?: number, total?: number, progress?: number }} Progress */

/** @type {import("rxjs").Observable<Progress>} */
export const progress = loadings.pipe(
	scan(
		/** @type {(pair: Pair, type: Type) => Pair} */
		([done, total], type) => {
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
		},
		[0, 0],
	),
	map(([done, total]) => ({
		done: Math.max(0, done),
		total,
		progress: total ? Math.max(0, done) / total : 0,
	})),
	shareReplay(1),
)
