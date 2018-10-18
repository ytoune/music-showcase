
import React from 'react'

import {
	List,
	ListItem,
	ListItemText,
	Avatar,
	Paper,
} from '@material-ui/core'

import { withStyles } from '@material-ui/core'

import { pushMove } from '../../subjects/cursor'

const Div = withStyles({
	root: {
		textAlign: 'center',
		padding: '80px 30px',
	},
})(Paper)

export const Files = ({files}) => {
	if (!files.length) {
		return (
			<Div>
				下のボタンから<br/>
				mp3 を zip で<br/>
				まとめてあげてください。
			</Div>
		)
	}
	const items = files.map(({common: {artists, title}}, idxDiff) => (
		<ListItem button key={title} onClick={() => pushMove(idxDiff)} selected={!idxDiff}>
			<ListItemText primary={title} secondary={artists} />
		</ListItem>
	))
	items.unshift(...items.splice(-1))
	return (
		<List>
			{items}
		</List>
	)
}
