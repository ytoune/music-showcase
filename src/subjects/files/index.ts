/* eslint-disable import/no-deprecated */

import { map, switchMap, shareReplay, startWith } from 'rxjs/operators'

import { upload } from '../upload'
import { zipToFiles } from './zip-to-files'

import { cache, save } from './cache'

import type { File } from './types'
export type { File } from './types'

const sortByName = (files: readonly File[]) =>
  files
    .slice()
    .sort((q, w) => q.name.localeCompare(w.name, [], { numeric: true }))

const LOAD_CACHE = 'LOAD_CACHE' as const

export const files = upload.pipe(
  switchMap(zipToFiles),
  map(sortByName),
  startWith(LOAD_CACHE),
  switchMap(v => (LOAD_CACHE === v ? cache : save(v))),
  shareReplay(1),
)
