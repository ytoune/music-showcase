
import React, { Component } from 'react'

import { files, cursor, progress } from './subjects'
import { pushMove } from './subjects/cursor'

import { LoadFile, Files } from './views'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'

export class App extends Component {
	constructor(...p) {
		super(...p)
		this._$ = []
		this.state = {
			files: [],
			cursor: 0,
			progress: {}
		}
		this.onKeyDown = this.onKeyDown.bind(this)
	}
	componentDidMount() {
		this._$.push(files.subscribe(files => this.setState({files})))
		this._$.push(cursor.subscribe(cursor => this.setState({cursor})))
		this._$.push(progress.subscribe(progress => this.setState({progress})))
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
				progress: {total = 0, progress = 0},
			},
		} = this
		const files = this.getFiles()
		const {url} = files[0] || {}
		return (
			<div>
				<header>
					{total && progress < 1 ? <LinearProgress variant="determinate" value={Math.floor(100 * progress)}/> : null}
					{!url ? null : <audio src={url} controls autoPlay onEnded={() => pushMove(1)}/>}
				</header>
				<main>
					<Files files={files}/>
				</main>
				<footer>
					<Button onClick={() => pushMove(-1)} variant="outlined">up</Button>
					<Button onClick={() => pushMove(1)} variant="outlined">down</Button>
					<LoadFile/>
				</footer>
			</div>
		)
	}
}
