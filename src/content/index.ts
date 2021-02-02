// @ts-ignore suppressing this warning since the files are found and dev/build is unaffected
import all from './*.md'
import { BlogPost } from '../types'

const transformPost = ({ filename, html, metadata }) => {
  const slug = filename.replace(/\.md$/, '')
  const date = new Date(metadata.date)

  return {
    ...metadata,
    html,
    slug,
    date,
  }
}

// sort by date descending
export const blogPosts: BlogPost[] = all.map(transformPost).sort((a, b) => b.date - a.date)

export const findPost = slug =>
  blogPosts.find(post => post.slug === slug)
