import React from 'react'
import { AppProps } from 'next/app'

import '../assets/styles/reset.css'
import '../assets/fonts/OpenSans/open-sans.css'
import '../assets/fonts/Raleway/raleway.css'
import '../assets/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
