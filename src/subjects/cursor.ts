import { BehaviorSubject } from 'rxjs'
import { scan, map, shareReplay } from 'rxjs/operators'

const moves = new BehaviorSubject(0)

export const pushMove = (move: number) => moves.next(move)

const initC =
	Number('u' > typeof localStorage && localStorage.getItem('my:cursor')) || 0

export const cursor = moves.pipe(
	scan((prev, move) => prev + move, initC),
	shareReplay(1),
)

export const select = () => pushMove(0)

export const isSelected = moves.pipe(
	map(move => !move),
	shareReplay(1),
)

pushMove(1)
pushMove(-1)
