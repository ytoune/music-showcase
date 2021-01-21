import { List, ListItem, ListItemText, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import { pushMove } from '~/subjects/cursor'
import { File } from '~/subjects/files/types'

const Div = withStyles({
	root: {
		textAlign: 'center',
		padding: '80px 30px',
	},
})(Paper)

export const Files: React.FC<{ files: File[] }> = ({ files }) => {
	if (!files.length) {
		return (
			<Div>
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
			</Div>
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
