import { createTheme } from '@mui/material/styles'

export { default as style } from './style'

export const themeLight = createTheme({
	palette: {
		primary: { main: '#000' },
	},
})
export const themeDark = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#fff' },
	},
})
