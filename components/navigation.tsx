"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Menu, Globe, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">π</span>
            </div>
            <span className="font-bold text-lg">EMAPOFPI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="/#marketplace" className="text-sm hover:text-primary transition-colors">
              {t("marketplace")}
            </a>
            <a href="/#features" className="text-sm hover:text-primary transition-colors">
              {t("features")}
            </a>
            <a href="/#register" className="text-sm hover:text-primary transition-colors">
              {t("register_seller")}
            </a>
            <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/founder" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Shield className="h-3 w-3" />
              Founder
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="rounded-full"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>

            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
              {t("get_started")}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/#marketplace" className="text-sm hover:text-primary transition-colors">
                {t("marketplace")}
              </a>
              <a href="/#features" className="text-sm hover:text-primary transition-colors">
                {t("features")}
              </a>
              <a href="/#register" className="text-sm hover:text-primary transition-colors">
                {t("register_seller")}
              </a>
              <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/founder" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Founder
              </Link>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("get_started")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
