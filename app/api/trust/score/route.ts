import { type NextRequest, NextResponse } from "next/server"
import { calculateTrustScore, getTrustBadge } from "@/lib/trustScore"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { verified, tradeVolume, onTimeRate, disputes, cancellations } = body

    if (typeof verified !== "boolean" || typeof tradeVolume !== "number" || typeof onTimeRate !== "number") {
      return NextResponse.json({ error: "Invalid trust score inputs" }, { status: 400 })
    }

    const inputs = {
      verified,
      tradeVolume: tradeVolume || 0,
      onTimeRate: Math.max(0, Math.min(1, onTimeRate)),
      disputes: disputes || 0,
      cancellations: cancellations || 0,
    }

    const score = calculateTrustScore(inputs)
    const badge = getTrustBadge(score, inputs)

    return NextResponse.json({ score, badge, inputs })
  } catch (error) {
    console.error("[v0] Trust score calculation error:", error)
    return NextResponse.json({ error: "Failed to calculate trust score" }, { status: 500 })
  }
}
