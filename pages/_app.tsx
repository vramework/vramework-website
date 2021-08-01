import '../doc.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'

// log the pageview with their URL
export const pageview = (page_path: string) => {
  // @ts-ignore
  window.gtag('config', 'G-F5KH8TMCM4', { page_path })
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', pageview)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  
  return <>
    <Head>
      <title>Vramework.io</title>
      <meta name="description" content="A serverless app" />
    </Head>
    <Component {...pageProps} />
  </>
}
export default MyApp
