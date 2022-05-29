import { List, ListItem, ListItemText, Paper } from '@mui/material'
import { pushMove } from '~/subjects/cursor'
import { File } from '~/subjects/files/types'

export const Files: React.FC<{ files: File[] }> = ({ files }) => {
	if (!files.length) {
		return (
			<Paper sx={{ textAlign: 'center', padding: '80px 30px' }}>
				下のボタンから
				<br />
				mp3 を zip で<br />
				まとめてあげてください。
				<br />
				<a
					href="https://github.com/ytoune/music-showcase/blob/master/README.md"
					target="_blank"
					rel="noopener noreferrer"
				>
					使い方
				</a>
			</Paper>
		)
	}
	const items = files.map(({ name, common: { artists, title } }, idxDiff) => (
		<ListItem
			button
			key={name}
			onClick={() => pushMove(idxDiff)}
			selected={!idxDiff}
		>
			<ListItemText
				primary={title || name}
				secondary={artists && artists.join(', ')}
			/>
		</ListItem>
	))
	items.unshift(...items.splice(-1))
	return <List>{items}</List>
}
