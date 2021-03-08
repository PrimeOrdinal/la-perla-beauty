import type {
  ArticlePageQuery,
  BigCommerceGql_Category,
} from "/../../graphql-types"

import { PageProps } from "gatsby"
import React from "react"

import { BlogPostPreview } from "../../components/BlogPostPreview"
import { Breadcrumb } from "../../components/Breadcrumb"
import { Layout } from "../../components/Layout"
import { Leaf } from "../../components/Leaf"
import { Link } from "../../components/Button"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

export const ArticlePage: React.FC<
  PageProps<ArticlePageQuery, PageContextCategory>
> = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <main>
        <img
          src={`https://picsum.photos/905/440?${
            Math.floor(Math.random() * 10) + 1
          }`}
          alt="placeholder image"
          className="img-bl"
        />
        <span>Featured</span>
        <h1>Never was there a greater artist than there is now</h1>
      </main>
    </Layout>
  )
}

export default ArticlePage
