import { useCallback, useMemo, useRef } from 'react'

import { pushMove } from '~/subjects/cursor'

import { File } from '~/subjects/files/types'

import { LoadFile, Files, Audio, Hidable } from '~/views'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

import { Paper } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { withStyles } from '@material-ui/core/styles'
import { style, themeDark, themeLight } from '~/theme'
import { useFiles } from '~/hooks/useFiles'
import { useProgress } from '~/hooks/useProgress'
import { useIsSelected } from '~/hooks/useIsSelected'

const useTopFile = (files: File[]) => {
	const { blob, preview: { start = 0, end = 0 } = {} } = useMemo(
		() => files[0] || {},
		[files],
	)
	const ref = useRef({ url: '' })
	const url = useMemo(() => {
		if (ref.current.url) URL.revokeObjectURL(ref.current.url)
		return blob ? (ref.current.url = URL.createObjectURL(blob)) : ''
	}, [blob])
	return { url, start, end }
}

const goprev = () => pushMove(-1)
const gonext = () => pushMove(1)

const App = () => {
	const files = useFiles()
	const isSelected = useIsSelected()
	const { total = 0, progress = 0 } = useProgress()
	const { url, start, end } = useTopFile(files)

	const onEnded = useCallback(replay => (isSelected ? replay() : pushMove(1)), [
		isSelected,
	])

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
