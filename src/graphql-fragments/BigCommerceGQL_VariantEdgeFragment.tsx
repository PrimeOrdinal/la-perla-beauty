import { graphql } from "gatsby"

export const BigCommerceGQL_VariantEdgeFragment = graphql`
  fragment BigCommerceGQL_VariantEdgeFragment on BigCommerceGQL_VariantEdge {
    cursor
    node {
      defaultImage {
        ...BigCommerceGQL_ImageFragment
      }
      entityId
      id
      inventory {
        aggregated {
          availableToSell
          warningLevel
        }
        isInStock
      }
      prices {
        basePrice {
          ...BigCommerceGQL_MoneyFragment
        }
        price {
          ...BigCommerceGQL_MoneyFragment
        }
        retailPrice {
          ...BigCommerceGQL_MoneyFragment
        }
        salePrice {
          ...BigCommerceGQL_MoneyFragment
        }
      }
      sku
    }
  }
`
