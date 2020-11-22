import React from 'react'
import Head from 'next/head'

import { Center, Heading, Text } from '@chakra-ui/react'

import { DefaultLayout } from '../layout'

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>IndexPagepage</title>
      </Head>

      <DefaultLayout>
        <Center flexDirection="column" alignSelf="center">
          <Heading color="primary" as="h1">
            ReactJS Structure
          </Heading>
          <Text color="violet">
            A ReactJS + Next.js + Chakra UI structure made by DKPA.
          </Text>
        </Center>
      </DefaultLayout>
    </>
  )
}

export default IndexPage
