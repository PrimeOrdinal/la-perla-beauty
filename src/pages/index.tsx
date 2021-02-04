import type {
  BigCommerceProducts,
  Contentstack_Pages,
  IndexPageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"

import { CategoryHeader } from "../components/CategoryHeader"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"
import { Tabs } from "../components/Tabs"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

// import { signIn as signInPath } from "../utils/paths"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const IndexPage: React.FC<PageProps<IndexPageQuery, PageContextPage>> = ({
  data,
  // location,
  pageContext,
  // path
}) => {
  const { page } = pageContext

  return (
    <Layout>
      <div className={clsx("container")}>
        <SEO title={page?.title} />

        <CategoryHeader>
          <h1>All beauty</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, dot. Nullam
            ac eleifend turpis.
          </span>
        </CategoryHeader>
      </div>

      <Tabs marginBottom={{ _: 4, sm: 2, md: 4, lg: 8 }}>
        <a href="/products">All</a>
        <a href="/fragrances">Fragrances</a>
        <a href="/makeup">Makeup</a>
        <a href="/body">Body</a>
      </Tabs>

      <CategoryHeader className={clsx("container")}>
        <h1>All beauty</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, dot. Nullam
          ac eleifend turpis.
        </span>
      </CategoryHeader>

      <section className={clsx("container", "BigCommerce")}>
        <Listing
          edges={data.allBigCommerceProducts.edges.map(({ node }) => ({
            node: standardiseBigCommerceProduct(
              (node as unknown) as BigCommerceProducts
            ),
          }))}
        />
      </section>

      <section className={clsx("container", "Contentstack")}>
        {data.allContentstackProducts && (
          <Listing
            edges={data.allContentstackProducts.edges.map(({ node }) => ({
              node: standardiseContentstackProduct(node),
            }))}
          />
        )}
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allBigCommerceCategories {
      edges {
        node {
          name
          id
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          ...BigCommerceProductsFragment
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          id
          product_id
          rich_text_editor
          title
          url
        }
      }
    }
  }
`
