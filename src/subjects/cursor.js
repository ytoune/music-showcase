
import { BehaviorSubject } from 'rxjs'
import { scan } from 'rxjs/operators'

const _moves = new BehaviorSubject(0)

export const pushMove = move => _moves.next(move)

export const cursor = _moves.pipe(
	scan((prev, move) => prev + move, 0)
)
