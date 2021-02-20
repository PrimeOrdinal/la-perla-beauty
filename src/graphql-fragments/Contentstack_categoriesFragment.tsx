import { graphql } from "gatsby"
export const Contentstack_categoriesFragment = graphql`
  fragment Contentstack_categoriesFragment on Contentstack_categories {
    bigcommerce_id
    description
    id
    promotional_banners {
      grid_position
      promotional_banner {
        colour
        image {
          description
          title
          url
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