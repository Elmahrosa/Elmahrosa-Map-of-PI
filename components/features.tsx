"use client"

import { useLanguage } from "@/contexts/language-context"
import { Check, Map, Package, Shield, Users, Zap } from "lucide-react"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: t("open_registration"),
      description: t("free_instant"),
    },
    {
      icon: Map,
      title: t("interactive_map"),
      description: t("discover_sellers"),
    },
    {
      icon: Package,
      title: t("product_listings"),
      description: t("browse_thousands"),
    },
    {
      icon: Shield,
      title: t("verified_sellers"),
      description: "Badge system for trusted merchants",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by TEOS Egypt & Elmahrosa",
    },
    {
      icon: Check,
      title: t("secure_payments"),
      description: "Pi SDK 2.0 integration",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Everything You Need to Sell with Pi</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Complete platform for buyers and sellers across Egypt, MENA, and Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
