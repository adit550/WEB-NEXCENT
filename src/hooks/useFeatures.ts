import type { ReactNode } from 'react'
import type { FeatureItem } from '../types'
import { fetchFeatures } from '../api/features'
import { useAsyncData } from './useAsyncData'

/** Map from feature id → rendered ReactNode icon. Icons stay in the UI layer. */
export type FeatureIconMap = Record<number, ReactNode>

/**
 * Fetches feature data and merges in icon ReactNodes from the provided icon map.
 */
export function useFeatures(iconMap: FeatureIconMap) {
  const { data, loading, error } = useAsyncData(fetchFeatures)

  const features: FeatureItem[] = (data ?? []).map((item) => ({
    ...item,
    icon: iconMap[item.id] ?? null,
  }))

  return { features, loading, error }
}
