import type { Product, ProductGroup, WithContext } from "schema-dts"

import type {
  BigCommerceGql_CategoryEdge,
  BigCommerceGql_ImageEdge,
  BigCommerceGql_OptionEdge,
  BigCommerceGql_OptionValueEdge,
  BigCommerceGql_Product,
  BigCommerceGql_Variant,
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
    category: (productFormatBigCommerce?.categories
      ?.edges as BigCommerceGql_CategoryEdge[])?.map(({ node: category }) => ({
      "@type": "Thing",
      identifier: category?.entityId?.toString() as string | undefined,
      name: category?.name,
      url: category?.path,
    })),
    depth: productFormatBigCommerce?.depth,
    description: productFormatBigCommerce?.description,
    // gtin: productFormatBigCommerce?.gtin,
    height: productFormatBigCommerce?.height,
    identifier: productFormatBigCommerce?.entityId.toString(),
    image: (productFormatBigCommerce?.images
      ?.edges as BigCommerceGql_ImageEdge[])?.map(({ node: image }) => ({
      "@type": "ImageObject",
      caption: image?.altText,
      contentUrl: image?.urlOriginal,
      representativeOfPage: image?.isDefault,
    })),
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

export function standardiseBigCommerceVariant({
  productFormatBigCommerce,
  variantFormatBigCommerce,
}: {
  productFormatBigCommerce: BigCommerceGql_Product
  variantFormatBigCommerce: BigCommerceGql_Variant
}): WithContext<Product> {
  const product = standardiseBigCommerceProduct({
    productFormatBigCommerce,
  }) as WithContext<ProductGroup>

  let availability = "https://schema.org/InStock"

  if (variantFormatBigCommerce?.inventory?.isInStock === false) {
    availability = "https://schema.org/OutOfStock"
  }

  const variant: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    category: (productFormatBigCommerce?.categories
      ?.edges as BigCommerceGql_CategoryEdge[])?.map(({ node: category }) => ({
      "@type": "Thing",
      identifier: category?.entityId as number | undefined,
      name: category?.name,
      url: category?.path,
    })),
    depth: productFormatBigCommerce?.depth,
    description: productFormatBigCommerce?.description,
    // gtin: productFormatBigCommerce?.gtin,
    height: productFormatBigCommerce?.height,
    identifier: productFormatBigCommerce?.entityId.toString(),
    image: (productFormatBigCommerce?.images
      ?.edges as BigCommerceGql_ImageEdge[])?.map(({ node: image }) => ({
      "@type": "ImageObject",
      caption: image?.altText,
      contentUrl: image?.urlOriginal,
      representativeOfPage: image?.isDefault,
    })),
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

  return { ...product, ...variant }
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

  const hasVariant: Product[] = (productFormatBigCommerce?.variants
    ?.edges as BigCommerceGql_VariantEdge[])?.map(({ node }) => {
    const product = standardiseBigCommerceVariant({
      productFormatBigCommerce,
      variantFormatBigCommerce: node,
    })

    const size = (node?.options
      ?.edges as BigCommerceGql_OptionEdge[])?.flatMap(({ node: option }) =>
      (option?.values?.edges as BigCommerceGql_OptionValueEdge[])?.flatMap(
        ({ node: value }) => value?.label
      )
    )?.[0]

    const variesBy = (node?.options
      ?.edges as BigCommerceGql_OptionEdge[])?.flatMap(
      ({ node: option }) => option?.displayName
    )?.[0]

    return {
      ...product,
      size,
      variesBy,
    }
  }) as Product[]

  return {
    ...data,
    "@type": "ProductGroup",
    hasVariant,
    productGroupID,
  }
}
