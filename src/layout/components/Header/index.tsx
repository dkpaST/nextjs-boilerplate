import React from 'react'

import { Flex, Heading } from '@chakra-ui/react'

import DarkModeSwitch from '../../../components/DarkModeSwitch'
import RocketseatLogo from '../../../assets/rocketseat.svg'

const Header: React.FC = () => {
  return (
    <Flex justifyContent="space-between" as="header" p="3">
      <Heading size="lg">
        <RocketseatLogo />
      </Heading>
      <DarkModeSwitch />
    </Flex>
  )
}

export default Header
