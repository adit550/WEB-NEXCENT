import icon5 from '../assets/Icon (5).svg'
import icon6 from '../assets/Icon (6).svg'
import icon7 from '../assets/Icon (7).svg'
import icon8 from '../assets/Icon (8).svg'
import { useStats } from '../hooks/useStats'
import type { StatIconMap } from '../hooks/useStats'

const ICON_MAP: StatIconMap = {
  members: (
    <img src={icon5} alt="" aria-hidden="true" width="48" height="48" />
  ),
  clubs: (
    <img src={icon7} alt="" aria-hidden="true" width="48" height="48" />
  ),
  eventBookings: (
    <img src={icon6} alt="" aria-hidden="true" width="48" height="48" />
  ),
  payments: (
    <img src={icon8} alt="" aria-hidden="true" width="48" height="48" />
  ),
}

export default function Stats() {
  const { stats, loading, error } = useStats(ICON_MAP)

  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <div className="stats-section__inner">
        <div className="stats-section__content">
          <h2 id="stats-title" className="stats-section__title">
            Helping a local
            <br />
            <span className="stats-section__title-highlight">
              business reinvent itself
            </span>
          </h2>
          <p className="stats-section__description">
            We reached here with our hard work and dedication
          </p>
        </div>

        {error && <p className="stats-section__error" role="alert">{error}</p>}

        {!loading && !error && (
          <ul className="stats-section__list" aria-label="Key statistics">
            {stats.map((stat) => (
              <li key={stat.id} className="stats-section__item">
                <div className="stats-section__icon-wrap">{stat.icon}</div>
                <div className="stats-section__text">
                  <strong className="stats-section__value">{stat.value}</strong>
                  <span className="stats-section__label">{stat.label}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
