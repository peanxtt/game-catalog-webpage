import type { AppProps } from 'next/app'

import Navbar from '@/src/components/Navbar'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar
        placeholder="Search"
        input="text"
      />
      <Component {...pageProps} />
    </>
  )
}
