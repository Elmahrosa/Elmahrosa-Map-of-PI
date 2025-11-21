"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface HeroSectionProps {
  onGetStarted: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const { t, language, setLanguage } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#5A3E85] to-[#0D1B2A]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="#C89B3C" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="20" r="15" stroke="#C89B3C" strokeWidth="0.5" opacity="0.5" />
                <circle cx="20" cy="20" r="11" stroke="#C89B3C" strokeWidth="0.5" opacity="0.7" />
                <path
                  d="M20 8C15.58 8 12 11.58 12 16C12 21 20 30 20 30C20 30 28 21 28 16C28 11.58 24.42 8 20 8Z"
                  fill="#5A3E85"
                />
                <text x="20" y="19" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">
                  π
                </text>
                <circle cx="27" cy="12" r="3" fill="#1FAF6B" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:inline">{t("appName")}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="text-white hover:bg-white/10 gap-2"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-emerald text-white border-0 px-4 py-1.5 text-sm">
            <Shield className="w-3 h-3 mr-1" />
            {t("verified")} Marketplace
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
            {t("welcome")}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 text-pretty max-w-2xl mx-auto">
            Official seller onboarding platform for Pi Network in Egypt, MENA, and Africa
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-gold hover:bg-gold/90 text-[#0D1B2A] font-semibold px-8 h-12 gap-2"
            >
              <MapPin className="w-5 h-5" />
              Explore Map
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 h-12 gap-2 bg-transparent"
            >
              <Zap className="w-5 h-5" />
              {t("becomeSeller")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">1,247</div>
              <div className="text-sm text-white/70">Verified Sellers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">23.5K</div>
              <div className="text-sm text-white/70">Total Trades</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold">18</div>
              <div className="text-sm text-white/70">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
