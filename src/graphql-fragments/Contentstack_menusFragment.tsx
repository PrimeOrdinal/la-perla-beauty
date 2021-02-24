import { graphql } from "gatsby"
export const Contentstack_menusFragment = graphql`
  fragment Contentstack_menusFragment on Contentstack_menus {
    id
    links {
      icon {
        description
        id
        title
        url
      }
      sub_menus {
        id
        images {
          url {
            href
            title
          }
          image {
            url
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
          sub_menus {
            id
            links {
              icon {
                description
                id
                title
                url
              }
              text
              url {
                href
                title
              }
            }
            slot
            title
          }
          text
          url {
            href
            title
          }
        }
        slot
        title
      }
      text
      url {
        href
        title
      }
    }
    slot
    title
  }
`
