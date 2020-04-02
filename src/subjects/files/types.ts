import { IAudioMetadata } from 'music-metadata'

export type MusicMetas = IAudioMetadata & {
	url: string
	name: string
}

export type Preview = { start?: number | null; end?: number | null }

export type File = MusicMetas & { preview?: Preview }
