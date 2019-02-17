import React, { useState, useEffect, useCallback, useMemo } from 'react'

import {
	files as files_,
	cursor as cursor_,
	progress as progress_,
	isSelected as isSelected_,
} from './subjects'
import { pushMove } from './subjects/cursor'
import { select } from './subjects/cursor'

import { LoadFile, Files, Audio, Hidable } from './views'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

import { Paper } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Subscription } from 'rxjs'

/** @type {import("@material-ui/core/styles/createMuiTheme").ThemeOptions} */
const styles = {
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

/** @typedef {{
	files: typeof files_ extends import("rxjs").Observable<infer U>
		? U : never,
	cursor: number,
	progress: import("./subjects/files/loadings").Progress,
	isSelected: boolean,
}} State */
/** @type {React.FC<{}>} */
export const App = () => {
	/** @type {State} */
	const init = {
		files: [],
		cursor: 0,
		progress: {},
		isSelected: false,
	}
	const [files, setFiles] = useState(init.files)
	const [cursor, setCousor] = useState(init.cursor)
	const [progress, setProgress] = useState(init.progress)
	const [isSelected, setIsSelected] = useState(init.isSelected)
	useEffect(() => {
		const $ = new Subscription()
		$.add(files_.subscribe(setFiles))
		$.add(cursor_.subscribe(setCousor))
		$.add(progress_.subscribe(setProgress))
		$.add(isSelected_.subscribe(setIsSelected))
		document.body.addEventListener('keydown', onKeyDown)
		return () => {
			$.unsubscribe()
			document.body.removeEventListener('keydown', onKeyDown)
		}
	}, [])
	const onKeyDown = useCallback(
		/** @type {(event: KeyboardEvent) => void} */
		event => {
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
		},
		[],
	)
	const filesFormated = useMemo(
		() => {
			const { length } = files
			const i = length ? cursor % length : 0
			return [...files.slice(i), ...files.slice(0, i)]
		},
		[files, cursor],
	)
	const { total = 0, progress: progressNum = 0 } = useMemo(() => progress, [
		progress,
	])
	const { url = '', preview: { start = 0, end = 0 } = {} } = useMemo(
		() => filesFormated[0] || {},
		[filesFormated],
	)
	const onEnded = useCallback(
		replay => (isSelected ? replay() : pushMove(1)),
		[],
	)
	const goprev = useCallback(() => pushMove(-1), [])
	const gonext = useCallback(() => pushMove(1), [])
	return (
		<div>
			<MuiThemeProvider theme={isSelected && url ? themeDark : themeLight}>
				<Paper className="main">
					<header>
						<Hidable show={!!total && progressNum < 1}>
							<LinearProgress
								variant="determinate"
								value={Math.floor(100 * progressNum)}
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
						<Files files={filesFormated} />
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
