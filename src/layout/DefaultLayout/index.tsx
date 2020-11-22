import React from 'react'

import { Stack } from '@chakra-ui/react'

import { Container } from './styles'

import Footer from '~/layout/components/Footer'
import Header from '~/layout/components/Header'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container direction="column" as="section">
      <Header />
      <Stack as="main">{children}</Stack>
      <Footer />
    </Container>
  )
}

export default DefaultLayout
