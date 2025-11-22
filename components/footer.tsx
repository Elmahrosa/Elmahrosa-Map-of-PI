"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, Send } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">π</span>
              </div>
              <span className="font-bold text-lg">EMAPOFPI</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Official seller onboarding platform for Pi Network in Egypt, MENA, and Africa
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("marketplace")}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Browse Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Verified Badges
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("for_sellers")}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Register Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Seller Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@elmahrosapi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                <a href="https://t.me/Elmahrosapi" className="hover:text-primary transition-colors">
                  @Elmahrosapi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© 2025 EMAPOFPI - Built by TEOS Egypt & Elmahrosa International</p>
            <p>Powered by Pi Network • MIT License</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
