import { User } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import type { SetStateAction } from "react"
import { SettingsCardHeader } from "./SettingsCardHeader"

type Props = {
  displayName: string
  setDisplayName: React.Dispatch<SetStateAction<string>>
}

const ProfileNotification = ({ displayName, setDisplayName }: Props) => {
  return (
    <Card className="relative overflow-hidden border-0 bg-card shadow-lg">
      <SettingsCardHeader title="Profile" description="Update your personal information" icon={User} />
      <CardContent className="space-y-6">
        <div className="space-y-4 p-6 rounded-xl bg-muted/50 transition-all duration-300 hover:bg-muted/70">
          <Label htmlFor="display-name" className="text-lg font-semibold">
            Display Name
          </Label>
          <Input
            id="display-name"
            type="text"
            placeholder="Enter your display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="bg-background border-border transition-all duration-200 focus:ring-2 focus:ring-ring focus:border-primary h-12 text-base"
          />
          <p className="text-base text-muted-foreground">This name will be displayed across the application</p>
        </div>
      </CardContent>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
    </Card>
  )
}

export { ProfileNotification }