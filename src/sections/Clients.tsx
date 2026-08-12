import clientLogos from '../assets/clients-logos.svg'

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-section__header">
        <h2 className="clients-section__title">Our Clients</h2>
        <p className="clients-section__subtitle">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="clients-section__logos">
        <img
          src={clientLogos}
          alt="Our clients: logos of partner companies including The Larson Group, Binford Ltd, Abstergo Ltd, Biffco Enterprises, Acme Co, Globex Corporation, and Umbrella Corporation"
          className="clients-section__logos-img"
        />
      </div>
    </section>
  )
}
