import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { getAllPublished } from '@/lib/allPosts'
import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from './_app'
import theme from '../theme'
import HomePageView from './home'

const IndexPage = ({ posts }) => {
  const globals = useContext(BlogContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const [renderedBody, setRenderedBody] = useState()

  if (!posts) return <h1> No Posts! </h1>

  useEffect(() => {
    console.log(posts)
    console.log(globals)
    setIsLoaded(true)
  }, [posts])

  return (
    <>
      <title>{globals.blogName}</title>
      {isLoaded && (
        <Flex
          flexDir={'column'}
          backgroundColor={theme.colors.brand.background}
          color="white"
          height="100vh"
        >
          <HomePageView />
        </Flex>
      )}
    </>
  )
}

export default IndexPage

export const getStaticProps = async () => {
  const data = await getAllPublished()

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  }
}
