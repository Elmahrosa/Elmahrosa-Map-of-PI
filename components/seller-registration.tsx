"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Store, MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function SellerRegistration() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    businessName: "",
    location: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration data:", formData)
  }

  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Start Selling with Pi Today</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Free registration. No hidden fees. Join 10,000+ sellers across Egypt, MENA & Africa
            </p>
          </div>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-base">
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4" />
                      Business Name
                    </div>
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-base">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </div>
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </div>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+20 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </div>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14"
                >
                  {t("register_now")}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By registering, you agree to our terms of service and privacy policy
              </p>
            </form>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">Free</div>
              <p className="text-muted-foreground">No registration fees</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">Instant</div>
              <p className="text-muted-foreground">Start selling immediately</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
