import { graphql } from "gatsby"

export const BigCommerceGQL_MoneyFragment = graphql`
  fragment BigCommerceGQL_MoneyFragment on BigCommerceGQL_Money {
    currencyCode
    value
  }
`
