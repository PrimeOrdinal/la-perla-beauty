import type {
  BigCommerceProducts,
  ProductsPageQuery,
} from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"

import { Breadcrumb } from "../components/Breadcrumb"
import { CategoryHeader } from "../components/CategoryHeader"
import { MenuListing } from "../components/MenuListing"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"
import { Tabs } from "../components/Tabs"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"


const ProductsPage: React.FC<
  PageProps<ProductsPageQuery, PageContextTypeBreadcrumb>
> = ({ data, pageContext }) => {
  // console.log("pageContext", pageContext)
  // console.log("location", location)
  // console.log("data", data)
  // console.log("path", path)

  const {
    breadcrumb: { crumbs },
    page,
  } = pageContext

  return (
    <Layout>
      <SEO title="Product listings" />

      <div className={clsx("container")}>
        <Breadcrumb crumbs={crumbs} />

        <CategoryHeader>
          <h1>{page?.name}Hello</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: page?.description as string,
            }}
          ></div>
        </CategoryHeader>
      </div>

      <Tabs
        marginBottom={{ _: 4, sm: 2, md: 4, lg: 8 }}
        marginTop={{ _: 4, sm: 2, md: 4, lg: 8 }}
      >
        <a href="/products">All</a>
        <a href="/fragrances">Fragrances</a>
        <a href="/makeup">Makeup</a>
        <a href="/body">Body</a>
      </Tabs>

      <MenuListing productCount={data.allBigCommerceProducts.edges.length} />

      <section className={clsx("container", "BigCommerce")}>
        <Listing
          edges={data.allBigCommerceProducts.edges.map(({ node }) => ({
            node: standardiseBigCommerceProduct(
              (node as unknown) as BigCommerceProducts
            ),
          }))}
        />
      </section>

      {/* <section className={clsx("container", "Contentstack")}>
        {data.allContentstackProducts && (
          <Listing
            edges={data.allContentstackProducts.edges.map(({ node }) => ({
              node: standardiseContentstackProduct(node),
            }))}
          />
        )}
      </section> */}
    </Layout>
  )
}

export default ProductsPage

export const query = graphql`
  query ProductsPage {
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
