import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import 'styles/globals.css'
import Analytics from 'components/Analytics'

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <DefaultSeo {...SEO} />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
