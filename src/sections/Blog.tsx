import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'

interface BlogPost {
  id: number
  title: string
  category: string
  image: string
  imageAlt: string
}

const BLOG_POSTS: BlogPost[] = [
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

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-section__inner">
        <div className="blog-section__header">
          <h2 className="blog-section__title">Caring is the new marketing</h2>
          <p className="blog-section__subtitle">
            The ability to capture memories and moments is a beautiful gift.
            Read our stories.
          </p>
        </div>

        <ul className="blog-section__list">
          {BLOG_POSTS.map((post) => (
            <li key={post.id} className="blog-section__item">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="blog-section__img"
              />
              <div className="blog-section__body">
                <span className="blog-section__category">{post.category}</span>
                <h3 className="blog-section__post-title">{post.title}</h3>
                <a href="#" className="blog-section__read-more">
                  Read more →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
