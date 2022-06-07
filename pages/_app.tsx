import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
