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
      mobileView: mobile_view
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
        ...Contentstack_ingredientFragment
      }
    }
    leaf {
      colour
      image {
        alt: description
        title
        src: url
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
      ...Contentstack_video_componentFragment
    }
  }
`
