import { useObservable } from '~/libs/use-observable'
import type { Progress } from '~/subjects/files/loadings'
import { progress } from '~/subjects'

export const useProgress = () => useObservable<Progress>(progress, {})
