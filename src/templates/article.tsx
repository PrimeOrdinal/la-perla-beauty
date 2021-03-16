import type { Contentstack_Pages, ArticleQuery } from "../../graphql-types"

import { PageProps, graphql } from "gatsby"
import React from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { Layout } from "../components/Layout"
import { PageSections } from "../components/PageSections"
import { SEO } from "../components/SEO"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const Article: React.FC<PageProps<ArticleQuery, PageContextPage>> = ({
  data,
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
    page,
  } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      {data?.contentstackArticle?.breadcrumb?.show && (
        <Breadcrumb crumbs={crumbs} />
      )}

      <PageSections sections={data?.contentstackArticle?.sections} />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($contentstackId: String!) {
    bigCommerceGQL {
      site {
        bestSellingProducts {
          edges {
            node {
              ...BigCommerceGQL_ProductFragment
            }
          }
        }
        featuredProducts {
          edges {
            node {
              ...BigCommerceGQL_ProductFragment
            }
          }
        }
      }
    }
    contentstackArticle(id: { eq: $contentstackId }) {
      ...Contentstack_articleFragment
    }
  }
`
