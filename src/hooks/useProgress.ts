import { useObservable } from '~/libs/useObservable'
import type { Progress } from '~/subjects/files/loadings'
import { progress } from '~/subjects'

export const useProgress = () => {
	return useObservable<Progress>(progress, {})
}
