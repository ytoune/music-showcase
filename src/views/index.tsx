import type { ReactNode } from 'react'

export { LoadFile } from './LoadFile'
export { Audio } from './Audio'
export { Files } from './Files'

type Props = Readonly<{ show: boolean; children: ReactNode }>
export const Hidable = ({ show, children }: Props) => (
	<>{show ? children : null}</>
)
