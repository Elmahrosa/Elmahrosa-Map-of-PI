"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Package,
  Settings,
  User,
  Plus,
  Star,
  Award,
  Coins,
  RefreshCcw,
  CheckCircle2,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BadgeSystem, defaultBadges } from "./badge-system"
import { useLanguage } from "@/contexts/language-context"

interface SellerDashboardProps {
  piUsername: string
  sellerData?: any
}

type Token = {
  symbol: string
  name: string
  balance: number
  icon: React.ElementType
}

export function SellerDashboard({ piUsername, sellerData }: SellerDashboardProps) {
  const { t, language, setLanguage } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  // Sample token data
  const tokens: Token[] = [
    {
      symbol: "ERT",
      name: "Elmahrosa Reward Token",
      balance: 125.5,
      icon: Award,
    },
    {
      symbol: "TGR",
      name: "TEOS Governance Reward",
      balance: 75.25,
      icon: Star,
    },
    {
      symbol: "FPBE_COIN",
      name: "FPBE Ecosystem Token",
      balance: 250,
      icon: Coins,
    },
  ]

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("dashboard")}</h1>
        <Badge variant="default" className="bg-emerald-500">
          {t("verified")}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            {language === "en" ? "Overview" : "نظرة عامة"}
          </TabsTrigger>
          <TabsTrigger value="listings" className="gap-2">
            <Package className="h-4 w-4" />
            {t("listings")}
          </TabsTrigger>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" />
            {t("profile")}
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-2">
            <Settings className="h-4 w-4" />
            {t("settings")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Welcome Card */}
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? `Welcome, @${piUsername}` : `مرحبًا، @${piUsername}`}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {language === "en"
                  ? "You are now a verified seller on the Elmahrosa Map of Pi ecosystem. Start adding your products or services to reach customers across Egypt and beyond."
                  : "أنت الآن بائع موثق في نظام خريطة المحروسة لباي. ابدأ في إضافة منتجاتك أو خدماتك للوصول إلى العملاء في جميع أنحاء مصر وخارجها."}
              </p>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                {language === "en" ? "Add New Listing" : "إضافة قائمة جديدة"}
              </Button>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Active Listings" : "القوائم النشطة"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">0</div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Total Sales" : "إجمالي المبيعات"}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">100%</div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Verification" : "التحقق"}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold">0π</div>
                <p className="text-sm text-muted-foreground">{language === "en" ? "Pi Earned" : "باي المكتسب"}</p>
              </CardContent>
            </Card>
          </div>

          {/* Badges */}
          <BadgeSystem badges={defaultBadges} />

          {/* Tokens */}
          <Card>
            <CardHeader>
              <CardTitle>{t("rewards")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tokens.map((token) => (
                <div key={token.symbol} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <token.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{token.symbol}</p>
                      <p className="text-sm text-muted-foreground">{token.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{token.balance.toFixed(2)}</p>
                    <Button variant="ghost" size="sm">
                      <RefreshCcw className="mr-1 h-3 w-3" />
                      {language === "en" ? "Refresh" : "تحديث"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="listings">
          <Card>
            <CardHeader>
              <CardTitle>{t("listings")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Package className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  {language === "en"
                    ? "You don't have any listings yet. Add your first product or service."
                    : "ليس لديك أي قوائم حتى الآن. أضف أول منتج أو خدمة لك."}
                </p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  {language === "en" ? "Add New Listing" : "إضافة قائمة جديدة"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>{t("profile")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">@{piUsername}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {language === "en" ? "Cairo, Egypt" : "القاهرة، مصر"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">{language === "en" ? "Member Since" : "عضو منذ"}</span>
                  <span className="font-medium">
                    {new Date().toLocaleDateString(language === "en" ? "en-US" : "ar-EG")}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    {language === "en" ? "Business Type" : "نوع النشاط التجاري"}
                  </span>
                  <span className="font-medium">{language === "en" ? "Retail Store" : "متجر تجزئة"}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">
                    {language === "en" ? "Verification Status" : "حالة التحقق"}
                  </span>
                  <Badge variant="default" className="bg-emerald-500">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    {language === "en" ? "Verified" : "موثق"}
                  </Badge>
                </div>
              </div>

              <Button className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                {language === "en" ? "Edit Profile" : "تعديل الملف الشخصي"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">{t("language")}</h4>
                <div className="flex gap-2">
                  <Button variant={language === "en" ? "default" : "outline"} onClick={() => setLanguage("en")}>
                    {t("english")}
                  </Button>
                  <Button variant={language === "ar" ? "default" : "outline"} onClick={() => setLanguage("ar")}>
                    {t("arabic")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
