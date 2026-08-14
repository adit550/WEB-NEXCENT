import { useBlog } from '../hooks/useBlog'

export default function Blog() {
  const { data: posts, loading, error } = useBlog()

  return (
    <section className="blog-section" id="faq" aria-labelledby="blog-title">
      <div className="blog-section__inner">
        <div className="blog-section__header">
          <h2 id="blog-title" className="blog-section__title">Caring is the new marketing</h2>
          <p className="blog-section__subtitle">
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their membership income and lot's more.
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
