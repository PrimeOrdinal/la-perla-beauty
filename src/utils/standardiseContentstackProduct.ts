import type { Product, WithContext } from "schema-dts"

import type { Contentstack_Products } from "../../graphql-types"

export function standardiseContentstackProduct(
  product: Pick<
    Contentstack_Products,
    "title" | "id" | "url" | "product_id" | "rich_text_editor"
  >
): WithContext<Product> {
  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title as string | undefined,
    // description: product?.description,
    url: product?.url as string | undefined,
  }

  // if (product?.images?.length) {
  //   data.image = product?.images.map(image => image)
  // }

  return data
}
