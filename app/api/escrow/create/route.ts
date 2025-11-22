import { type NextRequest, NextResponse } from "next/server"
import { createEscrow } from "@/lib/escrow"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sellerId, sellerName, buyerId, buyerName, amount, description } = body

    if (!sellerId || !buyerId || !amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid escrow data" }, { status: 400 })
    }

    const escrow = createEscrow({
      sellerId,
      sellerName,
      buyerId,
      buyerName,
      amount,
      description: description || "Trade transaction",
    })

    return NextResponse.json(escrow, { status: 201 })
  } catch (error) {
    console.error("[v0] Escrow creation error:", error)
    return NextResponse.json({ error: "Failed to create escrow" }, { status: 500 })
  }
}
