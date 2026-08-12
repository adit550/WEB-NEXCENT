import type { ReactNode } from 'react'

interface StatItem {
  id: number
  icon: ReactNode
  value: string
  label: string
}

const STATS: StatItem[] = [
  {
    id: 1,
    value: '2,245,341',
    label: 'Members',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="4" stroke="#4CAF4F" strokeWidth="1.8" fill="none" />
        <path d="M2 21c0-4 3.134-7 7-7s7 3 7 7" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M22 21c0-3-2-5.5-5-6.5" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 2,
    value: '46,328',
    label: 'Clubs',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#4CAF4F" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <polyline points="9,22 9,12 15,12 15,22" stroke="#4CAF4F" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    value: '828,867',
    label: 'Event Bookings',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#4CAF4F" strokeWidth="1.8" fill="none" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="#4CAF4F" strokeWidth="1.8" />
        <circle cx="8" cy="15" r="1" fill="#4CAF4F" />
        <circle cx="12" cy="15" r="1" fill="#4CAF4F" />
        <circle cx="16" cy="15" r="1" fill="#4CAF4F" />
      </svg>
    ),
  },
  {
    id: 4,
    value: '1,926,436',
    label: 'Payments',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#4CAF4F" strokeWidth="1.8" fill="none" />
        <line x1="2" y1="10" x2="22" y2="10" stroke="#4CAF4F" strokeWidth="1.8" />
        <line x1="6" y1="15" x2="10" y2="15" stroke="#4CAF4F" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-section__inner">
        {/* Left: heading */}
        <div className="stats-section__content">
          <h2 className="stats-section__title">
            Helping a local{' '}
            <span className="stats-section__title-highlight">
              business reinvent itself
            </span>
          </h2>
          <p className="stats-section__description">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right: stat grid */}
        <ul className="stats-section__list" aria-label="Key statistics">
          {STATS.map((stat) => (
            <li key={stat.id} className="stats-section__item">
              {/* icon-wrap tidak perlu aria-hidden — SVG di dalamnya sudah aria-hidden="true" */}
              <div className="stats-section__icon-wrap">{stat.icon}</div>
              <div className="stats-section__text">
                <strong className="stats-section__value">{stat.value}</strong>
                <span className="stats-section__label">{stat.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
