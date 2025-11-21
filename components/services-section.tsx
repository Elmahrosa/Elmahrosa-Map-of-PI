"use client"

import { Shield, MapPin, Award, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Verified Sellers",
      description: "Every seller undergoes thorough verification including identity checks and community reviews",
    },
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "Discover sellers by location across Egypt, MENA, and Africa with real-time availability",
    },
    {
      icon: Award,
      title: "Badge System",
      description: "Earn trust badges and climb the reputation ladder from Verified to Trusted to Pioneer status",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Secure Pi payments with escrow protection and instant settlement for peace of mind",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for secure and trusted Pi transactions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
