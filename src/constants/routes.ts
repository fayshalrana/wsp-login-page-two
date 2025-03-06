import { LucideIcon, ChefHat } from "lucide-react"

export type Route = {
  href: string
  icon: LucideIcon
  includeMainSidebar: boolean
  includeSecondarySidebar: boolean
  hasBadge: boolean
}

export const routes: Route[] = [
  {
    href: "/kitchen-display",
    icon: ChefHat,
    includeMainSidebar: true,
    includeSecondarySidebar: false,
    hasBadge: false,
  },
] 