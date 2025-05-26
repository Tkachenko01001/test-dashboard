import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { ThemeSettings } from "./ThemeSettings"
import { NotificationSettings } from "./NotificationSettings"
import { ProfileNotification } from "./ProfileNotification"

const SettingsForm = () => {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [displayName, setDisplayName] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Settings saved:", {
      emailNotifications,
      displayName,
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <ThemeSettings />
      <NotificationSettings emailNotifications={emailNotifications} setEmailNotifications={setEmailNotifications} />
      <ProfileNotification displayName={displayName} setDisplayName={setDisplayName} />
      <div className="flex justify-end">
        <Button
          type="submit"
          className="px-8 py-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200 cursor-pointer"
        >
          <Settings className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </form>
  )
}

export { SettingsForm }
