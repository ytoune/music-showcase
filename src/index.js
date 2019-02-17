import './fix'

import './index.html'
import style from './style'

import React from 'react'
import { render } from 'react-dom'

import { withStyles } from '@material-ui/core'

import { App } from './App'

const Main = withStyles(style)(App)

render(<Main />, document.getElementById('screen'))
