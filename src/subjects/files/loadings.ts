/* eslint-disable import/no-deprecated */

import type { Observable } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
import { scan, map, shareReplay } from 'rxjs/operators'

export const RESET = 'RESET'
export const ADD = 'ADD'
export const DONE = 'DONE'

type Type = 'RESET' | 'ADD' | 'DONE'

const loadings = new BehaviorSubject<Type>(RESET)

export const pushLoadStatus = (label: Type) => loadings.next(label)

type Pair = [number, number]

export type Progress = { done?: number; total?: number; progress?: number }

export const progress: Observable<Progress> = loadings.pipe(
  scan(
    ([done, total]: Pair, type: Type) => {
      switch (type) {
        case RESET:
          return [done - total, 0] as Pair
        case ADD:
          return [done, total + 1] as Pair
        case DONE:
          return [done + 1, total] as Pair
        default:
          return [done, total] as Pair
      }
    },
    [0, 0] as Pair,
  ),
  map(([done, total]: Pair) => ({
    done: Math.max(0, done),
    total,
    progress: total ? Math.max(0, done) / total : 0,
  })),
  shareReplay(1),
)
