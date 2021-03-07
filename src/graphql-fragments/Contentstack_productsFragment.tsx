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
    ingredients {
      type
      ingredient {
        id
        information
        title
        url
      }
    }
    key_features {
      item {
        colour
        icon
        text
        title
      }
    }
    leaf {
      orientation
      layout
      heading
      text
    }
    page_sections {
      ...Contentstack_page_sectionsFragment
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
