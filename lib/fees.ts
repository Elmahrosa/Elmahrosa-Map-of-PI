"use client"

/**
 * Elmahrosa Map of Pi - Fee Structure
 * Civic-first marketplace economics with transparent treasury routing
 */

export interface FeeConfig {
  name: string
  type: "fixed" | "percentage"
  amount: number
  description: string
  treasuryRoute: string
}

export const MARKETPLACE_FEES: Record<string, FeeConfig> = {
  NFT_MINTING: {
    name: "NFT Minting Fee",
    type: "fixed",
    amount: 1.5, // 1.5 Pi per mint
    description: "Covers verification, badge issuance, and treasury contribution",
    treasuryRoute: "civic_treasury",
  },

  TRADE_COMMISSION: {
    name: "Marketplace Trade Fee",
    type: "percentage",
    amount: 3.5, // 3.5% of trade value
    description: "Platform commission on successful trades, routed to civic treasury",
    treasuryRoute: "civic_treasury",
  },

  SELLER_VERIFICATION: {
    name: "Seller Verification Fee",
    type: "fixed",
    amount: 2.0, // 2 Pi one-time
    description: "One-time verification covering KYC, badge creation, and map listing",
    treasuryRoute: "verification_pool",
  },

  PREMIUM_LISTING: {
    name: "Premium Listing Fee",
    type: "fixed",
    amount: 5.0, // 5 Pi per month
    description: "Featured placement on map, priority search ranking, enhanced visibility",
    treasuryRoute: "civic_treasury",
  },

  WITHDRAWAL_FEE: {
    name: "Treasury Withdrawal Fee",
    type: "percentage",
    amount: 1.0, // 1% on withdrawals
    description: "Network fee for Pi wallet withdrawals, covers transaction costs",
    treasuryRoute: "network_fees",
  },
}

/**
 * Calculate fee for a transaction
 */
export function calculateFee(feeType: keyof typeof MARKETPLACE_FEES, baseAmount = 0): number {
  const feeConfig = MARKETPLACE_FEES[feeType]

  if (feeConfig.type === "fixed") {
    return feeConfig.amount
  } else {
    return (baseAmount * feeConfig.amount) / 100
  }
}

/**
 * Get total fees for a transaction
 */
export function getTotalFees(tradeAmount: number): {
  tradeFee: number
  total: number
  breakdown: Array<{ name: string; amount: number }>
} {
  const tradeFee = calculateFee("TRADE_COMMISSION", tradeAmount)

  return {
    tradeFee,
    total: tradeFee,
    breakdown: [
      {
        name: MARKETPLACE_FEES.TRADE_COMMISSION.name,
        amount: tradeFee,
      },
    ],
  }
}

/**
 * Founder Injection Rules
 * Initial liquidity injection carries symbolic burn for compliance
 */
export const FOUNDER_INJECTION = {
  ERT_SUPPLY: 50_000_000_000, // 50B ERT
  TEOS_SUPPLY: 1_000_000_000, // 1B TEOS
  SYMBOLIC_BURN_RATE: 0.1, // 0.1% burned as compliance ritual
  TREASURY_ROUTE: "founder_liquidity_pool",
  RITUAL_DECLARATION: "Founder injection with civic-first audit trail",
}

/**
 * Staking Rewards Logic
 * No fee on staking, but treasury earns yield
 */
export const STAKING_CONFIG = {
  MIN_STAKE_AMOUNT: 10, // 10 Pi minimum
  REWARD_RATE_APY: 12, // 12% annual yield
  LOCK_PERIOD_DAYS: 30, // 30-day minimum lock
  TREASURY_YIELD_SHARE: 20, // 20% of yield to civic treasury
  EARLY_WITHDRAWAL_PENALTY: 5, // 5% penalty if withdrawn early
}

export const FEE_CONFIG = MARKETPLACE_FEES
