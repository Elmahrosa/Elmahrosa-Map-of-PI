import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paymentId } = await request.json()

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID required" }, { status: 400 })
    }

    const piApiKey = process.env.PI_API_SECRET
    if (!piApiKey) {
      throw new Error("Pi API key not configured")
    }

    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
      method: "POST",
      headers: {
        Authorization: `Key ${piApiKey}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Payment approval failed")
    }

    const data = await response.json()

    console.log("[v0] Payment approved:", paymentId)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Payment approval error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Payment approval failed" },
      { status: 500 },
    )
  }
}
