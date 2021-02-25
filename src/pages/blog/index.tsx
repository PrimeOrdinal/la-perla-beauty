import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../../theme"

import type { BigCommerceGql_Category } from "/../../graphql-types"
import { PageProps } from "gatsby"

import { Breadcrumb } from "../../components/Breadcrumb"
import { BlogPostPreview } from "../../components/BlogPostPreview"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const BlogLandingPage: React.FC<PageProps<PageContextCategory>> = ({
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <div className="container">
      <h1>hey there</h1>
      <Breadcrumb crumbs={crumbs} />
      <BlogPostPreview headingAbove body />
    </div>
  )
}

export default BlogLandingPage
