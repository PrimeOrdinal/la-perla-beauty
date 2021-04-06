export interface BagItem {}

export interface Bag {
  id?: string
  customer_id?: number
  channel_id?: number
  email?: string
  currency?: { code?: string }
  tax_included?: boolean
  base_amount?: number
  discount_amount?: number
  cart_amount?: number
  coupons?: []
  line_items?: {
    physical_items?: BagItem[]
    digital_items?: []
    gift_certificates?: []
    custom_items?: []
  }
  created_time?: string
  updated_time?: string
  locale?: string
  redirect_urls?: {
    cart_url?: string
    checkout_url?: string
    embedded_checkout_url?: string
  }
}
