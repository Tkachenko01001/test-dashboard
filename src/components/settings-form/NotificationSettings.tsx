import type React from "react"
import { Bell } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import type { SetStateAction } from "react"
import { SettingsCardHeader } from "./SettingsCardHeader"

type Props = {
  emailNotifications: boolean
  setEmailNotifications: React.Dispatch<SetStateAction<boolean>>
}

const NotificationSettings = ({ emailNotifications, setEmailNotifications }: Props) => {
  return (
    <Card className="relative overflow-hidden border-0 bg-card shadow-lg">
      <SettingsCardHeader title="Notifications" description="Manage your notification preferences" icon={Bell} />
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4 p-6 rounded-xl bg-muted/50 transition-all duration-300 hover:bg-muted/70">
          <Checkbox
            id="email-notifications"
            checked={emailNotifications}
            onCheckedChange={() => setEmailNotifications((prev) => !prev)}
            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary w-6 h-6 cursor-pointer"
          />
          <div className="space-y-2 flex-1">
            <Label htmlFor="email-notifications" className="text-lg font-semibold cursor-pointer">
              Email Notifications
            </Label>
            <p className="text-base text-muted-foreground">Receive email updates about your account activity</p>
          </div>
        </div>
      </CardContent>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
    </Card>
  )
}

export { NotificationSettings }
