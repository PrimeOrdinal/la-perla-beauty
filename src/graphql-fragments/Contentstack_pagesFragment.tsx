import { graphql } from "gatsby"
export const Contentstack_pagesFragment = graphql`
  fragment Contentstack_pagesFragment on Contentstack_pages {
    breadcrumb {
      show
    }
    id
    page_sections {
      ...Contentstack_page_sectionsFragment
    }
    template
    title
    url
  }
`
