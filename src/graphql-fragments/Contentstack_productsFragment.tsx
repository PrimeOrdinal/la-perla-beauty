import { graphql } from "gatsby"
export const Contentstack_productsFragment = graphql`
  fragment Contentstack_productsFragment on Contentstack_products {
    accordion {
      panels {
        heading
        panel
      }
    }
    description
    description_extended
    id
    key_features {
      item {
        colour
        icon
        text
        title
      }
    }
    ingredients {
      type
      ingredient {
        id
        information
        title
        url
      }
    }
    leaf {
      orientation
      layout
      heading
      text
    }
    product_id
    title
    video {
      video {
        url
        title
      }
    }
  }
`
