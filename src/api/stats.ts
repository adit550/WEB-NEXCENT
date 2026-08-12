/**
 * Raw stat data from the API — no ReactNode icons here.
 * Icons are resolved at the UI layer based on `iconKey`.
 */
export interface StatData {
  id: number
  value: string
  label: string
  iconKey: 'members' | 'clubs' | 'eventBookings' | 'payments'
}

const STATS_DATA: StatData[] = [
  { id: 1, value: '2,245,341', label: 'Members', iconKey: 'members' },
  { id: 2, value: '46,328', label: 'Clubs', iconKey: 'clubs' },
  { id: 3, value: '828,867', label: 'Event Bookings', iconKey: 'eventBookings' },
  { id: 4, value: '1,926,436', label: 'Payments', iconKey: 'payments' },
]

/**
 * Returns stats data.
 * Replace with real fetch() when a backend is ready.
 */
export async function fetchStats(): Promise<StatData[]> {
  return Promise.resolve(STATS_DATA)
}
