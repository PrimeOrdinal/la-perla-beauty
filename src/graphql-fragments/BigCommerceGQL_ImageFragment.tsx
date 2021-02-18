import { graphql } from "gatsby"

export const BigCommerceGQL_MoneyFragment = graphql`
  fragment BigCommerceGQL_ImageFragment on BigCommerceGQL_Image {
    altText
    isDefault
    urlOriginal
  }
`
