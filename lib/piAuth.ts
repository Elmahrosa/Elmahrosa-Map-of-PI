// Pi SDK Authentication Module
// Requires: npm install @pinetwork-js/sdk

export type PiUser = {
  uid: string
  username: string
  accessToken: string
  roles?: string[]
  verified?: boolean
}

export async function authenticatePi(): Promise<PiUser | null> {
  try {
    if (typeof window === "undefined") return null

    // Check if Pi SDK is available in Pi Browser
    const Pi = (window as any).Pi

    if (!Pi) {
      console.warn("[v0] Pi SDK not available. Running in mock mode.")
      // Return mock user for development
      return {
        uid: "mock-user-123",
        username: "demo_user",
        accessToken: "mock-token",
        roles: ["buyer"],
        verified: false,
      }
    }

    // Real Pi authentication
    const scopes = ["username", "payments"]
    const authResult = await Pi.authenticate(scopes, onIncompletePaymentFound)

    return {
      uid: authResult.user.uid,
      username: authResult.user.username,
      accessToken: authResult.accessToken,
      roles: ["buyer"], // Set based on your backend logic
      verified: true,
    }
  } catch (error) {
    console.error("[v0] Pi authentication failed:", error)
    return null
  }
}

function onIncompletePaymentFound(payment: any) {
  console.log("[v0] Incomplete payment found:", payment)
  // Handle incomplete payment
  return payment.identifier
}

export async function createPayment(amount: number, memo: string, metadata?: any): Promise<string> {
  if (typeof window === "undefined") return `mock-payment-${Date.now()}`

  const Pi = (window as any).Pi
  if (!Pi) {
    console.warn("[v0] Pi SDK not available")
    return `mock-payment-${Date.now()}`
  }

  try {
    const paymentData = {
      amount,
      memo,
      metadata: metadata || {},
    }

    const payment = await Pi.createPayment(paymentData, {
      onReadyForServerApproval: (paymentId: string) => {
        console.log("[v0] Payment ready for approval:", paymentId)
      },
      onReadyForServerCompletion: (paymentId: string, txid: string) => {
        console.log("[v0] Payment completed:", paymentId, txid)
      },
      onCancel: (paymentId: string) => {
        console.log("[v0] Payment cancelled:", paymentId)
      },
      onError: (error: Error, payment: any) => {
        console.error("[v0] Payment error:", error)
      },
    })

    return payment.identifier
  } catch (error) {
    console.error("[v0] Create payment failed:", error)
    throw error
  }
}

export async function completePayment(paymentId: string, txid: string): Promise<boolean> {
  // This should be called from your backend after server-side verification
  console.log("[v0] Payment completion:", paymentId, txid)
  return true
}
