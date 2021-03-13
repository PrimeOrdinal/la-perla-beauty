import { graphql } from "gatsby"
export const Contentstack_sectionFragment = graphql`
  fragment Contentstack_sectionFragment on Contentstack_section {
    background_attachment
    background_colour
    background_position
    background_repeat
    background_size
    container
    id
    modular_blocks {
      accordion {
        accordion {
          id
          items {
            panel
            title
          }
          title
        }
        margins
      }
      article_card_gallery {
        article_card_gallery {
          id
          text
          text_justification
          title
        }
        margins
      }
      horizontal_rule {
        colour
        margins
      }
      icon_list {
        icon_list {
          id
          items {
            colour
            icon
            text
            title
          }
          mobile_view
          orientation
          title
        }
        margins
      }
    }
    title
  }
`