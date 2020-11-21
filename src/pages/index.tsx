import React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '../layout'

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>IndexPagepage</title>
      </Head>

      <DefaultLayout>
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      </DefaultLayout>
    </>
  )
}

export default IndexPage
