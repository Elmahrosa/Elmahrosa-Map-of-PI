"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, ShoppingBag, Zap } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Official Pi Network Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{t("hero_title")}</h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
            >
              {t("register_now")}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent">
              {t("browse_sellers")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Egypt • MENA • Africa</h3>
              <p className="text-sm text-muted-foreground text-center">Serving 50+ countries across three regions</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">10,000+ Sellers</h3>
              <p className="text-sm text-muted-foreground text-center">Growing marketplace community</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">π</span>
              </div>
              <h3 className="font-semibold">Pi Payments</h3>
              <p className="text-sm text-muted-foreground text-center">Secure cryptocurrency transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
