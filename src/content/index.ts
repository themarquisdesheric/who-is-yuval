import type { BlogPost } from '../types'
// @ts-ignore suppressing this warning since the files are found and dev/build is unaffected
import all from './*.md'

export const blogPosts: BlogPost[] = all.map(transformPost).sort((a, b) => b.date - a.date)

export const findPost = slug =>
  blogPosts.find(post => post.slug === slug)

export const findByTag = tag =>
  blogPosts.filter(post => post.tags.includes(tag))

function transformPost({ filename, html, metadata }) {
  const slug = filename.replace(/\.md$/, '')
  const date = new Date(metadata.date)
  let tags = []

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim())
  }

  return {
    ...metadata,
    html,
    slug,
    date,
    tags,
  }
}
