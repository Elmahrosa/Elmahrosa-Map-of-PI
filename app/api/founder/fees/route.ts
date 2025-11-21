import { type NextRequest, NextResponse } from "next/server"
import { FEE_CONFIG } from "@/lib/fees"

export async function GET() {
  return NextResponse.json(FEE_CONFIG)
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const updates = await request.json()

    // For now, return success with updated values
    console.log("[v0] Fee updates:", updates)

    return NextResponse.json({ success: true, fees: { ...FEE_CONFIG, ...updates } })
  } catch (error) {
    console.error("[v0] Fee update error:", error)
    return NextResponse.json({ error: "Fee update failed" }, { status: 500 })
  }
}
