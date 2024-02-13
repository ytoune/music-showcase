import { Observable, of } from 'rxjs'
import type { File } from './types'
import { Store, openDB } from '~/libs/store'

export const store = new Store<File[]>(openDB, 'files')

export const save = (v: File[]) => {
  store.write(v).catch(x => {
    console.error(x)
  })
  return of(v)
}

export const cache = new Observable<File[]>(observer => {
  let mounted = true
  if ('undefined' === typeof window) {
    observer.complete()
  } else {
    store
      .read()
      .catch(x => {
        console.error(x)
      })
      .then(list => {
        if (list && mounted) {
          observer.next(list)
          setTimeout(createWrap, 10)
        }
        observer.complete()
      })
  }
  return {
    unsubscribe() {
      mounted = false
    },
  }
})

const createWrap = () => {
  const { body } = document
  const wrap = document.createElement('div')
  wrap.style.position = 'fixed'
  wrap.style.top = '0'
  wrap.style.bottom = '0'
  wrap.style.right = '0'
  wrap.style.left = '0'
  wrap.style.zIndex = '99999999'
  wrap.addEventListener('click', () => {
    body.removeChild(wrap)
    body.querySelector('audio')?.play()
  })
  body.appendChild(wrap)
}
