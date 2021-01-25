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
      image {
        id
        url
        children {
          ... on ImageSharp {
            id
            fluid {
              base64
              aspectRatio
              originalImg
              originalName
              sizes
              src
              srcSet
              presentationWidth
              presentationHeight
              tracedSVG
              srcWebp
              srcSetWebp
            }
            children {
              id
            }
          }
        }
      }
    }
  }
`
