import type { BigCommerceProducts } from "../../graphql-types"

// import getSymbolFromCurrency from "currency-symbol-map"
import { Product, WithContext } from "schema-dts"

export function standardiseBigCommerceProduct(
  product: BigCommerceProducts
): WithContext<Product> {
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
      // availability: product?.availability,
      // price: product?.offer?.price ? product?.offer?.price : 0,
      // priceCurrency: product?.offer?.priceCurrency,
    },
    url: product?.custom_url?.url as string | undefined
  } as WithContext<Product>

  return data
}
