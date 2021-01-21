import type { IAudioMetadata } from 'music-metadata'

export type MusicMetas = IAudioMetadata & {
	blob: Blob
	name: string
}

export type Preview = { start?: number | null; end?: number | null }

export type File = MusicMetas & { preview?: Preview }
