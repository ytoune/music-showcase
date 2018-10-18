
import React, { Component, createRef } from 'react'

import { isSelected } from '../../subjects'

export class Audio extends Component {
	constructor(...p) {
		super(...p)
		this.onTimeUpdate = this.onTimeUpdate.bind(this)
		this._ref = createRef()
		this._$ = []
	}
	componentDidMount() {
		this._$.push(isSelected.subscribe(isSelected => isSelected && this.setStart()))
		document.body.addEventListener('keydown', this.onKeyDown)
	}
	componentWillUnmount() {
		let $
		while ($ = this._$.pop())
			$.unsubscribe()
		document.body.removeEventListener('keydown', this.onKeyDown)
	}
	setStart() {
		this._ref.current.currentTime = 0
	}
	onTimeUpdate({target, target: {currentTime}}) {
		const {props: {start, end}} = this
		switch (true) {
			case (end < start):
				return
			case (start && currentTime < start):
			case (end && end <= currentTime):
				target.currentTime = start
				return
			default:

		}
	}
	render() {
		const {
			props: {
				src,
				onEnded,
			},
			onTimeUpdate,
		} = this
		return (
			<audio
				src={src}
				ref={this._ref}
				controls autoPlay
				onEnded={onEnded}
				onTimeUpdate={onTimeUpdate}
			/>
		)
	}
}
