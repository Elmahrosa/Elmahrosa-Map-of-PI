"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Store, Star } from "lucide-react"
import { useState } from "react"

export default function Marketplace() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const categories = [
    { id: "all", label: t("all_categories") },
    { id: "electronics", label: t("electronics") },
    { id: "fashion", label: t("fashion") },
    { id: "food", label: t("food") },
    { id: "services", label: t("services") },
    { id: "realestate", label: t("real_estate") },
  ]

  const regions = [
    { id: "all", label: "All Regions" },
    { id: "egypt", label: t("egypt") },
    { id: "mena", label: t("mena") },
    { id: "africa", label: t("africa") },
  ]

  const sellers = [
    {
      name: "Cairo Electronics",
      location: "Cairo, Egypt",
      category: "Electronics",
      rating: 4.8,
      verified: true,
      products: 245,
    },
    {
      name: "MENA Fashion Hub",
      location: "Dubai, UAE",
      category: "Fashion",
      rating: 4.9,
      verified: true,
      products: 189,
    },
    {
      name: "African Crafts Co",
      location: "Lagos, Nigeria",
      category: "Services",
      rating: 4.7,
      verified: true,
      products: 156,
    },
    {
      name: "Alexandria Foods",
      location: "Alexandria, Egypt",
      category: "Food & Beverages",
      rating: 4.6,
      verified: false,
      products: 98,
    },
  ]

  return (
    <section id="marketplace" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Explore the Marketplace</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover verified sellers and products across Egypt, MENA, and Africa
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder={t("search_placeholder")} className="pl-12 h-14 text-lg" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-primary text-primary-foreground" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap md:ml-auto">
            {regions.map((region) => (
              <Button
                key={region.id}
                variant={selectedRegion === region.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region.id)}
                className={selectedRegion === region.id ? "bg-secondary text-secondary-foreground" : ""}
              >
                <MapPin className="h-4 w-4 mr-1" />
                {region.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <Store className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg truncate">{seller.name}</h3>
                    {seller.verified && <Badge className="bg-primary text-primary-foreground">Verified</Badge>}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{seller.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{seller.rating}</span>
                      <span className="text-muted-foreground text-sm">• {seller.products} products</span>
                    </div>

                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      View Store
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            {t("browse_sellers")}
          </Button>
        </div>
      </div>
    </section>
  )
}
