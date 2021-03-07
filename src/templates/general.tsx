import type { Contentstack_Pages, GeneralPageQuery } from "../../graphql-types"

import { PageProps, graphql } from "gatsby"
import React from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { Layout } from "../components/Layout"
import { PageSections } from "../components/PageSections"
import { SEO } from "../components/SEO"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const GeneralPage: React.FC<PageProps<GeneralPageQuery, PageContextPage>> = ({
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

      {data?.contentstackPages?.breadcrumb?.show && (
        <Breadcrumb crumbs={crumbs} />
      )}

      <PageSections pageSections={data?.contentstackPages?.page_sections} />
    </Layout>
  )
}

export default GeneralPage

export const query = graphql`
  query GeneralPage($contentstackId: String!) {
    contentstackPages(id: { eq: $contentstackId }) {
      ...Contentstack_pagesFragment
    }
  }
`
