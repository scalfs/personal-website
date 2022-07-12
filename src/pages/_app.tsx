import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vitor Escalfoni</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Vitor Escalfoni is a software engineer specialized in mobile app development who thrives on crafting great user experiences."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
