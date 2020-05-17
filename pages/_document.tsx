import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { RenderPageResult } from 'next/dist/next-server/lib/utils'

// type GetInitialPropsReturnValue = Promise<{
//   styles: JSX.Element
//   html: string
//   head?: JSX.Element[]
// }>

type CtxRenderPageResult = RenderPageResult | Promise<RenderPageResult>

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): CtxRenderPageResult =>
        originalRenderPage({
          enhanceApp: App => (props): JSX.Element =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
