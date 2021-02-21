import type {
  ImageObject,
  Product,
  ProductCollection,
  ProductGroup,
  ProductLeaf,
  Thing,
  WithContext,
} from "schema-dts"

import type {
  BigCommerceGql_Product,
  BigCommerceGql_VariantEdge,
} from "../../graphql-types"

export function standardiseBigCommerceProduct({
  productFormatBigCommerce,
}: {
  productFormatBigCommerce: BigCommerceGql_Product
}): WithContext<Product> {
  let availability = "https://schema.org/InStock"

  // if (
  //   typeof node?.inventory?.aggregated?.warningLevel === "number" &&
  //   typeof node?.inventory?.aggregated?.warningLevel === "number" &&
  //   node?.inventory_level <= node?.inventory?.aggregated?.warningLevel
  // ) {
  //   availability = "https://schema.org/LimitedAvailability"
  // }

  if (productFormatBigCommerce?.inventory?.isInStock === false) {
    availability = "https://schema.org/OutOfStock"
  }

  const data: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    category: productFormatBigCommerce?.categories?.edges?.map(
      ({ node: category }) =>
        ({
          identifier: category?.entityId,
          name: category?.name,
          url: category?.path,
        } as Thing)
    ),
    depth: productFormatBigCommerce?.depth,
    description: productFormatBigCommerce?.description,
    // gtin: productFormatBigCommerce?.gtin,
    height: productFormatBigCommerce?.height,
    identifier: productFormatBigCommerce?.entityId.toString(),
    image: productFormatBigCommerce?.images?.edges?.map(
      ({ node: image }) =>
        ({
          caption: image?.altText,
          contentUrl: image?.urlOriginal,
          representativeOfPage: image?.isDefault,
        } as ImageObject)
    ),
    // mpn: productFormatBigCommerce?.mpn,
    name: productFormatBigCommerce?.name,
    offers: {
      "@type": "Offer",
      availability,
      price: productFormatBigCommerce?.prices?.price.value,
      priceCurrency: productFormatBigCommerce?.prices?.price.currencyCode,
    },
    productID: productFormatBigCommerce?.entityId.toString(),
    sku: productFormatBigCommerce?.sku,
    // upc: productFormatBigCommerce?.upc,
    url: productFormatBigCommerce?.path,
    weight: productFormatBigCommerce?.weight,
    width: productFormatBigCommerce?.width,
  } as WithContext<Product>

  return data
}

export function standardiseBigCommerceProductGroup({
  productFormatBigCommerce,
}: {
  productFormatBigCommerce: BigCommerceGql_Product
}): WithContext<ProductGroup> {
  const data = standardiseBigCommerceProduct({
    productFormatBigCommerce,
  }) as WithContext<ProductGroup>

  const productGroupID = productFormatBigCommerce?.id

  const hasVariant: ProductLeaf[] = productFormatBigCommerce?.variants?.edges?.map(({ node }) => {
      const variantData: BigCommerceGql_Product = {
        ...data,
        ...node
      }

      const product = standardiseBigCommerceProduct({
        productFormatBigCommerce: variantData,
      })

      const size = node?.options?.edges?.flatMap(
        ({ node: option }) => option?.values?.edges?.flatMap(({ node: value }) => value?.label)
      )?.[0]

      const variesBy = node?.options?.edges?.flatMap(
        ({ node: option }) => option?.displayName
      )?.[0]

      return {
        ...product,
        size,
        variesBy
      }
    }) as ProductLeaf[]

  return {
    ...data,
    "@type": "ProductGroup",
    hasVariant,
    productGroupID,
  }
}
