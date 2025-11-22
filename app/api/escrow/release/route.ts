import { type NextRequest, NextResponse } from "next/server"
import { releaseFunds } from "@/lib/escrow"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id } = body

    if (!id) {
      return NextResponse.json({ error: "Escrow ID required" }, { status: 400 })
    }

    const escrow = releaseFunds(id)

    if (!escrow) {
      return NextResponse.json({ error: "Cannot release funds" }, { status: 400 })
    }

    return NextResponse.json(escrow)
  } catch (error) {
    console.error("[v0] Escrow release error:", error)
    return NextResponse.json({ error: "Failed to release funds" }, { status: 500 })
  }
}
