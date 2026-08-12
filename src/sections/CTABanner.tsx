import Button from '../components/Button'

export default function CTABanner() {
  return (
    <section className="cta-banner-section" id="pricing" aria-labelledby="cta-title">
      <div className="cta-banner-section__inner">
        <h2 id="cta-title" className="cta-banner-section__title">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <Button label="Get a Demo →" variant="primary" />
      </div>
    </section>
  )
}
