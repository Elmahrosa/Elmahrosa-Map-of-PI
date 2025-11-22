"use client"

import { useEffect, useState, type ReactNode } from "react"
import { authenticatePi, type PiUser } from "@/lib/piAuth"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

type AuthGateProps = {
  children: ReactNode
  requiredRole?: string
}

export default function AuthGate({ children, requiredRole = "buyer" }: AuthGateProps) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<PiUser | null>(null)

  useEffect(() => {
    authenticatePi()
      .then((u) => {
        setUser(u)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Spinner className="w-8 h-8" />
          <p className="text-sm text-muted-foreground">Authenticating with Pi Network...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Alert className="max-w-md">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="mb-4">You must login via Pi Browser to access this feature.</p>
            <Button className="w-full">Open in Pi Browser</Button>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  if (requiredRole && !user.roles?.includes(requiredRole)) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Alert className="max-w-md" variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Access Restricted</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="mb-4">
              This feature requires seller approval. Please complete the petition process to gain access.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Submit Petition
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return <>{children}</>
}
