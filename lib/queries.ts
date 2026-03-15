import { client } from './sanity'

// 월간지
export async function getMonthlyPosts() {
  return client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      excerpt,
      mainImage,
      slug
    }
  `)
}

// 공지사항
export async function getNotices() {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      author,
      publishedAt,
      isPinned,
      viewCount
    }
  `)
}

// 설교 categories
export async function getSermonCategories() {
  return client.fetch(`
    *[_type == "sermonCategory"] | order(order asc) {
      _id,
      title,
      slug
    }
  `)
}

// 설교 by category
export async function getSermonsByCategory(categoryId: string) {
  return client.fetch(`
    *[_type == "sermon" && category._ref == $categoryId] | order(publishedAt desc) {
      _id,
      title,
      publishedAt,
      youtubeUrl,
      description,
      category->{ title }
    }
  `, { categoryId })
}

// Latest sermon
export async function getLatestSermon() {
  return client.fetch(`
    *[_type == "sermon"] | order(publishedAt desc)[0] {
      _id,
      title,
      publishedAt,
      youtubeUrl,
      description,
      category->{ title }
    }
  `)
}