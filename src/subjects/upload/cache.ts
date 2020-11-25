/* eslint-disable @typescript-eslint/no-explicit-any */

const STORE_NAME = 'files'

type Mode = 'readonly' | 'readwrite' | 'versionchange'

class Store<T> {
	constructor(
		private readonly open: () => Promise<IDBDatabase>,
		private readonly key: string,
	) {}

	read(): Promise<T> {
		return transaction(
			this.open,
			'readonly',
			store =>
				new Promise<T>((done, error) => {
					const req = store.get(this.key)
					req.onerror = error
					req.onsuccess = () => {
						done(req.result)
					}
				}),
		)
	}
	write(val: T) {
		return transaction(
			this.open,
			'readwrite',
			store =>
				new Promise((done, error) => {
					const req = store.put(val, this.key)
					req.onerror = error
					req.onsuccess = () => {
						done(req.result)
					}
				}),
		)
	}
}

const openDB = (): Promise<IDBDatabase> =>
	new Promise<IDBDatabase>((done, error) => {
		try {
			const req = indexedDB.open('app', 1)
			req.onerror = error
			req.onupgradeneeded = ev => {
				const db: IDBDatabase = (ev as any).target.result
				db.createObjectStore(STORE_NAME, { keyPath: 'ssn' })
			}
			req.onsuccess = ev => {
				const db: IDBDatabase = (ev as any).target.result
				done(db)
			}
		} catch (x) {
			error(x)
		}
	})

const transaction = async <T>(
	open: () => Promise<IDBDatabase>,
	mode: Mode,
	fn: (store: IDBObjectStore) => Promise<T>,
): Promise<T> => {
	const db = await open()
	try {
		const store = db.transaction([STORE_NAME], mode).objectStore(STORE_NAME)
		return await fn(store)
	} finally {
		db.close()
	}
}

export const openStore = () => new Store<File>(openDB, 'filelist')
