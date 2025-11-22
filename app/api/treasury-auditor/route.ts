import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { feesCollected = 0, escrows = 0, disputesResolved = 0, period = "weekly" } = body

    // Validate inputs
    const anomalies: string[] = []
    if (feesCollected < 0) anomalies.push("Negative fees collected")
    if (escrows < 0) anomalies.push("Negative escrow count")
    if (disputesResolved < 0) anomalies.push("Negative disputes resolved")

    // Calculate metrics
    const averageFeePerEscrow = escrows > 0 ? feesCollected / escrows : 0
    const disputeRate = escrows > 0 ? (disputesResolved / escrows) * 100 : 0

    const recommendations: string[] = []
    if (anomalies.length > 0) {
      recommendations.push("Validate input data sources")
    }
    if (disputeRate > 10) {
      recommendations.push("High dispute rate - review seller verification process")
    }
    if (averageFeePerEscrow < 0.5) {
      recommendations.push("Consider fee structure adjustment")
    }
    recommendations.push("Publish audit log to community dashboard")
    recommendations.push("Schedule next audit cycle")

    const report = {
      period,
      summary: `Treasury audit for ${period} period`,
      metrics: {
        feesCollected,
        escrows,
        disputesResolved,
        averageFeePerEscrow: averageFeePerEscrow.toFixed(2),
        disputeRate: disputeRate.toFixed(2) + "%",
      },
      anomalies,
      recommendations,
      auditedAt: new Date().toISOString(),
      status: anomalies.length === 0 ? "healthy" : "needs-attention",
    }

    return NextResponse.json(report)
  } catch (error) {
    console.error("[v0] Treasury auditor error:", error)
    return NextResponse.json({ error: "Failed to generate audit report" }, { status: 500 })
  }
}
