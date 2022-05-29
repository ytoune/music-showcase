import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '~/theme/create-emotion-cache'
import { useEffect } from 'react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const App = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	useEffect(() => {
		// Remove the server-side injected CSS.
		const styles = document.querySelector('#jss-server-side')
		styles?.parentElement?.removeChild(styles)
	}, [])

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
			<div id="screen">
				<Component {...pageProps} />
			</div>
		</CacheProvider>
	)
}

export default App
