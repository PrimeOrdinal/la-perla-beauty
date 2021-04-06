import { graphql } from "gatsby"

export const BigCommerceGQL_ProductFragment = graphql`
  fragment BigCommerceGQL_ProductFragment on BigCommerceGQL_Product {
    addToCartUrl
    availabilityV2 {
      description
      status
    }
    brand {
      name
    }
    categories {
      edges {
        cursor
        node {
          id
          name
          path
        }
      }
    }
    defaultImage {
      ...BigCommerceGQL_ImageFragment
    }
    description
    entityId
    gtin
    id
    images {
      edges {
        node {
          altText
          isDefault
          urlOriginal
        }
      }
    }
    inventory {
      aggregated {
        availableToSell
        warningLevel
      }
      hasVariantInventory
      isInStock
    }
    name
    options {
      edges {
        node {
          displayName
          entityId
          isRequired
          values {
            edges {
              cursor
              node {
                entityId
                label
              }
            }
          }
        }
      }
    }
    path
    plainTextDescription
    prices(includeTax: true) {
      basePrice {
        ...BigCommerceGQL_MoneyFragment
      }
      price {
        ...BigCommerceGQL_MoneyFragment
      }
      salePrice {
        ...BigCommerceGQL_MoneyFragment
      }
      retailPrice {
        ...BigCommerceGQL_MoneyFragment
      }
    }
    productOptions {
      edges {
        node {
          displayName
          entityId
          isRequired
        }
      }
    }
    sku
    type
    variants {
      edges {
        node {
          ...BigCommerceGQL_VariantFragment
        }
      }
    }
  }
`
