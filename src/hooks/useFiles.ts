import { useEffect, useMemo } from 'react'
import { useObservable } from '~/libs/useObservable'

import { files as files_, cursor as cursor_ } from '~/subjects'
import { pushMove } from '~/subjects/cursor'
import { select } from '~/subjects/cursor'

const onKeyDown = (event: KeyboardEvent) => {
	switch (event.key) {
		case 'ArrowUp':
			pushMove(-1)
			break
		case 'ArrowDown':
			pushMove(1)
			break
		case 'ArrowRight':
		case 'ArrowLeft':
		case ' ':
		case 'Enter':
			select()
			break
		case 'Escape':
			pushMove(0)
			break
	}
}

export const useFiles = () => {
	const files = useObservable(files_, [])
	const cursor = useObservable(cursor_, 0)
	useEffect(() => {
		document.body.addEventListener('keydown', onKeyDown)
		return () => {
			document.body.removeEventListener('keydown', onKeyDown)
		}
	}, [])
	const filesFormated = useMemo(() => {
		const { length } = files
		const i = length ? cursor % length : 0
		return [...files.slice(i), ...files.slice(0, i)]
	}, [files, cursor])
	return filesFormated
}