import {
  Bell,
  ChefHat,
} from "lucide-react"

export const routes: Route[] = [
  {
    href: "/kitchen-display",
    icon: ChefHat,
    includeMainSidebar: true,
    includeSecondarySidebar: false,
    hasBadge: false,
  },
]

export type Route = {
  href: string
  icon: LucideIcon
  includeMainSidebar: boolean
  includeSecondarySidebar: boolean
  hasBadge: boolean
} 