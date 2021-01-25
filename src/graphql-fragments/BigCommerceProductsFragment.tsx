import { graphql } from "gatsby"
export const BigCommerceProductsFragment = graphql`
  fragment BigCommerceProductsFragment on BigCommerceProducts {
    availability
    calculated_price
    categories
    custom_url {
      url
    }
    depth
    description
    fixed_cost_shipping_price
    gtin
    height
    id
    inventory_level
    inventory_warning_level
    is_featured
    is_free_shipping
    is_preorder_only
    is_price_hidden
    is_visible
    mpn
    name
    order_quantity_maximum
    preorder_message
    price
    price_hidden_label
    sale_price
    sku
    upc
    weight
    width
  }
`
