import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = extendTheme({
  ...theme,
  colors: {
    background: '#ECF1F8',
    white: '#FFFFFF',
    text: '#212529',
    primary: '#F15A29',
    success: '#06d6a0',
    danger: '#f44336',
    warning: '#ffd166',
    info: '#118ab2',
    dark: '#121214',
    purple: '#92278F',
    violet: '#4B0C62',
    pink: '#EE2A7B',
    magenta: '#DA1C5C',
    orange: '#F15A29'
  }
})

export default customTheme
