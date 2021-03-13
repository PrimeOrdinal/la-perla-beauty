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
      banner {
        banner {
          backround_position
          colour
          id
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
          tag
          text
          text_justification
          title
        }
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
      leaf {
        leaf {
          colour
          id
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
          justify
          text
          title
        }
      }
      wysiwyg {
        wysiwyg {
          id
          markup
        }
      }
    }
    title
  }
`