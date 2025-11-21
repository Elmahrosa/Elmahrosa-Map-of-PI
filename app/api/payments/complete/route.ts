import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paymentId, txid } = await request.json()

    if (!paymentId || !txid) {
      return NextResponse.json({ error: "Payment ID and transaction ID required" }, { status: 400 })
    }

    const piApiKey = process.env.PI_API_SECRET
    if (!piApiKey) {
      throw new Error("Pi API key not configured")
    }

    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: "POST",
      headers: {
        Authorization: `Key ${piApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ txid }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Payment completion failed")
    }

    const data = await response.json()

    console.log("[v0] Payment completed:", paymentId, txid)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Payment completion error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Payment completion failed" },
      { status: 500 },
    )
  }
}
