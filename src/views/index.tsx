import type { FC } from 'react'

export { LoadFile } from './LoadFile'
export { Audio } from './Audio'
export { Files } from './Files'

export const Hidable: FC<{ show: boolean }> = ({ show, children }) => (
	<>{show ? children : null}</>
)
