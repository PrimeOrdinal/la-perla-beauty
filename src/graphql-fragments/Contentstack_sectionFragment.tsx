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
          items {
            image {
              alt: description
              title
              src: url
            }
            summary
            title
            url
          }
          text
          text_justification
          title
        }
        margins
      }
      article_card_grid {
        article_card_grid {
          id
          items {
            image {
              alt: description
              title
              src: url
            }
            summary
            title
            url
          }
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
            alt: description
            title
            src: url
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
      image_gallery {
        image_gallery {
          items {
            title
            src: url
          }
          title
        }
      }
      leaf {
        leaf {
          colour
          id
          image {
            alt: description
            title
            src: url
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
        margins
      }
      menu {
        menu {
          links {            
            icon {
              url
            }
            link {
              href
              title
            }
          }
          title
          slot
        }
        margins
      }
      product_card_alternate_gallery {
        product_card_alternate_gallery {
          colour
          items {
            title
            url
          }
          title
        }
        margins
      }
      video {
        video {
          image {
            src: url
          }
          tag
          text
          text_justification
          title
          video {
            url
          }
        }
        margins
      }
      wysiwyg {
        wysiwyg {
          id
          markup
        }
        margins
      }
      you_may_also_like {
        margins
      }
    }
    title
  }
`