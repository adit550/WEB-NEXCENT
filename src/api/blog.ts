import type { BlogPost } from '../types'

import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'

const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    category: 'Safeguarding',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    image: blog1,
    imageAlt: 'Person working on a laptop in a cozy indoor setting',
  },
  {
    id: 2,
    category: 'Responsibilities',
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    image: blog2,
    imageAlt: 'Hands on a laptop displaying spreadsheet data on a desk with coffee',
  },
  {
    id: 3,
    category: 'Membership',
    title: 'Revamping the Membership Model with Triathlon Australia',
    image: blog3,
    imageAlt: 'Top-down view of hands typing on a laptop with a notebook and plant nearby',
  },
]

/**
 * Returns blog posts.
 * Replace with real fetch() when a backend is ready.
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  return Promise.resolve(BLOG_DATA)
}
