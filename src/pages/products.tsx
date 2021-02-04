import type {
  BigCommerceProducts,
  ProductsPageQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  space,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system"

import { Breadcrumb } from "../components/Breadcrumb"
import { Layout } from "../components/Layout"
import { Listing } from "../components/Listing"
import { SEO } from "../components/SEO"

import { standardiseBigCommerceProduct } from "../utils/standardiseBigCommerceProduct"
import { standardiseContentstackProduct } from "../utils/standardiseContentstackProduct"

const CategoryHeaderStyled = styled.header`
  display: grid;
  justify-items: center;
  margin-block-end: ${themeGet("space.10")}px;

  ${compose(grid, layout, space)}
`

export type CategoryHeaderProps = GridProps &
  LayoutProps &
  SpaceProps & {
    description: string
    title: string
  }

const ProductsPage: React.FC<
  PageProps<ProductsPageQuery, PageContextTypeBreadcrumb>
> = ({
  data,
  // location,
  pageContext,
  // path
}) => {
  // console.log("pageContext", pageContext)
  // console.log("location", location)
  // console.log("data", data)
  // console.log("path", path)

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <SEO title="Product listings" />

      <div className={clsx("container")}>
        <Breadcrumb crumbs={crumbs} />
      </div>

      <CategoryHeaderStyled className={clsx("container")}>
        <h1>All beauty</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dot. Nullam ac eleifend turpis.</span>
      </CategoryHeaderStyled>

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
