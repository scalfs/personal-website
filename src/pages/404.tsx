import Head from 'next/head'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      <Head>
        <title>Oops! Page not found</title>
      </Head>

      <main className="my-0 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <h1 className="mx-0 mt-8 mb-4 text-7xl font-bold">404</h1>
        <p className="mb-2 text-xl">Oops! This page is lost in space.</p>

        <Link href="/">
          <a className="link-underline text-blue-700">Return home</a>
        </Link>
      </main>
    </>
  )
}
