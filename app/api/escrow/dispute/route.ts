import { type NextRequest, NextResponse } from "next/server"
import { openDispute } from "@/lib/escrow"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: "Escrow ID required" }, { status: 400 })
    }

    const escrow = openDispute(id)

    if (!escrow) {
      return NextResponse.json({ error: "Cannot open dispute" }, { status: 400 })
    }

    return NextResponse.json(escrow)
  } catch (error) {
    console.error("[v0] Dispute creation error:", error)
    return NextResponse.json({ error: "Failed to open dispute" }, { status: 500 })
  }
}
