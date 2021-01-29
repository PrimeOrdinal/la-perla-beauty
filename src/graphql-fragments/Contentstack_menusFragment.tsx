import { graphql } from "gatsby"
export const Contentstack_menusFragment = graphql`
  fragment Contentstack_menusFragment on Contentstack_menus {
    id
    title
    slot
    links {
      text
      url {
        href
        title
      }
      icon {
        title
        url
      }
    }
  }
`
console.log(Contentstack_menusFragment, "#########")
