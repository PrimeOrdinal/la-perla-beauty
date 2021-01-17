// import getSymbolFromCurrency from "currency-symbol-map"
import { Product, WithContext } from "schema-dts"

export function standardiseBigCommerceProduct(
  product: BigCommerceProduct
): Product {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    description: product?.description,
    url: product?.custom_url?.url,
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
