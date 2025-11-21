import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    const founderEmail = process.env.FOUNDER_EMAIL
    const founderPassword = process.env.FOUNDER_PASSWORD

    if (email === founderEmail && password === founderPassword) {
      const sessionToken = Buffer.from(`${email}:${Date.now()}`).toString("base64")

      return NextResponse.json({
        success: true,
        token: sessionToken,
        user: { email, role: "founder" },
      })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Founder login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
