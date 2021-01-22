import type { BigCommerceCategories } from "../../graphql-types"

import { PageProps } from "gatsby"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceCategories
}

export const CategoryPage: React.FC<PageProps<null, PageContextCategory>> = ({
  pageContext,
}) => {
  const { category } = pageContext

  return (
    <Layout>
      <SEO title={`Category page for ${category?.name}`} />
      <div>
        Name: {category?.name}
        Description: {category?.description}
      </div>
    </Layout>
  )
}

export default CategoryPage
