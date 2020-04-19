import React from 'react'
import Head from 'next/head'
import App from '../containers/App/App'

const styles: { [key: string]: string } = {}

export default function Index() {
  return (
    <>
      <Head>
        <title>Daniel Ramos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <App></App>
      </div>
    </>
  )
}
