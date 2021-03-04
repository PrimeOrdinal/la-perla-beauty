import { graphql } from "gatsby"
export const Contentstack_pagesFragment = graphql`
  fragment Contentstack_pagesFragment on Contentstack_pages {
    id
    template
    title
    url
    page_section {
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
      modular_blocks {
        introduction {
          heading
          link {
            href
            title
          }
          paragraph
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
        leaf {
          heading
          layout
          link {
            href
            title
          }
          orientation
          text
        }
        menu {
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
      }
      id
      title
      uid
    }
  }
`
