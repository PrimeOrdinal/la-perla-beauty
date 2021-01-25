import type { BigCommerceProducts } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"
import { Product, WithContext } from "schema-dts"

import { product as productPath } from "../utils/paths"
import { stripSlashes } from "../utils/stripSlashes"

export function standardiseBigCommerceProduct(
  product: BigCommerceProducts
): Product {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.name as string | undefined,
    description: product?.description as string | undefined,
    offers: {
      "@type": "Offer",
      // availability: product?.availability,
      // price: product?.offer?.price ? product?.offer?.price : 0,
      // priceCurrency: product?.offer?.priceCurrency,
    },
  }

  data.url = product?.custom_url?.url
    ? stripSlashes(`${productPath}/${product?.custom_url?.url}`)
    : undefined

  // if (product?.images?.length) {
  //   data.image = product?.images.map(image => image)
  // }

  return data
}
