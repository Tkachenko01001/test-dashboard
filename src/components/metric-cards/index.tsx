import type { Metric } from "@/types/Metric"
import { MetricCard } from "./MetricCard"

type Props = {
  data: Metric[]
}

const MetricCards = ({ data }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  )
}

export { MetricCards }
