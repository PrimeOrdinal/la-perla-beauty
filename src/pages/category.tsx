import { PageProps } from "gatsby"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: Category
}

export const Category: React.FC<PageProps<null, PageContextCategory>> = ({
  pageContext,
}) => {
  const { category } = pageContext

  return (
    <Layout>
      <SEO title={`Category page for ${category?.title}`} />
      <div>
        Name: {category?.title}
        Description: {category?.description}
      </div>
    </Layout>
  )
}

export default Category
