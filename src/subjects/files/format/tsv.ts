import { Preview } from '../types'
import { JSZipObject } from 'jszip'

import { pushLoadStatus, ADD, DONE } from '../loadings'
import { parseTSV } from './parseTSV'

export const format = async (entry: JSZipObject) => {
	pushLoadStatus(ADD)

	const preview: Record<string, Preview> = parseTSV(await entry.async('text'))
		.map(totime)
		.filter(hasdata)
		.reduce(fold, {})

	pushLoadStatus(DONE)

	return make(preview)
}

const make = (preview: Record<string, Preview>) => <T extends { name: string }>(
	files: T[],
) =>
	files.map(({ name, ...file }) => ({
		name,
		preview: preview[name] || {},
		...file,
	}))

type HasData = {
	filename: string
	start: number
	end: number
}

const hasdata = (v: Record<string, unknown>): v is HasData =>
	!!v.filename && Number.isFinite(v.start) && Number.isFinite(v.end)

const totime = ({
	filename,
	start: _s,
	end: _e,
}: Record<string, string | undefined>) => {
	const start = strtotime(_s)
	const end = strtotime(_e)
	return { filename, start, end }
}

const strtotime = (str?: string) => {
	if (!str) return
	const m = /^(\d+):(\d+)(\.\d+|)$/.exec(str)
	if (!m) return
	const [min, sec, flo] = m.slice(1).map(toNum)
	return 60 * min + sec + flo
}

const fold = (
	dict: Record<string, Preview>,
	{ filename, start, end }: HasData,
) => ({
	...dict,
	[filename]: { start, end },
})

const toNum = (n: unknown) => Number(n) || 0
