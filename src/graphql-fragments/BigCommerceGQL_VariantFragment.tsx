import { graphql } from "gatsby"

export const BigCommerceGQL_VariantFragment = graphql`
  fragment BigCommerceGQL_VariantFragment on BigCommerceGQL_Variant {
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
`
