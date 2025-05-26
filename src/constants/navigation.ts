import { BarChart3, Settings, Users } from 'lucide-react'
import { APP_ROUTES } from './routes'

export const NAVIGATION = [
  { name: 'Overview', href: APP_ROUTES.OVERVIEW, icon: BarChart3 },
  { name: 'Users', href: APP_ROUTES.USERS, icon: Users },
  { name: 'Settings', href: APP_ROUTES.SETTINGS, icon: Settings },
]
