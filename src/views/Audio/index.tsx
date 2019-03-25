import React, { useRef, useCallback, useEffect } from 'react'

import { isSelected } from '../../subjects'

type OnEnded = (replay: () => void) => void
type PositionAsNumber = number | null | false
type Audio = React.FC<{
	start: PositionAsNumber
	end: PositionAsNumber
	src: string
	onEnded: OnEnded
}>

export const Audio: Audio = ({ start, end, src, onEnded }) => {
	const ref = useRef<HTMLAudioElement | null>(null)
	useEffect(() => {
		const setStart = () => {
			if (null == ref.current) return
			ref.current.currentTime = 0
		}
		const sub = isSelected.subscribe(isSelected => isSelected && setStart())
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
