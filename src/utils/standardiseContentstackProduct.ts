import { Product, WithContext } from "schema-dts"

export function standardiseContentstackProduct(
  product: ContentstackProduct
): Product {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    description: product?.description,
    url: product?.url,
  }

  // if (product?.images?.length) {
  //   data.image = product?.images.map(image => image)
  // }

  return data
}
