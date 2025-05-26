import { MetricCards } from '@/components/metric-cards'
import { METRIC_CARDS } from '@/constants/metric-cards'

const Overview = () => {
  return <MetricCards data={METRIC_CARDS} />
}

export { Overview }
