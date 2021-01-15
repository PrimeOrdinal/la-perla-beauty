import { Product, WithContext } from "schema-dts"

export function createProductStructuredProductJSON(
  product: ProductCustom
): Product {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    description: product?.description,
    url: product?.url,
    offers: {
      "@type": "Offer",
      // priceCurrency: product?.,
      price: product?.price ? product?.price : 0,
      // availability: product?.availability,
      seller: {
        "@type": "Organization",
        name: "TopMotoPro",
      },
    },
  }

  // if (product?.images?.length) {
  //   data.image = product?.images.map(image => image)
  // }

  return data
}
