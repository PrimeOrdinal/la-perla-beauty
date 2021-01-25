import type { Contentstack_Pages } from "../../graphql-types"

import { PageProps } from "gatsby"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

export const GeneralPage: React.FC<PageProps<null, PageContextPage>> = ({
  pageContext,
}) => {
  const { page } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <h1>{page?.title}</h1>
      <h2>ABABABABAB</h2>

      <section>
        <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
      </section>
      <section>
        <h1>Section</h1>
      </section>
      <section>
        <h1>Section</h1>
      </section>
      <section>
        <h1>Section</h1>
      </section>
      <section>
        <h1>Section</h1>
      </section>
    </Layout>
  )
}

export default GeneralPage
