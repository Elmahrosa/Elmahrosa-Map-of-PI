"use client"

import { Users, TrendingUp, Globe2, Sparkles } from "lucide-react"

export function AudienceSection() {
  const audiences = [
    {
      icon: Users,
      title: "For Buyers",
      description: "Discover verified Pi sellers in your region",
      features: ["Browse Products", "Secure Payments", "Real-time Tracking"],
    },
    {
      icon: TrendingUp,
      title: "For Sellers",
      description: "Grow your business on Pi Network",
      features: ["Free Registration", "Badge System", "Analytics Dashboard"],
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Connect across Egypt, MENA & Africa",
      features: ["27 Countries", "Multilingual", "Local Support"],
    },
    {
      icon: Sparkles,
      title: "Community Driven",
      description: "Built by pioneers, for pioneers",
      features: ["Verified Reviews", "Trust Scores", "Reputation System"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connecting the Pi Network community across three continents
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">{audience.description}</p>
              <ul className="space-y-2">
                {audience.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-verified" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
