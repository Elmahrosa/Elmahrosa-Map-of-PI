"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Shield, Clock } from "lucide-react"
import { useEffect, useState } from "react"

type Metrics = {
  totalVolume: number
  activeUsers: number
  verifiedSellers: number
  avgDisputeTime: number
}

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState<Metrics>({
    totalVolume: 0,
    activeUsers: 0,
    verifiedSellers: 0,
    avgDisputeTime: 0,
  })

  useEffect(() => {
    // Mock data - replace with actual API call
    setMetrics({
      totalVolume: 125000,
      activeUsers: 3420,
      verifiedSellers: 856,
      avgDisputeTime: 18,
    })
  }, [])

  const stats = [
    {
      title: "Total Volume",
      value: `${(metrics.totalVolume / 1000).toFixed(1)}K π`,
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      title: "Active Users",
      value: metrics.activeUsers.toLocaleString(),
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Verified Sellers",
      value: metrics.verifiedSellers.toLocaleString(),
      icon: Shield,
      color: "text-green-600",
    },
    {
      title: "Avg Dispute Time",
      value: `${metrics.avgDisputeTime}h`,
      icon: Clock,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
