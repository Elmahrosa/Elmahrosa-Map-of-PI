"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Shield, BarChart3, Wallet, Search, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ToolsSection() {
  const { t, language } = useLanguage()

  const tools = [
    {
      icon: MapPin,
      titleEn: "Interactive Map",
      titleAr: "خريطة تفاعلية",
      descEn: "Real-time visualization of verified sellers across Egypt, MENA, and Africa",
      descAr: "عرض مباشر للبائعين الموثقين عبر مصر والشرق الأوسط وأفريقيا",
      badge: "Live",
    },
    {
      icon: Shield,
      titleEn: "Verification System",
      titleAr: "نظام التوثيق",
      descEn: "Multi-layer verification with civic badges and trust scores",
      descAr: "توثيق متعدد المستويات مع شارات ثقة ودرجات تقييم",
      badge: "Secure",
    },
    {
      icon: BarChart3,
      titleEn: "Analytics Dashboard",
      titleAr: "لوحة التحليلات",
      descEn: "Track marketplace trends, seller performance, and trade volumes",
      descAr: "تتبع اتجاهات السوق وأداء البائعين وحجم التداولات",
      badge: "Pro",
    },
    {
      icon: Wallet,
      titleEn: "Pi Wallet Integration",
      titleAr: "تكامل محفظة باي",
      descEn: "Seamless payments and instant transactions via Pi Network",
      descAr: "مدفوعات سلسة ومعاملات فورية عبر شبكة باي",
      badge: "Fast",
    },
    {
      icon: Search,
      titleEn: "Advanced Search",
      titleAr: "بحث متقدم",
      descEn: "Filter by location, rating, price, and verification status",
      descAr: "تصفية حسب الموقع والتقييم والسعر وحالة التوثيق",
      badge: "Smart",
    },
    {
      icon: Bell,
      titleEn: "Real-time Alerts",
      titleAr: "تنبيهات فورية",
      descEn: "Instant notifications for new listings, price changes, and verifications",
      descAr: "إشعارات فورية للإعلانات الجديدة وتغييرات الأسعار والتوثيقات",
      badge: "Active",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-sand/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Powerful Tools" : "أدوات قوية"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Everything you need to trade Pi securely and efficiently"
              : "كل ما تحتاجه للتداول بعملة باي بأمان وكفاءة"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="border-gold/20 hover:border-gold/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-emerald/10 text-emerald">
                    {tool.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{language === "en" ? tool.titleEn : tool.titleAr}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{language === "en" ? tool.descEn : tool.descAr}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
