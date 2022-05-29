import { createTheme } from '@mui/material/styles'

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
