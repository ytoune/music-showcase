import type { ReactNode } from 'react'

export { LoadFile } from './load-file'
export { Audio } from './audio'
export { Files } from './files'

type Props = Readonly<{ show: boolean; children: ReactNode }>
export const Hidable = ({ show, children }: Props) => (
  <>{show ? children : null}</>
)
