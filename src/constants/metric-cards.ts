import { Activity, DollarSign, Users } from 'lucide-react'

export const METRIC_CARDS = [
  {
    id: '1',
    title: 'Total Users',
    value: '12,345',
    growth: '+8.2%',
    type: 'users',
    description: 'Compared to last month',
    isPositive: true,
  },
  {
    id: '2',
    title: 'Revenue',
    value: '$23,400',
    growth: '+3.5%',
    type: 'sales',
    description: 'Monthly recurring revenue',
    isPositive: true,
  },
  {
    id: '3',
    title: 'Active Sessions',
    value: '1,256',
    growth: '-2.1%',
    type: 'activity',
    description: 'In the last 24 hours',
    isPositive: false,
  },
]

export const METRIC_ICON_MAP: Record<string, React.ElementType> = {
  users: Users,
  sales: DollarSign,
  activity: Activity,
}
