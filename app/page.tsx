"use client"

import { useState, useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { AudienceSection } from "@/components/audience-section"
import { ServicesSection } from "@/components/services-section"
import { ToolsSection } from "@/components/tools-section"
import { MarketplaceHome } from "@/components/marketplace-home"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { LanguageProvider } from "@/contexts/language-context"

interface PiUser {
  uid: string
  username: string
  accessToken: string
}

function ElmahrosaPiApp() {
  const { t } = useLanguage()
  const [user, setUser] = useState<PiUser | null>(null)
  const [userRole, setUserRole] = useState<"buyer" | "seller" | null>(null)
  const [showMarketplace, setShowMarketplace] = useState(false)
  const marketplaceRef = useRef<HTMLDivElement>(null)

  const handleConnect = (userData: PiUser) => {
    setUser(userData)
    checkUserRole(userData.uid)
    setShowMarketplace(true)
    setTimeout(() => {
      marketplaceRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const checkUserRole = async (uid: string) => {
    setUserRole("buyer")
  }

  const handleBecomeSellerComplete = () => {
    setUserRole("seller")
  }

  const handleGetStarted = () => {
    if (user) {
      setShowMarketplace(true)
      setTimeout(() => {
        marketplaceRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      setShowMarketplace(true)
      setTimeout(() => {
        marketplaceRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection onGetStarted={handleGetStarted} />
      <AudienceSection />
      <ServicesSection />
      <ToolsSection />
      <div ref={marketplaceRef}>
        <MarketplaceHome
          user={user}
          userRole={userRole}
          onConnect={handleConnect}
          onBecomeSellerComplete={handleBecomeSellerComplete}
        />
      </div>
      <Footer />
    </div>
  )
}

export default function WrappedApp() {
  return (
    <LanguageProvider>
      <ElmahrosaPiApp />
    </LanguageProvider>
  )
}
