// Escrow Module - Safe trade management

export type EscrowState = "initiated" | "funded" | "delivered" | "released" | "refunded" | "dispute" | "closed"

export type Escrow = {
  id: string
  sellerId: string
  sellerName: string
  buyerId: string
  buyerName: string
  amount: number
  description: string
  state: EscrowState
  createdAt: string
  updatedAt: string
}

// In-memory store for development
// Replace with database in production
const escrowStore: Record<string, Escrow> = {}

export function createEscrow(data: Omit<Escrow, "id" | "state" | "createdAt" | "updatedAt">): Escrow {
  const id = `escrow-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  const now = new Date().toISOString()

  const escrow: Escrow = {
    ...data,
    id,
    state: "initiated",
    createdAt: now,
    updatedAt: now,
  }

  escrowStore[id] = escrow
  return escrow
}

export function fundEscrow(id: string): Escrow | null {
  const escrow = escrowStore[id]
  if (!escrow || escrow.state !== "initiated") return null

  escrow.state = "funded"
  escrow.updatedAt = new Date().toISOString()
  return escrow
}

export function markDelivered(id: string): Escrow | null {
  const escrow = escrowStore[id]
  if (!escrow || escrow.state !== "funded") return null

  escrow.state = "delivered"
  escrow.updatedAt = new Date().toISOString()
  return escrow
}

export function releaseFunds(id: string): Escrow | null {
  const escrow = escrowStore[id]
  if (!escrow || escrow.state !== "delivered") return null

  escrow.state = "released"
  escrow.updatedAt = new Date().toISOString()
  return escrow
}

export function refundEscrow(id: string): Escrow | null {
  const escrow = escrowStore[id]
  if (!escrow || !["funded", "delivered"].includes(escrow.state)) return null

  escrow.state = "refunded"
  escrow.updatedAt = new Date().toISOString()
  return escrow
}

export function openDispute(id: string): Escrow | null {
  const escrow = escrowStore[id]
  if (!escrow || !["funded", "delivered"].includes(escrow.state)) return null

  escrow.state = "dispute"
  escrow.updatedAt = new Date().toISOString()
  return escrow
}

export function getEscrow(id: string): Escrow | null {
  return escrowStore[id] || null
}

export function getAllEscrows(): Escrow[] {
  return Object.values(escrowStore)
}
