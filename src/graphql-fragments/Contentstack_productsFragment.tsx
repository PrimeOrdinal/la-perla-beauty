import { graphql } from "gatsby"
export const Contentstack_productsFragment = graphql`
  fragment Contentstack_productsFragment on Contentstack_products {
    application
    description
    description_extended
    id
    key_ingredients {
      type
      ingredient {
        id
        information
        title
        url
      }
    }
    perfumer_notes
    product_id
    title
  }
`
