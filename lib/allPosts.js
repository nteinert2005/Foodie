import { getPageMetaData } from './utils'
import notion from './notion'

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  })

  const allPosts = posts.results

  return allPosts.map((post) => {
    return getPageMetaData(post)
  })
}
