
import React, { Component } from 'react'

import { files, cursor, progress, isSelected } from './subjects'
import { pushMove } from './subjects/cursor'
import { select } from './subjects/cursor'

import { LoadFile, Files, Audio, Hidable } from './views'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

import { Paper } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

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
			}
		}
	},
}
const themeLight = createMuiTheme({})
const themeDark = createMuiTheme(styles)

export class App extends Component {
	constructor(...p) {
		super(...p)
		this._$ = []
		this.state = {
			files: [],
			cursor: 0,
			progress: {},
			isSelected: false,
		}
		this.onKeyDown = this.onKeyDown.bind(this)
	}
	componentDidMount() {
		this._$.push(files.subscribe(files => this.setState({files})))
		this._$.push(cursor.subscribe(cursor => this.setState({cursor})))
		this._$.push(progress.subscribe(progress => this.setState({progress})))
		this._$.push(isSelected.subscribe(isSelected => this.setState({isSelected})))
		document.body.addEventListener('keydown', this.onKeyDown)
	}
	componentWillUnmount() {
		let $
		while ($ = this._$.pop())
			$.unsubscribe()
		document.body.removeEventListener('keydown', this.onKeyDown)
	}
	onKeyDown({key}) {
		switch (key) {
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
	getFiles() {
		const {
			state: {
				files,
				cursor,
			},
		} = this
		const {length} = files
		const i = length ? cursor % length : 0
		return [...files.slice(i), ...files.slice(0, i)]
	}
	getTitles() {
		return this.getFiles()
			.map(({common: {artists}}))
	}
	render() {
		const {
			state: {
				isSelected,
				progress: {total = 0, progress = 0},
			},
		} = this
		const files = this.getFiles()
		const {url, preview: {start, end} = {}} = files[0] || {}
		return (
			<div>
				<MuiThemeProvider theme={isSelected && url ? themeDark : themeLight}>
					<Paper className="main">
						<header>
							<Hidable show={total && progress < 1}>
								<LinearProgress variant="determinate"
									value={Math.floor(100 * progress)}
								/>
							</Hidable>
							<Hidable show={url}>
								<Audio src={url}
									start={!isSelected && start} end={!isSelected && end}
									onEnded={() => pushMove(1)}/>
							</Hidable>
						</header>
						<main>
							<Files files={files}/>
						</main>
						<footer>
							<Button onClick={() => pushMove(-1)} variant="outlined">up</Button>
							<Button onClick={() => pushMove(1)} variant="outlined">down</Button>
							<LoadFile/>
						</footer>
					</Paper>
				</MuiThemeProvider>
			</div>
		)
	}
}
