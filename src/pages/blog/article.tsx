import type {
  ArticlePageQuery,
  Contentstack_Article,
} from "/../../graphql-types"

import { PageProps } from "gatsby"
import React from "react"

import { Breadcrumb } from "../../components/Breadcrumb"
import { Layout } from "../../components/Layout"

type PageContextArticle = PageContextTypeBreadcrumb & {
  article: Contentstack_Article
}

export const ArticlePage: React.FC<
  PageProps<ArticlePageQuery, PageContextArticle>
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
