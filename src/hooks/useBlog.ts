import { fetchBlogPosts } from '../api/blog'
import { useAsyncData } from './useAsyncData'

/**
 * Fetches blog posts.
 */
export function useBlog() {
  return useAsyncData(fetchBlogPosts)
}
