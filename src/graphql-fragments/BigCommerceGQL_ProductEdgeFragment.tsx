import { graphql } from "gatsby"

export const BigCommerceGQL_VariantEdgeFragment = graphql`
  fragment BigCommerceGQL_ProductEdgeFragment on BigCommerceGQL_ProductEdge {
    cursor
    node {
      addToCartUrl
      availabilityV2 {
        description
        status
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
      id
      inventory {
        aggregated {
          availableToSell
          warningLevel
        }
        isInStock
        hasVariantInventory
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
          ...BigCommerceGQL_VariantEdgeFragment
        }
      }
    }
  }
`
