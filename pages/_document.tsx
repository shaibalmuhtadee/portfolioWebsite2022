import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
        <link rel="icon" type="image/png" href="/favicon/favicon.png"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <script src='https://cdn-tailwindcss.vercel.app/'></script>
      </Head>
      <body className='bg-light_primary dark:bg-dark_primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}