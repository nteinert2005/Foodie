export const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name
    })

    return allTags
  }

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    category: post.properties.Category.multi_select,
    date: getToday(post.properties.Date.last_edited_time),
    url: post.properties.URL.rich_text[0].plain_text,
  }
}

export const getToday = (datestring) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let date = new Date()

  if (datestring) {
    date = new Date(datestring)
  }

  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  let today = `${month} ${day}, ${year}`

  return today
}
