import type { FooterLinkGroup } from '../types'

const LINK_GROUPS_DATA: FooterLinkGroup[] = [
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

/**
 * Returns footer link groups.
 * Replace with real fetch() when a backend is ready.
 */
export async function fetchFooterLinks(): Promise<FooterLinkGroup[]> {
  return Promise.resolve(LINK_GROUPS_DATA)
}

/**
 * Submits a newsletter subscription.
 * Replace with real POST request when a backend is ready.
 */
export async function subscribeNewsletter(email: string): Promise<void> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (!email || !email.includes('@')) {
    throw new Error('Please enter a valid email address.')
  }

  // TODO: replace with real API call
  // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
  console.info(`Newsletter subscription submitted for: ${email}`)
}
