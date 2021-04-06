import { graphql } from "gatsby"
export const Contentstack_categoryFragment = graphql`
  fragment Contentstack_categoryFragment on Contentstack_category {
    bigcommerce_id
    description
    id
    banners {
      grid_position
      banner {
        colour
        image {
          alt: description
          title
          src: url
        }
        layout
        link {
          href
          title
        }
        text
        title
      }
    }
    title
    url
  }
`