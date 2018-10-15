
import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import { pushMove } from '../../subjects/cursor'

export const Files = ({files}) => {
	if (!files.length) {
		return (
			<div style={{textAlign: 'center', paddingTop: '30px'}}>
				mp3 を zip で<br/>まとめてあげてください。
			</div>
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
