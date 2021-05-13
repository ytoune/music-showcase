import { useRef, useCallback, useEffect } from 'react'

import { isSelected } from '~/subjects'

type OnEnded = (replay: () => void) => void
type PositionAsNumber = number | null | false
type AudioProps = {
	start: PositionAsNumber
	end: PositionAsNumber
	src: string
	onEnded: OnEnded
}

export const Audio = ({ start, end, src, onEnded }: AudioProps) => {
	const ref = useRef<HTMLAudioElement | null>(null)
	useEffect(() => {
		const setStart = () => {
			if (null == ref.current) return
			ref.current.currentTime = 0
		}
		const sub = isSelected.subscribe(isSelected => isSelected && setStart())
		const vol = Number(localStorage.getItem('my:volume'))
		if (ref.current && vol) ref.current.volume = vol
		return () => sub.unsubscribe()
	}, [])
	const onTimeUpdate = useCallback(
		({ target, target: { currentTime } }) => {
			const init = 'number' === typeof start ? start : 0
			switch (true) {
				case 'number' !== typeof currentTime:
				case 'number' === typeof end && end < init:
					return
				case currentTime < init:
				case end && end <= currentTime:
					target.currentTime = init
					return
				default:
			}
		},
		[start, end],
	)
	const onEndedWrap = useCallback(
		() =>
			onEnded(() => {
				if (null == ref.current) return
				ref.current.play()
			}),
		[onEnded],
	)
	return (
		<audio
			src={src}
			ref={ref}
			controls
			autoPlay
			onEnded={onEndedWrap}
			onTimeUpdate={onTimeUpdate}
		/>
	)
}
