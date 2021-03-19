import { graphql } from "gatsby"
export const Contentstack_menu_componentFragment = graphql`
  fragment Contentstack_menu_componentFragment on Contentstack_menu_component {
    id
    links {
      icon {
        description
        id
        title
        url
      }
      link {
        href
        title
      }
      sub_menus {
        id
        images {
          image {
            title
            url
          }
          link {
            href
            title
          }
        }
        links {
          icon {
            description
            id
            title
            url
          }
          link {
            href
            title
          }
          sub_menus {
            id
            links {
              icon {
                description
                id
                title
                url
              }
              link {
                href
                title
              }
            }
            slot
            title
          }
        }
        slot
        title
      }
    }
    slot
    title
  }
`
