import type { ReactNode } from 'react'
import type { StatItem } from '../types'
import type { StatData } from '../api/stats'
import { fetchStats } from '../api/stats'
import { useAsyncData } from './useAsyncData'

/** Map from API iconKey → rendered ReactNode. Defined here so icons stay in the UI layer. */
export type StatIconMap = Record<StatData['iconKey'], ReactNode>

/**
 * Fetches stat data and merges in the icon ReactNodes from the provided icon map.
 */
export function useStats(iconMap: StatIconMap) {
  const { data, loading, error } = useAsyncData(fetchStats)

  const stats: StatItem[] = (data ?? []).map((item) => ({
    id: item.id,
    value: item.value,
    label: item.label,
    icon: iconMap[item.iconKey],
  }))

  return { stats, loading, error }
}
