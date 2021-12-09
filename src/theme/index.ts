import { createTheme } from '@material-ui/core/styles'
import type { ThemeOptions } from '@material-ui/core/styles'

export { default as style } from './style'

const styles: ThemeOptions = {
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

export const themeLight = createTheme({})
export const themeDark = createTheme(styles)
