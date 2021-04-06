import { graphql } from "gatsby"
export const Contentstack_articleFragment = graphql`
  fragment Contentstack_articleFragment on Contentstack_article {
    id
    sections {
      ...Contentstack_sectionFragment
    }
    title
    url
  }
`
