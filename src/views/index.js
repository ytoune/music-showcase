// eslint-disable-next-line no-unused-vars
import React from 'react'

export { LoadFile } from './LoadFile'
export { Audio } from './Audio'
export { Files } from './Files'

/** @type {React.FC<{ show: boolean }>} */
export const Hidable = ({ show, children }) => <>{show ? children : null}</>
