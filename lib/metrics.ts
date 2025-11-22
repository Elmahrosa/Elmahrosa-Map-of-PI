// Platform Metrics Module

export type PlatformMetrics = {
  totalTransactions: number
  totalVolume: number
  activeCountries: number
  averageDisputeTime: number // hours
  escrowReleaseRate: number // percentage
  activeSellers: number
  verifiedSellers: number
}

// Mock metrics for development
export function getPlatformMetrics(): PlatformMetrics {
  return {
    totalTransactions: 1247,
    totalVolume: 45823,
    activeCountries: 12,
    averageDisputeTime: 18,
    escrowReleaseRate: 96.5,
    activeSellers: 342,
    verifiedSellers: 289,
  }
}
