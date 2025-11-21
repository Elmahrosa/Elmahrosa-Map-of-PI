"use client"

import { MARKETPLACE_FEES, calculateFee, getTotalFees } from "./fees"
import { supabase } from "./auth"

/**
 * Fee Manager
 * Handles fee updates, calculations, and treasury routing
 */

export interface FeeUpdate {
  feeType: keyof typeof MARKETPLACE_FEES
  newAmount: number
  updatedBy: string
  timestamp: Date
}

/**
 * Update a marketplace fee (founder only)
 */
export async function updateFee(
  feeType: keyof typeof MARKETPLACE_FEES,
  newAmount: number,
  founderId: string,
): Promise<boolean> {
  try {
    // Validate amount
    if (newAmount < 0) {
      throw new Error("Fee amount cannot be negative")
    }

    const feeConfig = MARKETPLACE_FEES[feeType]

    // In production, save to database
    if (supabase) {
      const { error } = await supabase.from("fee_history").insert({
        fee_type: feeType,
        fee_name: feeConfig.name,
        old_amount: feeConfig.amount,
        new_amount: newAmount,
        updated_by: founderId,
        timestamp: new Date().toISOString(),
      })

      if (error) throw error

      // Update current fees table
      await supabase.from("current_fees").upsert({
        fee_type: feeType,
        amount: newAmount,
        type: feeConfig.type,
        updated_at: new Date().toISOString(),
      })
    }

    // Update in-memory config
    MARKETPLACE_FEES[feeType].amount = newAmount

    console.log("[v0] Fee updated:", { feeType, newAmount, founderId })
    return true
  } catch (error) {
    console.error("[v0] Fee update error:", error)
    return false
  }
}

/**
 * Get current fees from database
 */
export async function getCurrentFees(): Promise<typeof MARKETPLACE_FEES> {
  if (!supabase) return MARKETPLACE_FEES

  try {
    const { data, error } = await supabase.from("current_fees").select("*")

    if (error) throw error

    // Merge database fees with default config
    const updatedFees = { ...MARKETPLACE_FEES }
    data?.forEach((feeRecord) => {
      if (updatedFees[feeRecord.fee_type as keyof typeof MARKETPLACE_FEES]) {
        updatedFees[feeRecord.fee_type as keyof typeof MARKETPLACE_FEES].amount = feeRecord.amount
      }
    })

    return updatedFees
  } catch (error) {
    console.error("[v0] Get fees error:", error)
    return MARKETPLACE_FEES
  }
}

/**
 * Get fee history (audit trail)
 */
export async function getFeeHistory(limit = 50): Promise<FeeUpdate[]> {
  if (!supabase) return []

  try {
    const { data, error } = await supabase
      .from("fee_history")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(limit)

    if (error) throw error

    return (
      data?.map((record) => ({
        feeType: record.fee_type,
        newAmount: record.new_amount,
        updatedBy: record.updated_by,
        timestamp: new Date(record.timestamp),
      })) || []
    )
  } catch (error) {
    console.error("[v0] Get fee history error:", error)
    return []
  }
}

/**
 * Calculate fees for a transaction with current rates
 */
export async function calculateTransactionFees(tradeAmount: number) {
  const currentFees = await getCurrentFees()
  const tradeFee = (tradeAmount * currentFees.TRADE_COMMISSION.amount) / 100

  return {
    tradeFee,
    netAmount: tradeAmount - tradeFee,
    breakdown: [
      {
        name: currentFees.TRADE_COMMISSION.name,
        amount: tradeFee,
        percentage: currentFees.TRADE_COMMISSION.amount,
      },
    ],
  }
}

export { calculateFee, getTotalFees }
