"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { LanguageProvider } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, DollarSign, Users, TrendingUp, Shield, Lock, AlertCircle, CheckCircle2 } from "lucide-react"
import { loginFounder, logout, onAuthStateChange, type AuthUser } from "@/lib/auth"
import { MARKETPLACE_FEES } from "@/lib/fees"
import { updateFee, getCurrentFees } from "@/lib/fee-manager"

interface FeeSettings {
  NFT_MINTING: number
  TRADE_COMMISSION: number
  SELLER_VERIFICATION: number
  PREMIUM_LISTING: number
  WITHDRAWAL_FEE: number
}

function FounderDashboardContent() {
  const { t, language, setLanguage } = useLanguage()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [loginSuccess, setLoginSuccess] = useState(false)

  const [fees, setFees] = useState<FeeSettings>({
    NFT_MINTING: MARKETPLACE_FEES.NFT_MINTING.amount,
    TRADE_COMMISSION: MARKETPLACE_FEES.TRADE_COMMISSION.amount,
    SELLER_VERIFICATION: MARKETPLACE_FEES.SELLER_VERIFICATION.amount,
    PREMIUM_LISTING: MARKETPLACE_FEES.PREMIUM_LISTING.amount,
    WITHDRAWAL_FEE: MARKETPLACE_FEES.WITHDRAWAL_FEE.amount,
  })
  const [editedFees, setEditedFees] = useState<FeeSettings>(fees)
  const [isEditing, setIsEditing] = useState(false)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

  useEffect(() => {
    const loadFees = async () => {
      const currentFees = await getCurrentFees()
      const loadedFees = {
        NFT_MINTING: currentFees.NFT_MINTING.amount,
        TRADE_COMMISSION: currentFees.TRADE_COMMISSION.amount,
        SELLER_VERIFICATION: currentFees.SELLER_VERIFICATION.amount,
        PREMIUM_LISTING: currentFees.PREMIUM_LISTING.amount,
        WITHDRAWAL_FEE: currentFees.WITHDRAWAL_FEE.amount,
      }
      setFees(loadedFees)
      setEditedFees(loadedFees)
    }
    loadFees()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setCurrentUser(user)
      if (user && user.role !== "founder") {
        setLoginError("Unauthorized: Founder access only")
        setCurrentUser(null)
      }
    })
    return unsubscribe
  }, [])

  const [stats] = useState({
    totalSellers: 127,
    activeBuyers: 543,
    totalTransactions: 1234,
    revenue: 156.75,
    pendingVerifications: 8,
    verifiedSellers: 119,
  })

  const handleLogin = async () => {
    setLoginError("")
    setLoginSuccess(false)

    if (!email || !password) {
      setLoginError(t("pleaseEnterCredentials") || "Please enter email and password")
      return
    }

    const user = await loginFounder(email, password)

    if (user) {
      setCurrentUser(user)
      setLoginSuccess(true)
      setLoginError("")
    } else {
      setLoginError(t("invalidCredentials") || "Invalid credentials or unauthorized access")
    }
  }

  const handleSaveFees = async () => {
    if (!currentUser) return

    setSaveStatus("saving")

    try {
      const updates = Object.entries(editedFees).filter(([key, value]) => fees[key as keyof FeeSettings] !== value)

      for (const [feeType, newAmount] of updates) {
        await updateFee(feeType as keyof typeof MARKETPLACE_FEES, newAmount, currentUser.id)
      }

      setFees(editedFees)
      setIsEditing(false)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 3000)
    }
  }

  const handleCancelEdit = () => {
    setEditedFees(fees)
    setIsEditing(false)
    setSaveStatus("idle")
  }

  const handleLogout = async () => {
    await logout()
    setCurrentUser(null)
    setEmail("")
    setPassword("")
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple to-navy p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">{t("founderAccess") || "Founder Access"}</CardTitle>
            <CardDescription>{t("founderLoginDesc") || "Secure login for Elmahrosa founders"}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {loginError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            {loginSuccess && (
              <Alert className="border-verified bg-verified/10">
                <CheckCircle2 className="h-4 w-4 text-verified" />
                <AlertDescription className="text-verified">Login successful</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">{t("email") || "Email"}</Label>
              <Input
                id="email"
                type="email"
                placeholder="founder@elmahrosa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t("password") || "Password"}</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>

            <Button onClick={handleLogin} className="w-full" size="lg">
              <Lock className="mr-2 h-4 w-4" />
              {t("loginFounder") || "Login as Founder"}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              {t("defaultPassword") || "Default password: elmahrosa2025"}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t("founderDashboard") || "Founder Dashboard"}</h1>
            <p className="text-muted-foreground mt-1">
              {t("welcomeBack") || "Welcome back"}, {currentUser.email}
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            {t("logout") || "Logout"}
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("totalSellers") || "Total Sellers"}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalSellers}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <Badge variant="secondary" className="bg-verified/10 text-verified">
                  {stats.verifiedSellers} {t("verified") || "verified"}
                </Badge>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("activeBuyers") || "Active Buyers"}</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeBuyers}</div>
              <p className="text-xs text-muted-foreground mt-1">+12% {t("fromLastMonth") || "from last month"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t("revenue") || "Revenue (Pi)"}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.revenue.toFixed(2)} π</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.totalTransactions} {t("transactions") || "transactions"}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="fees" className="space-y-4">
          <TabsList>
            <TabsTrigger value="fees">
              <Settings className="mr-2 h-4 w-4" />
              {t("manageFees") || "Manage Fees"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fees" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{t("marketplaceFees") || "Marketplace Fees"}</CardTitle>
                    <CardDescription>
                      {t("manageFeeStructure") || "Manage fee structure for platform operations"}
                    </CardDescription>
                  </div>
                  {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)} variant="outline">
                      {t("edit") || "Edit"}
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={handleSaveFees} disabled={saveStatus === "saving"}>
                        {saveStatus === "saving" ? t("saving") || "Saving..." : t("save") || "Save"}
                      </Button>
                      <Button onClick={handleCancelEdit} variant="outline">
                        {t("cancel") || "Cancel"}
                      </Button>
                    </div>
                  )}
                </div>

                {saveStatus === "success" && (
                  <Alert className="mt-4 border-verified bg-verified/10">
                    <CheckCircle2 className="h-4 w-4 text-verified" />
                    <AlertDescription className="text-verified">
                      {t("feesSaved") || "Fees updated successfully"}
                    </AlertDescription>
                  </Alert>
                )}

                {saveStatus === "error" && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{t("feesError") || "Failed to update fees. Please try again."}</AlertDescription>
                  </Alert>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="nft-minting">{MARKETPLACE_FEES.NFT_MINTING.name}</Label>
                      <p className="text-sm text-muted-foreground">{MARKETPLACE_FEES.NFT_MINTING.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="nft-minting"
                        type="number"
                        step="0.1"
                        className="w-24"
                        value={isEditing ? editedFees.NFT_MINTING : fees.NFT_MINTING}
                        onChange={(e) =>
                          setEditedFees((prev) => ({ ...prev, NFT_MINTING: Number.parseFloat(e.target.value) || 0 }))
                        }
                        disabled={!isEditing}
                      />
                      <span className="text-sm text-muted-foreground">π</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="trade-commission">{MARKETPLACE_FEES.TRADE_COMMISSION.name}</Label>
                      <p className="text-sm text-muted-foreground">{MARKETPLACE_FEES.TRADE_COMMISSION.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="trade-commission"
                        type="number"
                        step="0.1"
                        className="w-24"
                        value={isEditing ? editedFees.TRADE_COMMISSION : fees.TRADE_COMMISSION}
                        onChange={(e) =>
                          setEditedFees((prev) => ({
                            ...prev,
                            TRADE_COMMISSION: Number.parseFloat(e.target.value) || 0,
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="seller-verification">{MARKETPLACE_FEES.SELLER_VERIFICATION.name}</Label>
                      <p className="text-sm text-muted-foreground">
                        {MARKETPLACE_FEES.SELLER_VERIFICATION.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="seller-verification"
                        type="number"
                        step="0.1"
                        className="w-24"
                        value={isEditing ? editedFees.SELLER_VERIFICATION : fees.SELLER_VERIFICATION}
                        onChange={(e) =>
                          setEditedFees((prev) => ({
                            ...prev,
                            SELLER_VERIFICATION: Number.parseFloat(e.target.value) || 0,
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <span className="text-sm text-muted-foreground">π</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="premium-listing">{MARKETPLACE_FEES.PREMIUM_LISTING.name}</Label>
                      <p className="text-sm text-muted-foreground">{MARKETPLACE_FEES.PREMIUM_LISTING.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="premium-listing"
                        type="number"
                        step="0.1"
                        className="w-24"
                        value={isEditing ? editedFees.PREMIUM_LISTING : fees.PREMIUM_LISTING}
                        onChange={(e) =>
                          setEditedFees((prev) => ({
                            ...prev,
                            PREMIUM_LISTING: Number.parseFloat(e.target.value) || 0,
                          }))
                        }
                        disabled={!isEditing}
                      />
                      <span className="text-sm text-muted-foreground">π/mo</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="withdrawal-fee">{MARKETPLACE_FEES.WITHDRAWAL_FEE.name}</Label>
                      <p className="text-sm text-muted-foreground">{MARKETPLACE_FEES.WITHDRAWAL_FEE.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="withdrawal-fee"
                        type="number"
                        step="0.1"
                        className="w-24"
                        value={isEditing ? editedFees.WITHDRAWAL_FEE : fees.WITHDRAWAL_FEE}
                        onChange={(e) =>
                          setEditedFees((prev) => ({ ...prev, WITHDRAWAL_FEE: Number.parseFloat(e.target.value) || 0 }))
                        }
                        disabled={!isEditing}
                      />
                      <span className="text-sm text-muted-foreground">π</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function FounderDashboard() {
  return (
    <LanguageProvider>
      <FounderDashboardContent />
    </LanguageProvider>
  )
}
