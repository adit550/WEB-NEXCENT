import type { ReactNode } from 'react'

interface FeatureItem {
  id: number
  title: string
  description: string
  icon: ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="#4CAF4F" strokeWidth="2" fill="none" />
        <circle cx="16" cy="15" r="4" stroke="#4CAF4F" strokeWidth="2" fill="none" />
        <path d="M8 26c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="#4CAF4F" strokeWidth="2" fill="none" />
        <path d="M5 16h22M16 5c-3 4-3 18 0 22M16 5c3 4 3 18 0 22" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="10" cy="13" r="4" stroke="#4CAF4F" strokeWidth="2" fill="none" />
        <circle cx="22" cy="13" r="4" stroke="#4CAF4F" strokeWidth="2" fill="none" />
        <path d="M2 26c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M22 20c2.761 0 6 1.567 6 6" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features-section" id="service">
      <div className="features-section__inner">
        <div className="features-section__header">
          <h2 className="features-section__title">
            Manage your entire community in a single system
          </h2>
          <p className="features-section__subtitle">
            Who is Nexcent suitable for?
          </p>
        </div>

        <ul className="features-section__list">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="features-section__item">
              {/* Wrapper tidak perlu aria-hidden — SVG di dalamnya sudah aria-hidden="true" */}
              <div className="features-section__icon-wrap">
                {feature.icon}
              </div>
              <h3 className="features-section__item-title">{feature.title}</h3>
              <p className="features-section__item-desc">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
