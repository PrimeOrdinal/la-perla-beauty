type Category = {
  description: string
  id: string
  price: number
  title: string
}
type BigCommerceProduct = {
  availability: string
  calculated_price: number
  categories: string[]
  custom_url: {
    url: string
  }
  depth: number
  description: string
  fixed_cost_shipping_price: number
  gtin: number
  height: number
  id: string
  inventory_level: number
  inventory_warning_level: number
  is_featured: boolean
  is_free_shipping: boolean
  is_preorder_only: boolean
  is_price_hidden: boolean
  is_visible: boolean
  mpn: number
  order_quantity_maximum: number
  order_quantity_minimum: number
  preorder_message: string
  price: number
  price_hidden_label: string
  sale_price: number
  sku: string
  title: string
  upc: string
  weight: number
  width: number
}

type ContentstackProduct = {
  availability: string
  calculated_price: number
  categories: string[]
  depth: number
  description: string
  fixed_cost_shipping_price: number
  gtin: number
  height: number
  id: string
  inventory_level: number
  inventory_warning_level: number
  is_featured: boolean
  is_free_shipping: boolean
  is_preorder_only: boolean
  is_price_hidden: boolean
  is_visible: boolean
  mpn: number
  order_quantity_maximum: number
  order_quantity_minimum: number
  preorder_message: string
  price: number
  price_hidden_label: string
  sale_price: number
  sku: string
  title: string
  upc: string
  url: string
  weight: number
  width: number
}