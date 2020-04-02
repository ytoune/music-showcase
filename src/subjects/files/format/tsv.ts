import { Preview } from '../types'
import { JSZipObject } from 'jszip'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { TSV } from 'tsv'

import { pushLoadStatus, ADD, DONE } from '../loadings'

export const format = async (entry: JSZipObject) => {
	pushLoadStatus(ADD)

	const preview: Record<string, Preview> = TSV.parse(
		'filename\tstart\tend\n' + (await entry.async('text')),
	)
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

const hasdata = (({ filename, start, end }) =>
	!!(
		filename &&
		'number' === typeof start &&
		start === start &&
		'number' === typeof end &&
		end === end
	)) as (
	row: unknown,
) => row is {
	filename: string
	start: number
	end: number
}
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
	{ filename, start, end }: { filename: string; start: number; end: number },
) => ({
	...dict,
	[filename]: { start, end },
})

const toNum = (n: unknown) => Number(n) || 0
