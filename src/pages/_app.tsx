import { useEffect } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props

		useEffect(() => {
			// Remove the server-side injected CSS.
			const jssStyles = document.querySelector('#jss-server-side')
			jssStyles?.parentElement?.removeChild(jssStyles)
		}, [])

		return (
			<>
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
			</>
		)
	}
}

export default App
