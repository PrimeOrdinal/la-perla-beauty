import type { Contentstack_Pages, ArticleQuery } from "../../graphql-types"

import { PageProps, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

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

      <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
          },
          "headline": "Article headline",
          "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
          ],
          "datePublished": "2015-02-05T08:00:00+08:00",
          "dateModified": "2015-02-05T09:20:00+08:00",
          "author": {
            "@type": "Person",
            "name": "John Doe"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Google",
            "logo": {
              "@type": "ImageObject",
              "url": "https://google.com/logo.jpg"
            }
          }
        })}
        </script>
      </Helmet>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query Article($contentstackId: String!) {
    contentstackArticle(id: { eq: $contentstackId }) {
      ...Contentstack_articleFragment
    }
  }
`
