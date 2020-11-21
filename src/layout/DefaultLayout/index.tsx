import { Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container } from './styles'

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
