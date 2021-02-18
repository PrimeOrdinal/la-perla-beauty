import type { ImageObject, Product, Thing, WithContext } from "schema-dts"

import type { BigCommerceProducts, BigCommerceProductsImages } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"

export function standardiseBigCommerceProduct({
  node,
  categories,
}: {
  node: BigCommerceProducts
  categories: Array<{
    entityId: number
    name: string
    path: string
  }>
}): WithContext<Product> {
  let availability = "https://schema.org/InStock"

  if (
    node?.availability &&
    typeof node?.inventory_level === "number" &&
    typeof node?.inventory_warning_level === "number" &&
    node?.inventory_level <= node?.inventory_warning_level
  ) {
    availability = "https://schema.org/LimitedAvailability"
  }

  if (node?.inventory_level === 0) {
    availability = "https://schema.org/OutOfStock"
  }

  let category

  if (Array.isArray(node?.categories)) {
    category = node?.categories.map((categoryId) => {
      const category = categories.find((category) => category.entityId === categoryId)

      return {
        "identifier": category?.entityId,
        "name": category?.name,
        "url": category?.path
      }
    }) as Array<Thing>
  }

  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    // category: node?.categories?.[0] as string | undefined,
    category,
    depth: node?.depth as string | undefined,
    description: node?.description as string | undefined,
    gtin: node?.gtin as string | undefined,
    height: node?.height as string | undefined,
    identifier: node?.id as string | undefined,
    image: (node?.images as BigCommerceProductsImages[])
      ?.sort((a: BigCommerceProductsImages, b: BigCommerceProductsImages) => a?.sort_order as number - b?.sort_order as number)
      .map(
        image =>
          ({
            caption: image?.description,
            contentUrl: image?.url_standard,
            identifier: image?.id,
            representativeOfPage: image?.is_thumbnail,
          } as ImageObject)
      ),
    mpn: node?.mpn as string | undefined,
    name: node?.name as string | undefined,
    offers: {
      "@type": "Offer",
      availability,
      price: node?.calculated_price,
      priceCurrency: "EUR",
    },
    sku: node?.sku as string | undefined,
    upc: node?.upc as string | undefined,
    url: node?.custom_url?.url as string | undefined,
    weight: node?.weight as string | undefined,
    width: node?.width as string | undefined,
  } as WithContext<Product>

  return data
}
