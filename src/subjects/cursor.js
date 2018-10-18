
import { BehaviorSubject, merge } from 'rxjs'
import { scan, map } from 'rxjs/operators'

const _moves = new BehaviorSubject(0)

export const pushMove = move => _moves.next(move)

export const cursor = _moves.pipe(
	scan((prev, move) => prev + move, 0)
)

export const select = () => pushMove(0)

export const isSelected = _moves.pipe(
	map(move => !move)
)

pushMove(1)
pushMove(-1)
