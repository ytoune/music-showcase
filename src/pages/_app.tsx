import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '~/theme/create-emotion-cache'
import { GlobalStyles } from '~/theme/global'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const App = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta charSet="utf-8" />
				<title>{process.env.SITE_NAME}</title>
				<meta
					name="viewport"
					content="minimum-scale=1,initial-scale=1,width=device-width"
				/>
				<meta
					name="description"
					content="音楽再生するやつ。即売会などでのプレビュー用のシンプルな音楽プレイヤー。"
				/>
			</Head>
			<GlobalStyles />
			<div id="screen">
				<Component {...pageProps} />
			</div>
		</CacheProvider>
	)
}

export default App
