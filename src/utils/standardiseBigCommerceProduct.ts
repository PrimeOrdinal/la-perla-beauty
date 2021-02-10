import type { Product, WithContext } from "schema-dts"

import type { BigCommerceProducts } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"

export function standardiseBigCommerceProduct(
  product: BigCommerceProducts
): WithContext<Product> {
  
  let availability = "https://schema.org/InStock"

  if (product?.availability && (product?.inventory_level <= product?.inventory_warning_level)) {
    availability = "https://schema.org/LimitedAvailability"
  }
  
  if (product?.inventory_level === 0) {
    availability = "https://schema.org/OutOfStock"
  }

  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.name as string | undefined,
    description: product?.description as string | undefined,
    images: product?.images?.sort((a, b) => a?.sort_order - b?.sort_order)
    .map((image) => ({
      caption: image?.description,
      contentUrl: image?.url_standard,
      identifier: image?.id,
      representativeOfPage: image?.is_thumbnail,
    })),
    offers: {
      "@type": "Offer",
      availability,
      price: product?.calculated_price,
      priceCurrency: "EUR",
    },
    url: product?.custom_url?.url as string | undefined
  } as WithContext<Product>

  return data
}
