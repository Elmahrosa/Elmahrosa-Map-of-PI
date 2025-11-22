import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { repoName, files = [] } = body

    if (!repoName) {
      return NextResponse.json({ error: "Repository name required" }, { status: 400 })
    }

    const findings: string[] = []
    const recommendations: string[] = []

    // Check required documentation
    if (!files.includes("README.md")) {
      findings.push("Missing README.md - Project documentation required")
      recommendations.push("Add comprehensive README.md with setup instructions")
    }

    if (!files.includes("SECURITY.md")) {
      findings.push("Missing SECURITY.md - Security policy required")
      recommendations.push("Add SECURITY.md with vulnerability reporting process")
    }

    if (!files.includes("CONTRIBUTING.md")) {
      findings.push("Missing CONTRIBUTING.md - Contribution guidelines required")
      recommendations.push("Add CONTRIBUTING.md with code standards and PR process")
    }

    if (!files.includes(".github/workflows/ci.yml")) {
      findings.push("Missing CI workflow - Automated testing required")
      recommendations.push("Add GitHub Actions CI workflow for lint/build/test")
    }

    if (!files.includes("LICENSE")) {
      findings.push("Missing LICENSE - License file recommended")
      recommendations.push("Add appropriate open source license")
    }

    // Check code quality files
    if (!files.includes(".eslintrc.json") && !files.includes("eslint.config.js")) {
      recommendations.push("Consider adding ESLint configuration")
    }

    const status =
      findings.length === 0 ? "compliant" : findings.length <= 2 ? "needs-minor-fixes" : "needs-major-fixes"

    return NextResponse.json({
      repo: repoName,
      status,
      findings,
      recommendations,
      checkedAt: new Date().toISOString(),
      filesChecked: files.length,
    })
  } catch (error) {
    console.error("[v0] Compliance bot error:", error)
    return NextResponse.json({ error: "Failed to run compliance check" }, { status: 500 })
  }
}
