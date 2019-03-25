import React from 'react'

export { LoadFile } from './LoadFile'
export { Audio } from './Audio'
export { Files } from './Files'

export const Hidable: React.FC<{ show: boolean }> = ({ show, children }) => (
	<>{show ? children : null}</>
)
