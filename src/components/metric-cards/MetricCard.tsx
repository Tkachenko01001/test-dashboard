import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import type { Metric } from "@/types/Metric"
import { METRIC_ICON_MAP } from "@/constants/metric-cards"

type Props = {
  metric: Metric
}

const MetricCard = ({ metric: { id, title, value, growth, isPositive, description, type } }: Props) => {
  const Icon = METRIC_ICON_MAP[type] || AlertTriangle

  return (
    <Card
      key={id}
      className="relative overflow-hidden border-0 bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
    >
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-muted-foreground text-base font-medium">{title}</p>
            <p className="text-4xl font-bold tracking-tight text-card-foreground">{value}</p>
          </div>
          <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-primary h-8 w-8" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isPositive && (
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-lg">
                <TrendingUp className="h-5 w-5" />
                <span className="text-base font-semibold">{growth}</span>
              </div>
            )}
            {!isPositive && (
              <div className="flex items-center space-x-2 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-950/50 px-3 py-1.5 rounded-lg">
                <TrendingDown className="h-5 w-5" />
                <span className="text-base font-semibold">{growth}</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">{description}</p>
        <div className="from-primary/20 to-primary/5 absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br blur-xl group-hover:scale-125 transition-transform duration-300" />
      </CardContent>
    </Card>
  )
}

export { MetricCard }
