// Trust Score Calculation Module

export type TrustInputs = {
  verified: boolean
  tradeVolume: number // count of completed trades
  onTimeRate: number // 0–1 (percentage of on-time deliveries)
  disputes: number // count of disputes
  cancellations: number // count of cancellations
}

export type TrustBadge = "new" | "verified" | "trusted" | "pro"

export function calculateTrustScore(inputs: TrustInputs): number {
  let score = 50 // Base score

  // Add points for verification
  if (inputs.verified) score += 25

  // Add points for trade volume (up to +20)
  score += Math.min(20, Math.floor(inputs.tradeVolume / 20))

  // Add points for on-time rate (0–20)
  score += Math.floor(inputs.onTimeRate * 20)

  // Subtract points for disputes (-4 each, up to -20)
  score -= Math.min(20, inputs.disputes * 4)

  // Subtract points for cancellations (-3 each, up to -15)
  score -= Math.min(15, inputs.cancellations * 3)

  // Clamp between 0 and 100
  return Math.max(0, Math.min(100, score))
}

export function getTrustBadge(score: number, inputs: TrustInputs): TrustBadge {
  if (!inputs.verified) return "new"
  if (score >= 90 && inputs.tradeVolume >= 100) return "pro"
  if (score >= 75 && inputs.tradeVolume >= 20) return "trusted"
  if (inputs.verified) return "verified"
  return "new"
}

export function getTrustColor(badge: TrustBadge): string {
  switch (badge) {
    case "pro":
      return "text-primary"
    case "trusted":
      return "text-blue-600"
    case "verified":
      return "text-green-600"
    default:
      return "text-muted-foreground"
  }
}
