import { graphql } from "gatsby"
export const Contentstack_page_sectionsFragment = graphql`
  fragment Contentstack_page_sectionsFragment on Contentstack_page_sections {
    background_image {
      attachment
      colour {
        colour_picker
        transparent
      }
      file {
        title
        url
      }
      position {
        custom_position
        horizontal_position
        vertical_position
      }
      repeat {
        horizontal_repetition_behaviour
        vertical_repetition_behaviour
      }
      size {
        custom_size
        preset
      }
    }
    container
    modular_blocks {
      accordion {
        panels {
          heading
          panel
        }
      }
      article_card {
        title_secondary
        title_primary
        paragraph
        title
        link {
          href
          title
        }
      }
      horizontal_rule {
        colour
        margins {
          bottom
          left
          right
          top
        }
      }
      icon_list {
        item {
          colour
          icon
          text
          title
        }
        margins {
          bottom
          left
          right
          top
        }
      }
      image {
        image {
          title
          url
        }
      }
      image_with_overlay {
        image {
          title
          url
        }
        link {
          href
          title
        }
        paragraph
        title_primary
        title_secondary
      }
      introduction {
        heading {
          semantic_level
          text
        }
        link {
          href
          title
        }
        paragraph
      }
      leaf {
        colour
        heading
        image {
          title
          url
        }
        layout
        link {
          href
          title
        }
        orientation
        text
      }
      menu {
        justify_content
        menu {
          links {
            attributes {
              href
              title
            }
            text
          }
          title
        }
      }
      paragraph {
        paragraph
      }
      quotation {
        quotation
      }
      video {
        poster {
          url
        }
        video {
          url
        }
      }
    }
    id
    title
    uid
  }
`