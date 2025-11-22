import { type NextRequest, NextResponse } from "next/server"
import { fundEscrow } from "@/lib/escrow"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: "Escrow ID required" }, { status: 400 })
    }

    const escrow = fundEscrow(id)

    if (!escrow) {
      return NextResponse.json({ error: "Cannot fund escrow" }, { status: 400 })
    }

    return NextResponse.json(escrow)
  } catch (error) {
    console.error("[v0] Escrow funding error:", error)
    return NextResponse.json({ error: "Failed to fund escrow" }, { status: 500 })
  }
}
