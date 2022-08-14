import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vitor Escalfoni</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="description"
          content="Vitor Escalfoni is a software engineer specialized in mobile app development with TypeScript and React Native who thrives on crafting great user experiences."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
