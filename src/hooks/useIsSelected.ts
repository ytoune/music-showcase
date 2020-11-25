import { useObservable } from '~/libs/useObservable'
import { isSelected } from '~/subjects'

export const useIsSelected = () => {
	return useObservable(isSelected, false)
}
