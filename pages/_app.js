import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import React, { useEffect, useState } from 'react'

import data from '../blogSettings.json'

export const BlogContext = React.createContext()

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? (
    <BlogContext.Provider value={data}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </BlogContext.Provider>
  ) : (
    ''
  )
}

export default MyApp
