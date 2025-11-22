import { Badge } from "@/components/ui/badge"
import { getTrustBadge, getTrustColor, type TrustInputs } from "@/lib/trustScore"
import { Shield, CheckCircle, Star, Sparkles } from "lucide-react"

type SellerBadgeProps = {
  inputs: TrustInputs
  score: number
  showLabel?: boolean
}

export default function SellerBadge({ inputs, score, showLabel = true }: SellerBadgeProps) {
  const badge = getTrustBadge(score, inputs)
  const colorClass = getTrustColor(badge)

  const badgeConfig = {
    new: { icon: Shield, label: "New", variant: "secondary" as const },
    verified: { icon: CheckCircle, label: "Verified", variant: "default" as const },
    trusted: { icon: Star, label: "Trusted", variant: "default" as const },
    pro: { icon: Sparkles, label: "Pro", variant: "default" as const },
  }

  const config = badgeConfig[badge]
  const Icon = config.icon

  return (
    <Badge variant={config.variant} className={`${colorClass} flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {showLabel && <span>{config.label}</span>}
    </Badge>
  )
}
