import { lookup } from 'mime-types'
import type { JSZipObject } from 'jszip'
import type { MusicMetas, File } from '../types'

import { format as formatMusic } from './music'
import { format as formatTsv } from './tsv'

type Task = [number, ((list: MusicMetas[]) => File[]) | null]

type Format = (entry: JSZipObject) => Promise<Task>
export const format: Format = async entry => {
  if (entry.dir) return [0, null]

  try {
    const type = lookup(entry.name)

    if (type && 'audio/' === type.slice(0, 6)) {
      return [1, push(await formatMusic(entry))]
    }

    if ('text/tab-separated-values' === type) {
      return [9, await formatTsv(entry)]
    }

    return [0, null]
  } catch (x) {
    if (/(^|\/)\./.test(entry.name)) return [0, null]
    throw x
  }
}

type Push = <T>(item: T) => (list: T[]) => T[]
const push: Push = item => list => [...list, item]

type Reducer = (list: MusicMetas[], t: Task) => File[]
export const reducer: Reducer = (list, [_, f]) => {
  if ('function' === typeof f) return f(list)
  return list
}

export const withPriority = ([p]: Task, [q]: Task) => p - q
