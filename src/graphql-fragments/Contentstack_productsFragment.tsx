import { graphql } from "gatsby"
export const Contentstack_productsFragment = graphql`
  fragment Contentstack_productsFragment on Contentstack_products {
    id
    product_id
    rich_text_editor
    tags
    title
    url
  }
`
