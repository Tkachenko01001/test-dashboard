import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <Loader2 className="text-primary h-8 w-8 animate-spin" />
    </div>
  )
}

export { Loader }
