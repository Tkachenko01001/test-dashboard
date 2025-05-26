import { Moon, Sun } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { SettingsCardHeader } from "./SettingsCardHeader"
import { useTheme } from "@/context/ThemeContext"

const ThemeSettings = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Card className="relative overflow-hidden border-0 bg-card shadow-lg">
      <SettingsCardHeader
        title="Appearance"
        description="Customize your theme preferences"
        icon={isDarkMode ? Moon : Sun}
      />
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between p-6 rounded-xl bg-muted/50 transition-all duration-300 hover:bg-muted/70">
          <div className="space-y-2">
            <Label htmlFor="theme-toggle" className="text-lg font-semibold cursor-pointer">
              Dark Mode
            </Label>
            <p className="text-base text-muted-foreground">Switch between light and dark themes</p>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              id="theme-toggle"
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary scale-125 cursor-pointer"
            />
          </div>
        </div>
      </CardContent>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl" />
    </Card>
  )
}

export { ThemeSettings }
