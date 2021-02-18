import type { Product, WithContext } from "schema-dts"

import type { BigCommerceProducts } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"

export function standardiseBigCommerceProduct(
  product: BigCommerceProducts
): WithContext<Product> {
  
  let availability = "https://schema.org/InStock"

  if (product?.availability && (typeof product?.inventory_level === "number") && (typeof product?.inventory_warning_level === "number") && (product?.inventory_level <= product?.inventory_warning_level)) {
    availability = "https://schema.org/LimitedAvailability"
  }
  
  if (product?.inventory_level === 0) {
    availability = "https://schema.org/OutOfStock"
  }

  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    category: product?.categories?.[0] as string | undefined,
    depth: product?.depth as string | undefined,
    description: product?.description as string | undefined,
    gtin: product?.gtin as string | undefined,
    height: product?.height as string | undefined,
    identifier: product?.id as string | undefined,
    image: product?.images?.sort((a, b) => a?.sort_order - b?.sort_order)
    .map((image) => ({
      caption: image?.description,
      contentUrl: image?.url_standard,
      identifier: image?.id,
      representativeOfPage: image?.is_thumbnail,
    })),
    mpn: product?.mpn as string | undefined,
    name: product?.name as string | undefined,
    offers: {
      "@type": "Offer",
      availability,
      price: product?.calculated_price,
      priceCurrency: "EUR",
    },
    sku: product?.sku as string | undefined,
    upc: product?.upc as string | undefined,
    url: product?.custom_url?.url as string | undefined,
    weight: product?.weight as string | undefined,
    width: product?.width as string | undefined,
  } as WithContext<Product>

  return data
}
