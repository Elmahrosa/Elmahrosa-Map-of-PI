"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Escrow } from "@/lib/escrow"
import { Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

type EscrowCardProps = {
  escrow: Escrow
  onAction?: (action: string, id: string) => void
  userRole?: "buyer" | "seller"
}

export default function EscrowCard({ escrow, onAction, userRole }: EscrowCardProps) {
  const stateConfig = {
    initiated: { color: "bg-muted", icon: Clock, label: "Initiated" },
    funded: { color: "bg-blue-500", icon: Clock, label: "Funded" },
    delivered: { color: "bg-yellow-500", icon: Clock, label: "Delivered" },
    released: { color: "bg-green-500", icon: CheckCircle, label: "Released" },
    refunded: { color: "bg-orange-500", icon: XCircle, label: "Refunded" },
    dispute: { color: "bg-red-500", icon: AlertTriangle, label: "Dispute" },
    closed: { color: "bg-muted", icon: CheckCircle, label: "Closed" },
  }

  const config = stateConfig[escrow.state]
  const Icon = config.icon

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Escrow {escrow.id}</CardTitle>
          <Badge className={`${config.color} text-white flex items-center gap-1`}>
            <Icon className="w-3 h-3" />
            {config.label}
          </Badge>
        </div>
        <CardDescription className="line-clamp-1">{escrow.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Amount:</span>
          <span className="font-medium">{escrow.amount} π</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Seller:</span>
          <span className="font-medium">{escrow.sellerName}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Buyer:</span>
          <span className="font-medium">{escrow.buyerName}</span>
        </div>
      </CardContent>
      {onAction && (
        <CardFooter className="flex gap-2">
          {escrow.state === "initiated" && userRole === "buyer" && (
            <Button onClick={() => onAction("fund", escrow.id)} className="w-full">
              Fund Escrow
            </Button>
          )}
          {escrow.state === "funded" && userRole === "seller" && (
            <Button onClick={() => onAction("deliver", escrow.id)} className="w-full">
              Mark Delivered
            </Button>
          )}
          {escrow.state === "delivered" && userRole === "buyer" && (
            <>
              <Button onClick={() => onAction("release", escrow.id)} className="flex-1">
                Release Funds
              </Button>
              <Button onClick={() => onAction("dispute", escrow.id)} variant="destructive" className="flex-1">
                Dispute
              </Button>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
