import icon3 from '../assets/Icon 3.png'
import icon from '../assets/Icon.png'
import { useStats } from '../hooks/useStats'
import type { StatIconMap } from '../hooks/useStats'

const ICON_MAP: StatIconMap = {
  members: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path d="M2 21c0-4 3.134-7 7-7s7 3 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M22 21c0-3-2-5.5-5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  clubs: (
    <img src={icon3} width="24" height="24" alt="" aria-hidden="true" />
  ),
  eventBookings: (
    <img src={icon} width="24" height="24" alt="" aria-hidden="true" />
  ),
  payments: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.8" />
      <line x1="6" y1="15" x2="10" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
}

export default function Stats() {
  const { stats, loading, error } = useStats(ICON_MAP)

  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <div className="stats-section__inner">
        <div className="stats-section__content">
          <h2 id="stats-title" className="stats-section__title">
            Helping a local{' '}
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
