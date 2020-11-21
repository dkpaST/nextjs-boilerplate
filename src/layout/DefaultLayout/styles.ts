import styled from '@emotion/styled'

import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    flex: 1;
  }
`
