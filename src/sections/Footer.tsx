import { type FormEvent, type ReactNode } from 'react'
import logo2 from '../assets/Logo2.svg'

interface FooterLinkGroup {
  heading: string
  links: { label: string; href: string }[]
}

interface SocialLink {
  label: string
  href: string
  icon: ReactNode
}

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact us', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help center', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Legal', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
]

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white" />
      </svg>
    ),
  },
]

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Col 1: Brand */}
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="Nexcent home">
            <img
              src={logo2}
              alt="Nexcent"
              className="footer__logo-img"
            />
          </a>
          <p className="footer__tagline">
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>
          <ul className="footer__socials" aria-label="Social media links">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 & 3: Link groups */}
        {LINK_GROUPS.map((group) => (
          <div key={group.heading} className="footer__link-group">
            <h3 className="footer__link-heading">{group.heading}</h3>
            <ul className="footer__link-list">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col 4: Newsletter */}
        <div className="footer__newsletter">
          <h3 className="footer__link-heading">Stay up to date</h3>
          <form
            className="footer__newsletter-form"
            onSubmit={handleSubmit}
            aria-label="Newsletter signup"
          >
            <div className="footer__newsletter-row">
              <label htmlFor="newsletter-email" className="footer__newsletter-label">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                className="footer__newsletter-input"
                placeholder="Your email address"
                autoComplete="email"
              />
              <button
                type="submit"
                className="footer__newsletter-btn"
                aria-label="Subscribe to newsletter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polygon
                    points="22 2 15 22 11 13 2 9 22 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

      </div>
    </footer>
  )
}
