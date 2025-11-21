"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: "Company",
      legal: "Legal",
      support: "Support",
      about: "About Elmahrosa",
      founder: "Founder Dashboard",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Us",
      rights: "© 2025 Elmahrosa International. All rights reserved.",
      domains: "Available at:",
    },
    ar: {
      company: "الشركة",
      legal: "قانوني",
      support: "الدعم",
      about: "عن المحروسة",
      founder: "لوحة تحكم المؤسس",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بنا",
      rights: "© 2025 المحروسة الدولية. جميع الحقوق محفوظة.",
      domains: "متاح على:",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/founder" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.founder}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">{t.support}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@elmahrosa.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground text-center mb-3">{t.rights}</p>
          <div className="text-sm text-muted-foreground text-center">
            <p className="mb-1">{t.domains}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://elmahrosa-map-of-pi-bj36.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                elmahrosa-map-of-pi-bj36.vercel.app
              </a>
              <span>•</span>
              <a
                href="https://elmahrosamapofpi4696.pinet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                elmahrosamapofpi4696.pinet.com
              </a>
              <span>•</span>
              <span className="hover:text-foreground transition-colors">EMAPOFPI.TEOSEGYPT.COM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
