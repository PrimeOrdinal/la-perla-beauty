import { PageProps } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const Category: React.FC<PageProps<null, PageContextCategory>> = ({ pageContext }) => {
  const { category } = pageContext
  console.log(category)
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
