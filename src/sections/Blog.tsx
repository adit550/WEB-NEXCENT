import { useBlog } from '../hooks/useBlog'

export default function Blog() {
  const { data: posts, loading, error } = useBlog()

  return (
    <section className="blog-section" id="faq" aria-labelledby="blog-title">
      <div className="blog-section__inner">
        <div className="blog-section__header">
          <h2 id="blog-title" className="blog-section__title">Caring is the new marketing</h2>
          <p className="blog-section__subtitle">
            The ability to capture memories and moments is a beautiful gift.
            Read our stories.
          </p>
        </div>

        {error && <p className="blog-section__error" role="alert">{error}</p>}

        {!loading && !error && posts && (
          <ul className="blog-section__list">
            {posts.map((post) => (
              <li key={post.id} className="blog-section__item">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="blog-section__img"
                  loading="lazy"
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
        )}
      </div>
    </section>
  )
}
