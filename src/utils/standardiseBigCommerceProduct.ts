import type { BigCommerceProducts } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"
import { Product, WithContext } from "schema-dts"

export function standardiseBigCommerceProduct(
  // product: Pick<
  //   BigCommerceProducts,
  //   | "availability"
  //   | "calculated_price"
  //   | "categories"
  //   | "depth"
  //   | "description"
  //   | "fixed_cost_shipping_price"
  //   | "gtin"
  //   | "height"
  //   | "id"
  //   | "inventory_level"
  //   | "inventory_warning_level"
  //   | "is_featured"
  //   | "is_free_shipping"
  //   | "is_preorder_only"
  //   | "is_price_hidden"
  //   | "is_visible"
  //   | "mpn"
  //   | "order_quantity_maximum"
  //   | "order_quantity_minimum"
  //   | "preorder_message"
  //   | "price"
  //   | "price_hidden_label"
  //   | "sale_price"
  //   | "sku"
  //   | "upc"
  //   | "weight"
  //   | "width"
  // >
  product: BigCommerceProducts
): Product {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.name as string | undefined,
    description: product?.description as string | undefined,
    url: product?.custom_url?.url as string | undefined,
    offers: {
      "@type": "Offer",
      // availability: product?.availability,
      // price: product?.offer?.price ? product?.offer?.price : 0,
      // priceCurrency: product?.offer?.priceCurrency,
    },
  }

  // if (product?.images?.length) {
  //   data.image = product?.images.map(image => image)
  // }

  return data
}
