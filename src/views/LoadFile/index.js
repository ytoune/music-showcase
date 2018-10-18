
import React, { Component, createRef } from 'react'
import { pushZip } from '../../subjects/upload'
import Button from '@material-ui/core/Button'

export class LoadFile extends Component {
	constructor(...p) {
		super(...p)
		this.state = {isOpen: true}
		this.btnRef = createRef()
	}
	render() {
		const {
			state: {isOpen},
			btnRef,
		} = this
		const onClick = () => {
			btnRef.current.click()
		}
		const onChange = e => {
			[...e.target.files].map(pushZip)
			this.setState({isOpen: false})
		}
		return [
			<Button onClick={onClick} variant="outlined" key="load">
				upload zip file
			</Button>,
			<input
				type="file"
				ref={btnRef}
				style={{display: 'none'}}
				onChange={onChange}
				key="hiddenipt"
			/>,
		]
	}
}
