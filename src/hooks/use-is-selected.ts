import { useObservable } from '~/libs/use-observable'
import { isSelected } from '~/subjects'

export const useIsSelected = () => useObservable(isSelected, false)
