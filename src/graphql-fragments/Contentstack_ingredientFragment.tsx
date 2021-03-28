import { graphql } from "gatsby"
export const Contentstack_ingredientFragment = graphql`
  fragment Contentstack_ingredientFragment on Contentstack_ingredient {
    id
    image {
      alt: description
      title
      src: url
    }
    information
    summary
    title
    url
  }
`
