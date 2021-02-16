import type {
  Contentstack_Pages,
  IndexPageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const IndexPage: React.FC<PageProps<IndexPageQuery, PageContextPage>> = ({
  // data,
  // location,
  pageContext,
  // path
}) => {
  const { page } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <div className={clsx("container")}>
        
        <header>
          <h1>La Perla Beauty</h1>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, dot. Nullam
            ac eleifend turpis.
          </span>

          <br />

          <br />

          <br />

          <br />

          <br />

        </header>

      </div>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allBigCommerceCategories {
      edges {
        node {
          bigcommerce_id
          custom_url {
            url
          }
          description
          id
          is_visible
          name
          page_title
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          ...BigCommerceProductsFragment
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id
          product_id
          rich_text_editor
          title
          url
        }
      }
    }
  }
`
