"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Star, CheckCircle2, TrendingUp, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface PiUser {
  uid: string
  username: string
  accessToken: string
}

interface MarketplaceHomeProps {
  user: PiUser | null
  userRole: "buyer" | "seller" | null
  onConnect: (user: PiUser) => void
  onBecomeSellerComplete: () => void
}

export function MarketplaceHome({ user, userRole, onConnect, onBecomeSellerComplete }: MarketplaceHomeProps) {
  const { t, language } = useLanguage()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      // @ts-ignore - Pi SDK is loaded via script tag
      if (typeof window !== "undefined" && window.Pi) {
        // @ts-ignore
        const scopes = ["username", "payments", "wallet_address"]
        // @ts-ignore
        window.Pi.authenticate(scopes, onIncompletePaymentFound).then((auth: any) => {
          onConnect(auth.user)
        })
      }
    } catch (error) {
      console.error("Pi authentication error:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const onIncompletePaymentFound = (payment: any) => {
    console.log("Incomplete payment found:", payment)
  }

  const sellers = [
    { name: "Ahmed Hassan", location: "Cairo, Egypt", rating: 4.9, trades: 342, verified: true },
    { name: "Fatima Ali", location: "Dubai, UAE", rating: 4.8, trades: 289, verified: true },
    { name: "Omar Khalil", location: "Lagos, Nigeria", rating: 4.7, trades: 215, verified: true },
    { name: "Layla Ibrahim", location: "Casablanca, Morocco", rating: 4.9, trades: 178, verified: true },
    { name: "Hassan Nour", location: "Alexandria, Egypt", rating: 4.8, trades: 156, verified: true },
    { name: "Yasmin Saad", location: "Riyadh, Saudi Arabia", rating: 4.9, trades: 134, verified: true },
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Marketplace</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse verified sellers and connect securely with Pi Network
          </p>
        </div>

        {/* Connect Button */}
        {!user && (
          <div className="max-w-md mx-auto mb-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{t("connectWithPi")}</h3>
                  <p className="text-sm text-muted-foreground">Connect your Pi wallet to start trading</p>
                </div>
                <Button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {isConnecting ? t("connecting") : t("connectWallet")}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search sellers by location or name..." className="pl-10 h-12" />
            </div>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-6">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Sellers Grid */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            Featured Sellers
          </h3>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            {sellers.length} Active Sellers
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sellers.map((seller, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow border border-border">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-lg">
                    {seller.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-card-foreground flex items-center gap-1.5">
                      {seller.name}
                      {seller.verified && <CheckCircle2 className="w-4 h-4 text-verified flex-shrink-0" />}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {seller.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium text-card-foreground text-sm">{seller.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{seller.trades} trades</div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">View Profile</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
