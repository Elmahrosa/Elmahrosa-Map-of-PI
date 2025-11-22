import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { chapter, changeLog, author = "EMAPOFPI Team" } = body

    if (!chapter || !changeLog) {
      return NextResponse.json({ error: "Chapter and changeLog required" }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const entry = `## ${chapter}

**Date:** ${timestamp}
**Author:** ${author}

### Changes
${changeLog}

### Impact
This update strengthens the civic-first foundation of EMAPOFPI, enhancing trust and transparency in the Pi Network marketplace ecosystem.

---
`

    return NextResponse.json({
      entry,
      chapter,
      timestamp,
      author,
    })
  } catch (error) {
    console.error("[v0] Mythic storyteller error:", error)
    return NextResponse.json({ error: "Failed to generate story entry" }, { status: 500 })
  }
}
