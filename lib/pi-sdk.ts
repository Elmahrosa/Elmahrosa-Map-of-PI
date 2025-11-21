/**
 * Pi Network SDK Integration
 * Handles authentication, payments, and user verification
 */

// Pi SDK types
export interface PiUser {
  uid: string
  username: string
  accessToken: string
}

export interface PiPayment {
  identifier: string
  user_uid: string
  amount: number
  memo: string
  metadata: Record<string, unknown>
  from_address: string
  to_address: string
  direction: "user_to_app" | "app_to_user"
  created_at: string
  network: string
  status: {
    developer_approved: boolean
    transaction_verified: boolean
    developer_completed: boolean
    cancelled: boolean
    user_cancelled: boolean
  }
}

export interface PiPaymentDTO {
  amount: number
  memo: string
  metadata: Record<string, unknown>
}

/**
 * Initialize Pi SDK
 * Call this in your app initialization
 */
export function initializePiSDK() {
  if (typeof window === "undefined") return

  const script = document.getElementById("pi-sdk-script")
  if (!script) {
    console.error("[v0] Pi SDK script not found. Add script tag to layout.tsx")
  }
}

/**
 * Authenticate user with Pi Network
 */
export async function authenticateUser(): Promise<PiUser | null> {
  try {
    if (typeof window === "undefined" || !window.Pi) {
      throw new Error("Pi SDK not loaded")
    }

    const scopes = ["username", "payments"]
    const auth = await window.Pi.authenticate(scopes, onIncompletePaymentFound)

    console.log("[v0] Pi authentication successful:", auth.user.username)
    return auth.user
  } catch (error) {
    console.error("[v0] Pi authentication error:", error)
    return null
  }
}

/**
 * Create a Pi payment
 */
export async function createPayment(paymentData: PiPaymentDTO): Promise<PiPayment | null> {
  try {
    if (typeof window === "undefined" || !window.Pi) {
      throw new Error("Pi SDK not loaded")
    }

    const payment = await window.Pi.createPayment(paymentData, {
      onReadyForServerApproval: (paymentId: string) => {
        console.log("[v0] Payment ready for approval:", paymentId)
        // Call your backend to approve the payment
        approvePaymentOnBackend(paymentId)
      },
      onReadyForServerCompletion: (paymentId: string, txid: string) => {
        console.log("[v0] Payment ready for completion:", paymentId, txid)
        // Call your backend to complete the payment
        completePaymentOnBackend(paymentId, txid)
      },
      onCancel: (paymentId: string) => {
        console.log("[v0] Payment cancelled:", paymentId)
      },
      onError: (error: Error, payment?: PiPayment) => {
        console.error("[v0] Payment error:", error, payment)
      },
    })

    return payment
  } catch (error) {
    console.error("[v0] Create payment error:", error)
    return null
  }
}

/**
 * Handle incomplete payments on app load
 */
function onIncompletePaymentFound(payment: PiPayment) {
  console.log("[v0] Incomplete payment found:", payment.identifier)
  // Handle incomplete payment (e.g., show UI to complete or cancel)
  return handleIncompletePayment(payment)
}

/**
 * Backend API calls (implement these endpoints)
 */

async function approvePaymentOnBackend(paymentId: string): Promise<void> {
  try {
    const response = await fetch("/api/payments/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentId }),
    })

    if (!response.ok) {
      throw new Error("Payment approval failed")
    }

    console.log("[v0] Payment approved on backend:", paymentId)
  } catch (error) {
    console.error("[v0] Backend approval error:", error)
  }
}

async function completePaymentOnBackend(paymentId: string, txid: string): Promise<void> {
  try {
    const response = await fetch("/api/payments/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentId, txid }),
    })

    if (!response.ok) {
      throw new Error("Payment completion failed")
    }

    console.log("[v0] Payment completed on backend:", paymentId)
  } catch (error) {
    console.error("[v0] Backend completion error:", error)
  }
}

async function handleIncompletePayment(payment: PiPayment): Promise<void> {
  // Implement logic to handle incomplete payments
  console.log("[v0] Handling incomplete payment:", payment)
}

/**
 * Fetch live marketplace statistics
 */
export async function fetchMarketplaceStats() {
  try {
    const response = await fetch("/api/stats")
    if (!response.ok) {
      throw new Error("Failed to fetch stats")
    }
    return await response.json()
  } catch (error) {
    console.error("[v0] Stats fetch error:", error)
    // Return placeholder data as fallback
    return {
      verifiedSellers: 1247,
      totalTrades: 23500,
      countries: 18,
      activeListings: 3842,
    }
  }
}

/**
 * Type declaration for window.Pi
 */
declare global {
  interface Window {
    Pi: {
      authenticate: (
        scopes: string[],
        onIncompletePaymentFound: (payment: PiPayment) => void,
      ) => Promise<{ user: PiUser; accessToken: string }>
      createPayment: (
        paymentData: PiPaymentDTO,
        callbacks: {
          onReadyForServerApproval: (paymentId: string) => void
          onReadyForServerCompletion: (paymentId: string, txid: string) => void
          onCancel: (paymentId: string) => void
          onError: (error: Error, payment?: PiPayment) => void
        },
      ) => Promise<PiPayment>
    }
  }
}
