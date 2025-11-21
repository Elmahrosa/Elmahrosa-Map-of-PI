"use client"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

export interface AuthUser {
  id: string
  email: string
  role: "founder" | "seller" | "buyer"
  createdAt: Date
}

/**
 * Founder Authentication
 * Secure login with Supabase auth
 */
export async function loginFounder(email: string, password: string): Promise<AuthUser | null> {
  if (!supabase) {
    // Fallback to simple password check if Supabase not configured
    const founderPassword = process.env.FOUNDER_PASSWORD || "elmahrosa2025"
    if (password === founderPassword) {
      return {
        id: "founder-001",
        email: "founder@elmahrosa.com",
        role: "founder",
        createdAt: new Date(),
      }
    }
    return null
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Check if user has founder role
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", data.user.id).single()

    if (profile?.role !== "founder") {
      await supabase.auth.signOut()
      throw new Error("Unauthorized: Founder access only")
    }

    return {
      id: data.user.id,
      email: data.user.email || "",
      role: "founder",
      createdAt: new Date(data.user.created_at),
    }
  } catch (error) {
    console.error("[v0] Founder login error:", error)
    return null
  }
}

/**
 * Check if user is authenticated
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  if (!supabase) return null

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    return {
      id: user.id,
      email: user.email || "",
      role: profile?.role || "buyer",
      createdAt: new Date(user.created_at),
    }
  } catch (error) {
    console.error("[v0] Get current user error:", error)
    return null
  }
}

/**
 * Logout user
 */
export async function logout(): Promise<void> {
  if (!supabase) return
  await supabase.auth.signOut()
}

/**
 * Session management
 */
export function onAuthStateChange(callback: (user: AuthUser | null) => void) {
  if (!supabase) return () => {}

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

      callback({
        id: session.user.id,
        email: session.user.email || "",
        role: profile?.role || "buyer",
        createdAt: new Date(session.user.created_at),
      })
    } else {
      callback(null)
    }
  })

  return () => subscription.unsubscribe()
}
