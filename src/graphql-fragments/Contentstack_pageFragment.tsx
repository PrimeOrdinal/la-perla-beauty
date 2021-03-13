import { graphql } from "gatsby"
export const Contentstack_pageFragment = graphql`
  fragment Contentstack_pageFragment on Contentstack_page {
    breadcrumb
    id
    sections {
      ...Contentstack_sectionFragment
    }
    template
    title
    url
  }
`
