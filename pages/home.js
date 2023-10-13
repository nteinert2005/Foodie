import Navbar from '@/components/Navbar'
import FeaturedPosts from '@/components/FeaturedPosts'

import { useContext } from 'react'
import { BlogContext } from './_app'

const HomePageView = () => {
  const globals = useContext(BlogContext)

  const homeSectionList = globals.homePageLayout.map((section, index) => {
    switch (section.component) {
      case 'Navbar':
        return <Navbar />
      case 'FeaturedPosts':
        return <FeaturedPosts />
      default:
        return <h1> Not implemented - {section.component} </h1>
    }
  })

  return homeSectionList
}

export default HomePageView
