
import './index.html'
import './style.sass'

import React from 'react'
import { render } from 'react-dom'

// import CssBaseline from '@material-ui/core/CssBaseline'

import { App } from './App'

const main = (
	// <React.Fragment>
	// 	<CssBaseline />
		<App/>
	// </React.Fragment>
)
render(main, document.getElementById('screen'))
