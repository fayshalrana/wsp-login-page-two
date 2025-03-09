export interface MenuItem {
  id: string
  name: string
  price: number
  inCart: boolean
  size?: string
  modifiers?: Record<string, string>
}

export interface CartItem extends MenuItem {
  quantity: number
} 