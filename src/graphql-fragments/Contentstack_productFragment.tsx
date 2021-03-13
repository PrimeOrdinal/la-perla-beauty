import { graphql } from "gatsby"
export const Contentstack_productFragment = graphql`
  fragment Contentstack_productFragment on Contentstack_product {
    accordion {
      items {
        panel
        title
      }
    }
    description
    description_extended
    icons {
      title
      orientation
      mobile_view
      items {
        colour
        icon
        text
        title
      }
    }
    id
    ingredients {
      ingredient {
        image {
          url
        }
        information
        summary
        title
        url
      }
    }
    leaf {
      colour
      image {
        url
      }
      justify
      layout
      link {
        href
        title
      }
      text
      title
    }
    product_id
    sections {
      ...Contentstack_sectionFragment
    }
    title
    video {
      image {
        url
      }
      tag
      text
      text_justification
      title
      video {
        url
      }
    }
  }
`
