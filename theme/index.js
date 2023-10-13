import { extendTheme } from '@chakra-ui/react'
import data from '../blogSettings.json'

const theme = extendTheme({
  colors: {
    brand: {
      background: data.colors.backgroundColor,
      navbarColor: data.colors.navColor,
      accentColor: data.colors.accentColor,
    },
  },
})

export default theme
