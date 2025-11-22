import { Progress } from "@/components/ui/progress"
import { calculateTrustScore, getTrustBadge, type TrustInputs } from "@/lib/trustScore"
import SellerBadge from "./seller-badge"

type TrustScoreBarProps = {
  inputs: TrustInputs
}

export default function TrustScoreBar({ inputs }: TrustScoreBarProps) {
  const score = calculateTrustScore(inputs)
  const badge = getTrustBadge(score, inputs)

  const getScoreColor = (s: number) => {
    if (s >= 90) return "text-primary"
    if (s >= 75) return "text-blue-600"
    if (s >= 50) return "text-green-600"
    return "text-orange-600"
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Trust Score</span>
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
          <SellerBadge inputs={inputs} score={score} showLabel={false} />
        </div>
      </div>
      <Progress value={score} className="h-2" />
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div>
          Trades: <span className="font-medium text-foreground">{inputs.tradeVolume}</span>
        </div>
        <div>
          On-time: <span className="font-medium text-foreground">{Math.round(inputs.onTimeRate * 100)}%</span>
        </div>
        <div>
          Disputes: <span className="font-medium text-foreground">{inputs.disputes}</span>
        </div>
        <div>
          Cancellations: <span className="font-medium text-foreground">{inputs.cancellations}</span>
        </div>
      </div>
    </div>
  )
}
