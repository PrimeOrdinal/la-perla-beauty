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
      }
      article_card_gallery {
        article_card_gallery {
          id
          text
          text_justification
          title
        }
      }
      horizontal_rule {
        colour
      }
    }
    title
  }
`