// import { convert } from 'encoding-japanese'
import type { JSZipObject } from 'jszip'
// eslint-disable-next-line import/named
import { loadAsync } from 'jszip'

import { format, reducer, withPriority } from './format'

import { pushLoadStatus, RESET, ADD, DONE } from './loadings'

export { progress } from './loadings'

export const zipToFiles = async (zip: File) => {
  pushLoadStatus(RESET)
  pushLoadStatus(ADD)

  const { convert } = await import('encoding-japanese')

  const zipped = await loadAsync(zip, {
    decodeFileName: (bytes: string[] | Uint8Array | Buffer) =>
      Array.isArray(bytes)
        ? ((): never => {
            throw new Error('エラー')
          })()
        : convert(bytes, { to: 'UNICODE', from: 'AUTO', type: 'string' }),
  })

  pushLoadStatus(DONE)

  const list: JSZipObject[] = []
  // eslint-disable-next-line github/array-foreach
  zipped.forEach((_path, entry) => list.push(entry))

  return (await Promise.all(list.map(format)))
    .sort(withPriority)
    .reduce(reducer, [])
}
