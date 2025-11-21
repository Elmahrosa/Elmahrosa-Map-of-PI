"use client"

import type React from "react"
import { Shield, Award, Star, Check, AlertCircle, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

type SellerBadge = {
  id: string
  name: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  unlocked: boolean
  progress: number
  multiplier: number
  icon: React.ElementType
}

interface BadgeSystemProps {
  badges: SellerBadge[]
  className?: string
}

export function BadgeSystem({ badges, className = "" }: BadgeSystemProps) {
  const { t, language } = useLanguage()

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{t("badges")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-lg border p-4 transition-all ${
                badge.unlocked ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20" : "border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div
                    className={`rounded-lg p-2 ${
                      badge.unlocked ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{badge.name[language as keyof typeof badge.name]}</h4>
                      {badge.unlocked && (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                          x{badge.multiplier}
                        </Badge>
                      )}
                    </div>
                    {badge.unlocked ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {badge.description[language as keyof typeof badge.description]}
              </p>
              <Progress value={badge.progress} className="mt-2 h-1.5" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Example badges data
export const defaultBadges: SellerBadge[] = [
  {
    id: "verified",
    name: {
      en: "Verified Seller",
      ar: "بائع موثق",
    },
    description: {
      en: "Complete identity verification",
      ar: "إكمال التحقق من الهوية",
    },
    unlocked: true,
    progress: 100,
    multiplier: 1.5,
    icon: Shield,
  },
  {
    id: "trusted",
    name: {
      en: "Trusted Merchant",
      ar: "تاجر موثوق",
    },
    description: {
      en: "Receive 10+ positive reviews",
      ar: "الحصول على أكثر من 10 تقييمات إيجابية",
    },
    unlocked: false,
    progress: 60,
    multiplier: 2.0,
    icon: Award,
  },
  {
    id: "regional",
    name: {
      en: "Regional Pioneer",
      ar: "رائد إقليمي",
    },
    description: {
      en: "First seller in your region",
      ar: "أول بائع في منطقتك",
    },
    unlocked: true,
    progress: 100,
    multiplier: 1.25,
    icon: MapPin,
  },
  {
    id: "volume",
    name: {
      en: "Volume Trader",
      ar: "متداول بحجم كبير",
    },
    description: {
      en: "Complete 100+ transactions",
      ar: "إكمال أكثر من 100 معاملة",
    },
    unlocked: false,
    progress: 35,
    multiplier: 1.75,
    icon: Star,
  },
]
