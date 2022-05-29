import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '~/theme/create-emotion-cache'

export default class MyDocument extends Document {
	render() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { emotionStyleTags } = this.props as any
		return (
			<Html lang="ja">
				<Head>{emotionStyleTags}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async ctx => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: App => props =>
				// @ts-expect-error: ignore
				sheets.collect(<App emotionCache={cache} {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map(style => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// // eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	))

	return {
		...initialProps,
		styles: (
			<>
				{initialProps.styles}
				{sheets.getStyleElement()}
			</>
		) as unknown as React.ReactFragment,
		emotionStyleTags,
	}
}
