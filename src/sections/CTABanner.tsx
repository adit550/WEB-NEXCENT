export default function CTABanner() {
  return (
    <section className="cta-banner-section" id="pricing" aria-labelledby="cta-title">
      <div className="cta-banner-section__inner">
        <h2 id="cta-title" className="cta-banner-section__title">
          Pellentesque suscipit<br />fringilla libero eu.
        </h2>
        <button type="button" className="btn btn--primary cta-banner-section__btn">
          Get a Demo
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="cta-banner-section__arrow"
          >
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
