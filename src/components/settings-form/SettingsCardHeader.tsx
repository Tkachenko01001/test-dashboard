import type { LucideProps } from 'lucide-react'
import { CardHeader, CardTitle } from '../ui/card'

type Props = {
  title: string
  description: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

const SettingsCardHeader = ({ title, description, ...props }: Props) => {
  return (
    <CardHeader className="pb-6">
      <div className="flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
          <props.icon className="h-7 w-7 text-primary" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold text-card-foreground">{title}</CardTitle>
          <p className="text-base text-muted-foreground">{description}</p>
        </div>
      </div>
    </CardHeader>
  )
}

export { SettingsCardHeader }
