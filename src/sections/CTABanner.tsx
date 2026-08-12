import Button from '../components/Button'

export default function CTABanner() {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-section__inner">
        <h2 className="cta-banner-section__title">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <Button label="Get a Demo →" variant="primary" />
      </div>
    </section>
  )
}
