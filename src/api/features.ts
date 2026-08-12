import type { FeatureItem } from '../types'

const FEATURES_DATA: Omit<FeatureItem, 'icon'>[] = [
  {
    id: 1,
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
  },
  {
    id: 2,
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
  },
  {
    id: 3,
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments.',
  },
]

/**
 * Returns feature items (without icons — icons are injected at the UI layer
 * because ReactNode cannot be serialised over a network boundary).
 * Replace with real fetch() when a backend is ready.
 */
export async function fetchFeatures(): Promise<Omit<FeatureItem, 'icon'>[]> {
  return Promise.resolve(FEATURES_DATA)
}
