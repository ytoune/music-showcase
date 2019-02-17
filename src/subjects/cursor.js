import { BehaviorSubject } from 'rxjs'
import { scan, map, shareReplay } from 'rxjs/operators'

const moves = new BehaviorSubject(0)

/** @type {(move: number) => void} */
export const pushMove = move => moves.next(move)

export const cursor = moves.pipe(
	scan((prev, move) => prev + move, 0),
	shareReplay(1),
)

export const select = () => pushMove(0)

export const isSelected = moves.pipe(
	map(move => !move),
	shareReplay(1),
)

pushMove(1)
pushMove(-1)
