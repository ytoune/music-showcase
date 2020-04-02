import React, { useState, useEffect, useCallback, useMemo } from 'react'

import {
	files as files_,
	cursor as cursor_,
	progress as progress_,
	isSelected as isSelected_,
} from '../subjects'
import { pushMove } from '../subjects/cursor'
import { select } from '../subjects/cursor'

import { File } from '../subjects/files/types'
import { Progress } from '../subjects/files/loadings'

import { LoadFile, Files, Audio, Hidable } from '../views'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

import { Paper } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Observable } from 'rxjs'

import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

import { withStyles } from '@material-ui/core/styles'
import style from '../theme/style'

const styles: ThemeOptions = {
	palette: {
		type: 'dark',
	},
	overrides: {
		MuiListItem: {
			root: {
				'&$selected': {
					color: '#ffffff',
					background: '#7986CB',
				},
			},
		},
		MuiPaper: {
			root: {
				'&.main': {
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				},
			},
		},
	},
}
const themeLight = createMuiTheme({})
const themeDark = createMuiTheme(styles)

const useObservable = <T extends unknown>(
	observable: Observable<T>,
	init: T,
) => {
	const [current, set] = useState<T>(init)
	useEffect(() => {
		const $ = observable.subscribe(set)
		return () => {
			$.unsubscribe()
		}
	}, [])
	return current
}

const useFiles = () => {
	const onKeyDown = useCallback((event: KeyboardEvent) => {
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
	}, [])
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

const useProgress = () => {
	return useObservable<Progress>(progress_, {})
}

const useIsSelected = () => {
	return useObservable(isSelected_, false)
}

const useTopFile = (files: File[]) => {
	const { url = '', preview: { start = 0, end = 0 } = {} } = useMemo(
		() => files[0] || {},
		[files],
	)
	return { url, start, end }
}

export const App: React.FC<{}> = () => {
	const files = useFiles()
	const isSelected = useIsSelected()
	const { total = 0, progress = 0 } = useProgress()
	const { url, start, end } = useTopFile(files)

	const onEnded = useCallback(replay => (isSelected ? replay() : pushMove(1)), [
		isSelected,
	])
	const goprev = useCallback(() => pushMove(-1), [])
	const gonext = useCallback(() => pushMove(1), [])
	return (
		<div>
			<MuiThemeProvider theme={isSelected && url ? themeDark : themeLight}>
				<Paper className="main">
					<header>
						<Hidable show={!!total && progress < 1}>
							<LinearProgress
								variant="determinate"
								value={Math.floor(100 * progress)}
							/>
						</Hidable>
						<Hidable show={!!url}>
							<Audio
								src={url}
								start={!isSelected && start}
								end={!isSelected && end}
								onEnded={onEnded}
							/>
						</Hidable>
					</header>
					<main>
						<Files files={files} />
					</main>
					<footer>
						<Button onClick={goprev} variant="outlined">
							up
						</Button>
						<Button onClick={gonext} variant="outlined">
							down
						</Button>
						<LoadFile />
					</footer>
				</Paper>
			</MuiThemeProvider>
		</div>
	)
}

export default withStyles(style)(App)
